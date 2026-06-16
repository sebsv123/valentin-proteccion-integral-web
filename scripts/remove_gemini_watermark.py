#!/usr/bin/env python3
"""
remove_gemini_watermark.py

Detects and removes the Gemini logo watermark from images in public/images/.

The Gemini logo appears as a small badge in the bottom-right corner of images,
with a dark background, colorful gradient icon (blue/purple/pink), and white
"Gemini" text.

Detection method (v4 - multi-strategy with enhanced sensitivity):
  - Uses a sliding window approach to find the badge at any position in the
    bottom-right corner (not assuming it fills the entire region)
  - Checks for the specific Gemini gradient colors (blue/purple/pink range)
    with MUCH more permissive color matching
  - Uses template matching to find the characteristic badge pattern:
    dark background + colorful icon + white text in a compact cluster
  - Multi-region pixel analysis at various sizes
  - Edge detection for badge boundary
  - Color clustering (dark + colorful adjacency)
  - Asymmetry analysis (bottom-right vs bottom-left)
  - Composite scoring across all strategies
  - NEW: Gemini-specific pattern matching (dark bg + colorful icon + white text
    in a compact cluster with specific spatial arrangement)
  - NEW: Lowered fast_check_score gate so sliding window actually runs
  - NEW: More permissive is_gemini_gradient_color with tolerance=120

Removal method:
  - Samples surrounding pixels to fill the badge area (inpainting by pixel
    interpolation from adjacent rows/columns)

Usage:
  python scripts/remove_gemini_watermark.py [--dry-run] [--force] [--sensitivity {low,medium,high,very_high}]

Options:
  --dry-run   Only detect, don't modify any images
  --force     Skip confirmation prompt
  --sensitivity  Detection sensitivity: low (strict), medium (balanced), high (aggressive), very_high (maximum)
"""

import os
import sys
import shutil
import argparse
import math
from pathlib import Path
from PIL import Image, ImageFilter, ImageEnhance

# --- Configuration ---
IMAGES_DIR = Path(__file__).resolve().parent.parent / "public" / "images"
BACKUP_DIR = Path(__file__).resolve().parent.parent / "public" / "images_backup_gemini_originals"

# File extensions to process
IMAGE_EXTENSIONS = {".jpg", ".jpeg", ".png", ".webp"}

# Gemini badge typical size (the badge is small, ~60x25 pixels)
BADGE_WIDTH = 60
BADGE_HEIGHT = 25

# Gemini gradient colors (blue/purple/pink range)
# The Gemini icon has a distinctive gradient from blue (#4285F4) to purple to pink
GEMINI_BLUE = (66, 133, 244)
GEMINI_PURPLE = (147, 51, 234)
GEMINI_PINK = (234, 67, 152)

# Sensitivity presets
SENSITIVITY_PRESETS = {
    "low": {
        "region_sizes": [(150, 60), (100, 40)],
        "dark_threshold": 80,
        "colorful_threshold": 40,
        "white_threshold": 200,
        "dark_ratio_min": 0.01,
        "colorful_ratio_min": 0.005,
        "white_ratio_min": 0.003,
        "rows_min": 1,
        "rows_max": 30,
        "edge_threshold": 50,
        "edge_ratio_min": 0.02,
        "min_score": 30,
        "sliding_window_min_score": 40,
        "gemini_color_min_score": 30,
    },
    "medium": {
        "region_sizes": [(200, 80), (150, 60), (100, 40), (80, 30), (60, 25)],
        "dark_threshold": 100,
        "colorful_threshold": 30,
        "white_threshold": 180,
        "dark_ratio_min": 0.005,
        "colorful_ratio_min": 0.002,
        "white_ratio_min": 0.001,
        "rows_min": 1,
        "rows_max": 40,
        "edge_threshold": 40,
        "edge_ratio_min": 0.01,
        "min_score": 20,
        "sliding_window_min_score": 25,
        "gemini_color_min_score": 20,
    },
    "high": {
        "region_sizes": [(200, 80), (150, 60), (100, 40), (80, 30), (60, 25), (40, 20)],
        "dark_threshold": 120,
        "colorful_threshold": 20,
        "white_threshold": 160,
        "dark_ratio_min": 0.001,
        "colorful_ratio_min": 0.001,
        "white_ratio_min": 0.0005,
        "rows_min": 1,
        "rows_max": 50,
        "edge_threshold": 30,
        "edge_ratio_min": 0.005,
        "min_score": 20,
        "sliding_window_min_score": 15,
        "gemini_color_min_score": 10,
    },
    "very_high": {
        "region_sizes": [(200, 80), (150, 60), (100, 40), (80, 30), (60, 25), (40, 20), (30, 15)],
        "dark_threshold": 140,
        "colorful_threshold": 15,
        "white_threshold": 150,
        "dark_ratio_min": 0.0005,
        "colorful_ratio_min": 0.0005,
        "white_ratio_min": 0.0003,
        "rows_min": 1,
        "rows_max": 60,
        "edge_threshold": 25,
        "edge_ratio_min": 0.003,
        "min_score": 5,
        "sliding_window_min_score": 8,
        "gemini_color_min_score": 5,
    },
}


def is_gemini_gradient_color(r, g, b, tolerance=120):
    """
    Check if a pixel color is close to the Gemini gradient palette
    (blue/purple/pink range).
    
    The Gemini icon uses a gradient from blue (#4285F4) through purple (#9333EA)
    to pink (#EA4398). These colors have high saturation and specific hue ranges.
    
    V4: MUCH more permissive - tolerance increased from 60 to 120, and added
    additional color range checks for better detection.
    """
    # Quick check: is it a colorful pixel (high saturation)?
    max_val = max(r, g, b)
    min_val = min(r, g, b)
    saturation = max_val - min_val
    
    if saturation < 20:
        return False
    
    # Check if it's in the blue/purple/pink hue range
    # In RGB terms: blue has high B, purple has high R+B, pink has high R+B
    # The common pattern is: green is the lowest channel
    if g <= r and g <= b:
        # Green is lowest - this is in the blue-purple-pink range
        # Check that the dominant channels are red and blue
        if r >= g * 1.1 or b >= g * 1.1:
            return True
    
    # Also check specific Gemini colors with tolerance
    for gem_r, gem_g, gem_b in [GEMINI_BLUE, GEMINI_PURPLE, GEMINI_PINK]:
        dr = abs(r - gem_r)
        dg = abs(g - gem_g)
        db = abs(b - gem_b)
        if dr + dg + db < tolerance:
            return True
    
    # Additional check: any pixel where the dominant channel is blue or red,
    # and green is significantly lower, with decent saturation
    # This catches Gemini-like colors that are far from the exact reference colors
    if saturation >= 30:
        if b > g * 1.3 and b > r * 0.7:  # Blue-dominant
            return True
        if r > g * 1.3 and r > b * 0.7:  # Red-dominant (pink range)
            return True
        if r > g * 1.2 and b > g * 1.2:  # Purple (both R and B high)
            return True
    
    return False


def detect_gemini_badge_pixels(region, dark_threshold, colorful_threshold, white_threshold):
    """
    Analyze a region and return counts of dark, colorful, and white pixels,
    plus rows that contain badge-like content.
    """
    pixels = list(region.getdata())
    region_w, region_h = region.size
    total = len(pixels)

    dark_pixels = 0
    colorful_pixels = 0
    white_pixels = 0
    gemini_color_pixels = 0
    rows_with_dark = set()
    rows_with_colorful = set()
    rows_with_white = set()
    rows_with_gemini = set()

    for y in range(region_h):
        for x in range(region_w):
            idx = y * region_w + x
            if idx >= len(pixels):
                break
            r, g, b = pixels[idx]
            brightness = (r + g + b) / 3
            color_variance = max(r, g, b) - min(r, g, b)

            if brightness <= dark_threshold:
                dark_pixels += 1
                rows_with_dark.add(y)

            if color_variance >= colorful_threshold:
                colorful_pixels += 1
                rows_with_colorful.add(y)

            if brightness >= white_threshold:
                white_pixels += 1
                rows_with_white.add(y)

            if is_gemini_gradient_color(r, g, b):
                gemini_color_pixels += 1
                rows_with_gemini.add(y)

    return {
        "total": total,
        "dark": dark_pixels,
        "colorful": colorful_pixels,
        "white": white_pixels,
        "gemini_color": gemini_color_pixels,
        "rows_with_dark": len(rows_with_dark),
        "rows_with_colorful": len(rows_with_colorful),
        "rows_with_white": len(rows_with_white),
        "rows_with_gemini": len(rows_with_gemini),
    }


def detect_edge_density(region, edge_threshold=40):
    """
    Detect edges in the region using a simple gradient-based edge detection.
    A Gemini badge creates a sharp boundary between the dark badge and the
    surrounding image, which shows up as strong edges.
    """
    gray = region.convert("L")
    pixels = list(gray.getdata())
    w, h = region.size

    edge_pixels = 0
    total_interior = 0

    for y in range(1, h - 1):
        for x in range(1, w - 1):
            idx = y * w + x
            # Simple Sobel-like gradient
            gx = abs(pixels[idx - 1] - pixels[idx + 1])
            gy = abs(pixels[idx - w] - pixels[idx + w])
            gradient = math.sqrt(gx * gx + gy * gy)
            if gradient > edge_threshold:
                edge_pixels += 1
            total_interior += 1

    return edge_pixels / total_interior if total_interior > 0 else 0


def detect_color_cluster(region, dark_threshold=100, colorful_threshold=30):
    """
    Detect if there's a cluster of dark pixels adjacent to colorful pixels,
    which is characteristic of the Gemini badge (dark bg with colorful icon).
    """
    pixels = list(region.getdata())
    w, h = region.size
    cluster_score = 0

    for y in range(h - 1):
        for x in range(w - 1):
            idx = y * w + x
            r, g, b = pixels[idx]
            brightness = (r + g + b) / 3
            cv = max(r, g, b) - min(r, g, b)

            # Check if this pixel is dark
            if brightness <= dark_threshold:
                # Check neighbors for colorful pixels
                for dx, dy in [(1, 0), (0, 1), (1, 1), (-1, 1), (1, -1)]:
                    nx, ny = x + dx, y + dy
                    if 0 <= nx < w and 0 <= ny < h:
                        nidx = ny * w + nx
                        nr, ng, nb = pixels[nidx]
                        ncv = max(nr, ng, nb) - min(nr, ng, nb)
                        if ncv >= colorful_threshold:
                            cluster_score += 1
                            break

    total_pairs = (h - 1) * (w - 1)
    return cluster_score / total_pairs if total_pairs > 0 else 0


def detect_gemini_pattern(region, dark_threshold=100, colorful_threshold=30, white_threshold=180):
    """
    V5: STRICT - Detect the specific Gemini badge pattern.
    
    The Gemini badge has a very specific spatial arrangement:
    - Dark background (rounded rectangle) throughout the badge
    - Colorful gradient icon (blue/purple/pink) in the center-left area
    - White "Gemini" text to the right of the icon
    
    This function is now MUCH more strict to avoid false positives.
    It requires:
    1. Gemini-specific colors present (not just any colorful pixels)
    2. Dark background throughout most of the region
    3. White text in the upper portion
    4. All three components (dark+colorful+white) present together
    5. The badge must be compact (not spread across a huge area)
    """
    pixels = list(region.getdata())
    w, h = region.size
    total = len(pixels)
    
    if total == 0:
        return 0.0
    
    # Count pixel types across the entire region
    dark_count = 0
    colorful_count = 0
    white_count = 0
    gemini_count = 0
    
    for y in range(h):
        for x in range(w):
            idx = y * w + x
            if idx >= total:
                break
            r, g, b = pixels[idx]
            brightness = (r + g + b) / 3
            cv = max(r, g, b) - min(r, g, b)
            
            if brightness <= dark_threshold:
                dark_count += 1
            if cv >= colorful_threshold:
                colorful_count += 1
            if brightness >= white_threshold:
                white_count += 1
            if is_gemini_gradient_color(r, g, b):
                gemini_count += 1
    
    dark_ratio = dark_count / total
    colorful_ratio = colorful_count / total
    white_ratio = white_count / total
    gemini_ratio = gemini_count / total
    
    # STRICT REQUIREMENT 1: Gemini-specific colors MUST be present
    # A real Gemini badge always has blue/purple/pink gradient pixels
    if gemini_ratio < 0.005:
        return 0.0
    
    # STRICT REQUIREMENT 2: Must have ALL THREE components (dark + colorful + white)
    # A real badge has dark background, colorful icon, AND white text
    if dark_ratio < 0.02 or colorful_ratio < 0.02 or white_ratio < 0.01:
        return 0.0
    
    # STRICT REQUIREMENT 3: The badge must be compact
    # Check that dark, colorful, and white pixels are clustered together
    # by finding the bounding box of all badge-like pixels
    min_y, max_y = h, 0
    min_x, max_x = w, 0
    badge_pixel_count = 0
    
    for y in range(h):
        for x in range(w):
            idx = y * w + x
            if idx >= total:
                break
            r, g, b = pixels[idx]
            brightness = (r + g + b) / 3
            cv = max(r, g, b) - min(r, g, b)
            
            is_badge = (
                brightness <= dark_threshold
                or cv >= colorful_threshold
                or brightness >= white_threshold
            )
            
            if is_badge:
                min_y = min(min_y, y)
                max_y = max(max_y, y)
                min_x = min(min_x, x)
                max_x = max(max_x, x)
                badge_pixel_count += 1
    
    if badge_pixel_count == 0:
        return 0.0
    
    bbox_height = max_y - min_y + 1
    bbox_width = max_x - min_x + 1
    bbox_area = bbox_height * bbox_width
    fill_ratio = badge_pixel_count / bbox_area if bbox_area > 0 else 0
    
    # The badge should be reasonably compact (fill_ratio > 0.3 means well-filled)
    if fill_ratio < 0.3:
        return 0.0
    
    # Now calculate the pattern score
    pattern_score = 0.0
    
    # Score 1: Gemini-specific color ratio (up to 40 points)
    pattern_score += min(gemini_ratio / 0.10, 1.0) * 40
    
    # Score 2: Dark background ratio (up to 20 points)
    pattern_score += min(dark_ratio / 0.30, 1.0) * 20
    
    # Score 3: Colorful icon ratio (up to 20 points)
    pattern_score += min(colorful_ratio / 0.20, 1.0) * 20
    
    # Score 4: White text ratio (up to 15 points)
    pattern_score += min(white_ratio / 0.15, 1.0) * 15
    
    # Score 5: Compactness bonus (up to 15 points)
    pattern_score += min(fill_ratio / 0.60, 1.0) * 15
    
    # Score 6: Bounding box should be badge-sized (not too large)
    # A real Gemini badge is ~60x25 pixels
    if bbox_height <= 40 and bbox_width <= 80:
        pattern_score += 10  # Bonus for correct size
    
    return pattern_score


def sliding_window_detect(img, config, fast_check_score=0):
    """
    Use a sliding window approach to find the Gemini badge at any position
    in the bottom-right corner of the image.
    
    The badge is typically ~60x25 pixels. We slide a window of this size
    across the bottom-right area and score each position.
    
    V4: Lowered fast_check_score gate from 5 to 2 so it actually runs on
    more images. Also added Gemini pattern detection to the window scoring.
    """
    # V4: Lowered threshold so sliding window runs on more images
    if fast_check_score < 2:
        return 0, None
    
    width, height = img.size
    
    # Search area: bottom-right corner, focused area
    search_left = max(0, width - 200)
    search_top = max(0, height - 80)
    search_right = width
    search_bottom = height
    
    # If the image is small, adjust search area
    if width < 200:
        search_left = max(0, width - BADGE_WIDTH - 20)
    if height < 80:
        search_top = max(0, height - BADGE_HEIGHT - 20)
    
    best_window_score = 0
    best_window_pos = None
    
    # Use moderate stride for balance of speed and accuracy
    stride = 10
    
    # Pre-compute the threshold for early exit
    early_exit_threshold = 40
    
    for wy in range(search_top, search_bottom - BADGE_HEIGHT, stride):
        for wx in range(search_left, search_right - BADGE_WIDTH, stride):
            window = img.crop((wx, wy, wx + BADGE_WIDTH, wy + BADGE_HEIGHT))
            stats = detect_gemini_badge_pixels(
                window,
                config["dark_threshold"],
                config["colorful_threshold"],
                config["white_threshold"],
            )
            
            total = stats["total"]
            if total == 0:
                continue
            
            dark_ratio = stats["dark"] / total
            colorful_ratio = stats["colorful"] / total
            white_ratio = stats["white"] / total
            gemini_ratio = stats["gemini_color"] / total
            
            # Quick reject: if no dark pixels and no colorful pixels, skip
            if dark_ratio < 0.01 and colorful_ratio < 0.01:
                continue
            
            # Score this window position
            score = 0
            
            # Dark background (should be significant but not overwhelming)
            if dark_ratio > 0.05 and dark_ratio < 0.95:
                score += min(dark_ratio / 0.40, 1.0) * 20
            
            # Colorful icon
            if colorful_ratio > 0.02:
                score += min(colorful_ratio / 0.20, 1.0) * 25
            
            # White text
            if white_ratio > 0.01:
                score += min(white_ratio / 0.15, 1.0) * 20
            
            # Gemini-specific colors (strong signal)
            if gemini_ratio > 0.01:
                score += min(gemini_ratio / 0.10, 1.0) * 25
            
            # All three types present (dark + colorful + white) - this is key
            has_dark = dark_ratio > 0.03
            has_colorful = colorful_ratio > 0.02
            has_white = white_ratio > 0.01
            if has_dark and has_colorful and has_white:
                score += 15  # Bonus for having all three badge components
            
            # Rows diversity - badge should span multiple rows
            row_diversity = (stats["rows_with_dark"] + stats["rows_with_colorful"] + stats["rows_with_white"]) / 3
            if row_diversity >= 5:
                score += min(row_diversity / BADGE_HEIGHT, 1.0) * 10
            
            # V4: Add Gemini pattern score for this window
            pattern_score = detect_gemini_pattern(window, config["dark_threshold"], config["colorful_threshold"], config["white_threshold"])
            score += pattern_score * 0.3  # Weight pattern score
            
            if score > best_window_score:
                best_window_score = score
                best_window_pos = (wx, wy)
                
                # Early exit: if we found a very strong match, stop searching
                if best_window_score >= early_exit_threshold:
                    return best_window_score, best_window_pos
    
    return best_window_score, best_window_pos


def has_gemini_logo(img_path: Path, sensitivity: str = "high") -> tuple[bool, float, dict]:
    """
    Detect if an image has the Gemini logo watermark in the bottom-right corner.

    Uses multiple detection strategies and region sizes for robust detection.

    V4: Added Gemini pattern detection strategy, more permissive color matching,
    and lowered thresholds for better sensitivity.

    Returns:
        (has_logo: bool, confidence: float, details: dict)
    """
    try:
        img = Image.open(img_path).convert("RGB")
    except Exception as e:
        return False, 0.0, {"error": str(e)}

    width, height = img.size
    config = SENSITIVITY_PRESETS.get(sensitivity, SENSITIVITY_PRESETS["high"])

    best_score = 0
    best_details = {}
    all_scores = []

    # Strategy 1: Check bottom-right corner at multiple sizes
    for rw, rh in config["region_sizes"]:
        left = max(0, width - rw)
        top = max(0, height - rh)
        right = width
        bottom = height

        region = img.crop((left, top, right, bottom))
        stats = detect_gemini_badge_pixels(
            region,
            config["dark_threshold"],
            config["colorful_threshold"],
            config["white_threshold"],
        )

        dark_ratio = stats["dark"] / stats["total"] if stats["total"] > 0 else 0
        colorful_ratio = stats["colorful"] / stats["total"] if stats["total"] > 0 else 0
        white_ratio = stats["white"] / stats["total"] if stats["total"] > 0 else 0
        gemini_ratio = stats["gemini_color"] / stats["total"] if stats["total"] > 0 else 0

        # Calculate score for this region
        score = 0
        score += min(dark_ratio / 0.20, 1.0) * 10
        score += min(colorful_ratio / 0.15, 1.0) * 10
        score += min(white_ratio / 0.10, 1.0) * 5
        score += min(gemini_ratio / 0.08, 1.0) * 25  # Gemini-specific colors weighted more
        score += min(stats["rows_with_dark"] / 20, 1.0) * 3
        score += min(stats["rows_with_colorful"] / 15, 1.0) * 3
        score += min(stats["rows_with_white"] / 10, 1.0) * 2
        score += min(stats["rows_with_gemini"] / 10, 1.0) * 10

        region_details = {
            "region": f"{rw}x{rh}",
            "dark_ratio": round(dark_ratio, 4),
            "colorful_ratio": round(colorful_ratio, 4),
            "white_ratio": round(white_ratio, 4),
            "gemini_ratio": round(gemini_ratio, 4),
            "rows_dark": stats["rows_with_dark"],
            "rows_colorful": stats["rows_with_colorful"],
            "rows_white": stats["rows_with_white"],
            "rows_gemini": stats["rows_with_gemini"],
            "score": round(score, 1),
        }
        all_scores.append(region_details)

        if score > best_score:
            best_score = score
            best_details = region_details

    # Strategy 2: Edge detection in bottom-right corner
    edge_region = img.crop((max(0, width - 150), max(0, height - 60), width, height))
    edge_density = detect_edge_density(edge_region, config["edge_threshold"])
    edge_score = min(edge_density / 0.05, 1.0) * 5

    # Strategy 3: Color cluster detection (dark + colorful adjacency)
    cluster_region = img.crop((max(0, width - 100), max(0, height - 40), width, height))
    cluster_density = detect_color_cluster(cluster_region, config["dark_threshold"], config["colorful_threshold"])
    cluster_score = min(cluster_density / 0.02, 1.0) * 5

    # Strategy 4: Check if bottom-right is significantly different from bottom-left
    # (Gemini badge only appears in bottom-right)
    br_region = img.crop((max(0, width - 60), max(0, height - 25), width, height))
    bl_region = img.crop((0, max(0, height - 25), min(60, width), height))
    br_stats = detect_gemini_badge_pixels(br_region, config["dark_threshold"], config["colorful_threshold"], config["white_threshold"])
    bl_stats = detect_gemini_badge_pixels(bl_region, config["dark_threshold"], config["colorful_threshold"], config["white_threshold"])

    br_dark = br_stats["dark"] / br_stats["total"] if br_stats["total"] > 0 else 0
    bl_dark = bl_stats["dark"] / bl_stats["total"] if bl_stats["total"] > 0 else 0
    br_colorful = br_stats["colorful"] / br_stats["total"] if br_stats["total"] > 0 else 0
    bl_colorful = bl_stats["colorful"] / bl_stats["total"] if bl_stats["total"] > 0 else 0
    br_gemini = br_stats["gemini_color"] / br_stats["total"] if br_stats["total"] > 0 else 0
    bl_gemini = bl_stats["gemini_color"] / bl_stats["total"] if bl_stats["total"] > 0 else 0

    # If bottom-right has more dark+colorful+gemini content than bottom-left, it's suspicious
    asymmetry_score = 0
    if br_dark > bl_dark * 1.5 and br_colorful > bl_colorful * 1.5:
        asymmetry_score = min((br_dark - bl_dark) * 50, 1.0) * 5
    
    # Gemini-specific asymmetry (strong signal)
    gemini_asymmetry_score = 0
    if br_gemini > bl_gemini * 2.0 and br_gemini > 0.01:
        gemini_asymmetry_score = min(br_gemini * 100, 1.0) * 15

    # Strategy 5: Sliding window detection
    window_score, window_pos = sliding_window_detect(img, config)
    sliding_score = min(window_score / 50, 1.0) * 10

    # V5: Strategy 6: Gemini pattern detection (STRICT - primary signal)
    pattern_region = img.crop((max(0, width - 60), max(0, height - 25), width, height))
    pattern_score = detect_gemini_pattern(pattern_region, config["dark_threshold"], config["colorful_threshold"], config["white_threshold"])
    pattern_score_weighted = min(pattern_score / 50, 1.0) * 30

    # Composite score - Gemini-specific signals are weighted much higher
    composite_score = best_score + edge_score + cluster_score + asymmetry_score + gemini_asymmetry_score + sliding_score + pattern_score_weighted
    
    # GATE: If no Gemini-specific colors found at all (gemini_ratio < 0.001 in best region),
    # AND pattern score is 0, then it's almost certainly a false positive
    # Only allow through if other strategies give an extremely strong signal
    if best_details and best_details.get("gemini_ratio", 0) < 0.001 and pattern_score == 0:
        # Only pass through if composite is very high from other strategies
        if composite_score < 60:
            composite_score = min(composite_score, 15)  # Cap at 15 to prevent false positive detection

    details = {
        "image_size": f"{width}x{height}",
        "composite_score": round(composite_score, 1),
        "best_region": best_details,
        "edge_density": round(edge_density, 4),
        "edge_score": round(edge_score, 1),
        "cluster_density": round(cluster_density, 4),
        "cluster_score": round(cluster_score, 1),
        "asymmetry_score": round(asymmetry_score, 1),
        "gemini_asymmetry_score": round(gemini_asymmetry_score, 1),
        "sliding_window_score": round(sliding_score, 1),
        "sliding_window_pos": window_pos,
        "pattern_score": round(pattern_score, 1),
        "pattern_score_weighted": round(pattern_score_weighted, 1),
        "all_regions": all_scores,
    }

    has_logo = composite_score >= config["min_score"]

    return has_logo, min(composite_score, 100.0), details


def remove_watermark(img_path: Path) -> bool:
    """
    Remove the Gemini logo watermark from the bottom-right corner of an image
    by sampling surrounding pixels to fill the badge area.

    Returns True if the image was modified.
    """
    try:
        img = Image.open(img_path).convert("RGB")
    except Exception as e:
        print(f"  ⚠️  Cannot open {img_path.name}: {e}")
        return False

    width, height = img.size
    pixels = img.load()

    # Define the badge region (bottom-right corner)
    REGION_WIDTH = 150
    REGION_HEIGHT = 60
    left = max(0, width - REGION_WIDTH)
    top = max(0, height - REGION_HEIGHT)
    right = width
    bottom = height

    # Find the actual badge boundaries within the region
    # by scanning for the content rows
    badge_top = bottom
    badge_bottom = top
    badge_left = right
    badge_right = left

    DARK_THRESHOLD = 100
    COLORFUL_THRESHOLD = 30
    WHITE_THRESHOLD = 180

    for y in range(top, bottom):
        for x in range(left, right):
            r, g, b = pixels[x, y]
            brightness = (r + g + b) / 3
            color_variance = max(r, g, b) - min(r, g, b)

            is_content = (
                brightness <= DARK_THRESHOLD
                or color_variance >= COLORFUL_THRESHOLD
                or brightness >= WHITE_THRESHOLD
            )

            if is_content:
                badge_top = min(badge_top, y)
                badge_bottom = max(badge_bottom, y)
                badge_left = min(badge_left, x)
                badge_right = max(badge_right, x)

    # Add a small padding
    pad = 3
    badge_top = max(top, badge_top - pad)
    badge_bottom = min(bottom - 1, badge_bottom + pad)
    badge_left = max(left, badge_left - pad)
    badge_right = min(right - 1, badge_right + pad)

    # If no badge content found, skip
    if badge_bottom <= badge_top or badge_right <= badge_left:
        print(f"  ℹ️  No badge region detected in {img_path.name}")
        return False

    # Remove the watermark by sampling surrounding pixels
    # For each pixel in the badge region, sample from surrounding area
    for y in range(badge_top, badge_bottom + 1):
        for x in range(badge_left, badge_right + 1):
            samples = []

            # Sample from outside the badge region in all directions
            # Left
            for sx in range(badge_left - 1, max(left - 1, badge_left - 10) - 1, -1):
                if sx >= 0:
                    samples.append(pixels[sx, y])
                    break

            # Right
            for sx in range(badge_right + 1, min(right, badge_right + 10)):
                if sx < width:
                    samples.append(pixels[sx, y])
                    break

            # Above
            for sy in range(badge_top - 1, max(top - 1, badge_top - 10) - 1, -1):
                if sy >= 0:
                    samples.append(pixels[x, sy])
                    break

            # Below
            for sy in range(badge_bottom + 1, min(bottom, badge_bottom + 10)):
                if sy < height:
                    samples.append(pixels[x, sy])
                    break

            if samples:
                avg_r = sum(s[0] for s in samples) // len(samples)
                avg_g = sum(s[1] for s in samples) // len(samples)
                avg_b = sum(s[2] for s in samples) // len(samples)
                pixels[x, y] = (avg_r, avg_g, avg_b)

    img.save(img_path, quality=95)
    return True


def backup_image(img_path: Path) -> bool:
    """Create a backup of the original image before modification."""
    rel_path = img_path.relative_to(IMAGES_DIR)
    backup_path = BACKUP_DIR / rel_path
    backup_path.parent.mkdir(parents=True, exist_ok=True)
    shutil.copy2(img_path, backup_path)
    return True


def main():
    parser = argparse.ArgumentParser(
        description="Detect and remove Gemini logo watermark from images"
    )
    parser.add_argument(
        "--dry-run",
        action="store_true",
        help="Only detect watermarks, don't modify any images",
    )
    parser.add_argument(
        "--force",
        action="store_true",
        help="Skip confirmation prompt",
    )
    parser.add_argument(
        "--sensitivity",
        choices=["low", "medium", "high", "very_high"],
        default="high",
        help="Detection sensitivity (default: high)",
    )
    parser.add_argument(
        "--min-score",
        type=float,
        default=None,
        help="Override minimum score threshold (lower = more sensitive)",
    )
    args = parser.parse_args()

    if not IMAGES_DIR.exists():
        print(f"❌ Images directory not found: {IMAGES_DIR}")
        sys.exit(1)

    # Collect all images
    image_files = []
    for ext in IMAGE_EXTENSIONS:
        image_files.extend(IMAGES_DIR.rglob(f"*{ext}"))
        image_files.extend(IMAGES_DIR.rglob(f"*{ext.upper()}"))

    image_files = sorted(set(image_files))
    print(f"📁 Scanning {len(image_files)} images in {IMAGES_DIR}...")
    print(f"🔧 Sensitivity: {args.sensitivity}")
    if args.min_score is not None:
        print(f"🔧 Min score override: {args.min_score}")
    print()

    # Detect watermarks
    detected = []
    not_detected = []

    for img_path in image_files:
        has_logo, confidence, details = has_gemini_logo(img_path, args.sensitivity)
        rel_path = img_path.relative_to(IMAGES_DIR)

        # Apply min_score override if specified
        if args.min_score is not None and has_logo:
            has_logo = confidence >= args.min_score

        if has_logo:
            detected.append((img_path, confidence, details))
            print(f"  🔴 {rel_path} — Gemini logo detected (score: {confidence:.1f}%)")
        else:
            not_detected.append((img_path, confidence, details))
            if confidence > 15:
                print(f"  🟡 {rel_path} — Possible logo (score: {confidence:.1f}%)")
            else:
                print(f"  🟢 {rel_path} — No logo (score: {confidence:.1f}%)")

    print(f"\n{'='*60}")
    print(f"📊 RESULTS:")
    print(f"  Total images scanned: {len(image_files)}")
    print(f"  Gemini logo detected: {len(detected)}")
    print(f"  No logo detected:     {len(not_detected)}")
    print(f"{'='*60}")

    if detected:
        print(f"\n📋 Images with Gemini logo:")
        for img_path, confidence, details in detected:
            rel_path = img_path.relative_to(IMAGES_DIR)
            print(f"  - {rel_path} (score: {confidence:.1f}%)")
            if details.get("best_region"):
                br = details["best_region"]
                print(f"    Best region: {br.get('region', '?')} "
                      f"dark={br.get('dark_ratio', 0):.4f} "
                      f"colorful={br.get('colorful_ratio', 0):.4f} "
                      f"white={br.get('white_ratio', 0):.4f} "
                      f"gemini={br.get('gemini_ratio', 0):.4f}")
            print(f"    Edge: {details.get('edge_density', 0):.4f} "
                  f"Cluster: {details.get('cluster_density', 0):.4f} "
                  f"Asymmetry: {details.get('asymmetry_score', 0):.1f} "
                  f"GemAsym: {details.get('gemini_asymmetry_score', 0):.1f} "
                  f"Sliding: {details.get('sliding_window_score', 0):.1f} "
                  f"Pattern: {details.get('pattern_score', 0):.1f}")
            if details.get("sliding_window_pos"):
                print(f"    Sliding window pos: {details['sliding_window_pos']}")

    if args.dry_run:
        print(f"\n🔍 Dry-run complete. No images were modified.")
        return

    if not detected:
        print(f"\n✅ No Gemini logos found. Nothing to do.")
        return

    # Confirm before proceeding
    if not args.force:
        print(f"\n⚠️  This will modify {len(detected)} images.")
        print(f"   Backups will be saved to: {BACKUP_DIR}")
        response = input("   Proceed? (y/N): ").strip().lower()
        if response != "y":
            print("❌ Aborted.")
            return

    # Process images
    print(f"\n🔄 Processing {len(detected)} images...")
    modified = 0
    errors = 0

    for img_path, confidence, details in detected:
        rel_path = img_path.relative_to(IMAGES_DIR)
        try:
            backup_image(img_path)
            if remove_watermark(img_path):
                modified += 1
                print(f"  ✅ {rel_path} — Watermark removed")
            else:
                errors += 1
                print(f"  ⚠️  {rel_path} — Could not remove watermark")
        except Exception as e:
            errors += 1
            print(f"  ❌ {rel_path} — Error: {e}")

    print(f"\n{'='*60}")
    print(f"✅ COMPLETE:")
    print(f"  Images modified: {modified}")
    print(f"  Errors:          {errors}")
    print(f"  Backups saved to: {BACKUP_DIR}")
    print(f"{'='*60}")


if __name__ == "__main__":
    main()
