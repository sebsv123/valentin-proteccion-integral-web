#!/usr/bin/env python3
"""
Detect and remove Gemini logo watermark from images.

The Gemini logo watermark typically appears in the bottom-right corner
as a small semi-transparent badge with the text "Gemini" or a colorful
gradient icon.

Strategy:
1. Scan the bottom-right corner region for known Gemini logo patterns
2. Remove by filling the affected area with surrounding pixels (inpainting)
3. Create backups of original files before modifying
"""

import os
import sys
import shutil
from pathlib import Path
from PIL import Image, ImageFilter

# Project root
PROJECT_ROOT = Path("/home/_sebastian/CascadeProjects/valentin-proteccion-integral-web")
IMAGES_DIR = PROJECT_ROOT / "public" / "images"
BACKUP_DIR = PROJECT_ROOT / "public" / "images_backup_gemini_originals"

# Gemini logo characteristics (typical for AI-generated images):
# - Appears in bottom-right corner
# - Small badge ~60-100px wide, ~20-40px tall
# - Often has a colorful gradient (blue/purple/pink) or dark background
# - May contain text "Gemini"
# - Semi-transparent overlay

# The region to inspect: bottom-right corner
# We'll check the last 120 pixels wide and last 50 pixels tall
CORNER_WIDTH = 120
CORNER_HEIGHT = 50

# Color ranges for Gemini logo detection
# The Gemini logo often has:
# 1. A dark/black rounded rectangle background
# 2. A colorful gradient (purple/blue/pink) icon
# 3. White text "Gemini"
# We'll detect based on unusual color patterns in the corner


def has_gemini_logo(img_path: str) -> tuple[bool, float]:
    """
    Detect if an image has a Gemini logo watermark in the bottom-right corner.
    Returns (detected, confidence_score).
    """
    try:
        img = Image.open(img_path).convert("RGBA")
    except Exception as e:
        print(f"  ⚠️  Cannot open {img_path}: {e}")
        return False, 0.0

    width, height = img.size

    # Extract bottom-right corner region
    left = max(0, width - CORNER_WIDTH)
    top = max(0, height - CORNER_HEIGHT)
    corner = img.crop((left, top, width, height))

    # Convert to RGB for analysis
    corner_rgb = corner.convert("RGB")
    pixels = list(corner_rgb.getdata())
    total_pixels = len(pixels)

    if total_pixels == 0:
        return False, 0.0

    # Count pixels that might be part of a logo/badge
    # Gemini logo typically has:
    # - Dark pixels (background of badge): R+G+B < 100
    # - Bright/colorful pixels (gradient icon): high saturation
    # - White/light pixels (text): R+G+B > 700

    dark_pixels = sum(1 for r, g, b in pixels if r + g + b < 100)
    colorful_pixels = sum(1 for r, g, b in pixels if max(r, g, b) - min(r, g, b) > 80 and r + g + b < 600)
    white_pixels = sum(1 for r, g, b in pixels if r > 200 and g > 200 and b > 200)

    dark_ratio = dark_pixels / total_pixels
    colorful_ratio = colorful_pixels / total_pixels
    white_ratio = white_pixels / total_pixels

    # Also check for a distinct horizontal band of unusual pixels
    # (the badge creates a horizontal cluster of non-background pixels)
    rows_with_content = 0
    for row_y in range(CORNER_HEIGHT):
        row_start = row_y * CORNER_WIDTH
        row_end = row_start + CORNER_WIDTH
        row_pixels = pixels[row_start:row_end]
        non_bg = sum(1 for r, g, b in row_pixels if r + g + b < 680 and not (r > 240 and g > 240 and b > 240))
        if non_bg > 10:  # At least 10 non-background pixels in this row
            rows_with_content += 1

    # Heuristic: Gemini logo typically has:
    # - Some dark pixels (badge background)
    # - Some colorful pixels (gradient icon)
    # - Some white pixels (text)
    # - Content clustered in a small band of rows (not spread across entire corner)

    score = 0.0

    # Dark background badge: dark_ratio between 0.05 and 0.4
    if 0.03 < dark_ratio < 0.5:
        score += 0.3

    # Colorful gradient icon
    if colorful_ratio > 0.02:
        score += 0.3

    # White text
    if white_ratio > 0.01:
        score += 0.2

    # Content clustered in a few rows (badge is compact)
    if 3 < rows_with_content < 25:
        score += 0.2

    # If the corner is mostly uniform (just background), low score
    # If there's a distinct cluster, high score
    if dark_ratio > 0.01 and colorful_ratio > 0.01 and rows_with_content > 3:
        score += 0.2  # Bonus for having all three characteristics

    detected = score >= 0.5
    return detected, min(score, 1.0)


def remove_watermark(img_path: str, output_path: str | None = None) -> bool:
    """
    Remove the Gemini logo watermark from the bottom-right corner.
    Uses content-aware fill by sampling surrounding pixels.
    """
    try:
        img = Image.open(img_path).convert("RGBA")
    except Exception as e:
        print(f"  ⚠️  Cannot open {img_path}: {e}")
        return False

    width, height = img.size

    if output_path is None:
        output_path = img_path

    # The watermark is typically in the bottom-right corner
    # We'll determine the exact bounds by analyzing the corner region
    left = max(0, width - CORNER_WIDTH)
    top = max(0, height - CORNER_HEIGHT)

    # Strategy 1: Try to find the exact badge bounds by looking for
    # a cluster of non-background pixels
    corner = img.crop((left, top, width, height))
    corner_rgb = corner.convert("RGB")
    pixels_list = list(corner_rgb.getdata())

    # Find the bounding box of the badge within the corner
    min_bx, min_by = CORNER_WIDTH, CORNER_HEIGHT
    max_bx, max_by = 0, 0

    for y in range(CORNER_HEIGHT):
        for x in range(CORNER_WIDTH):
            idx = y * CORNER_WIDTH + x
            if idx < len(pixels_list):
                r, g, b = pixels_list[idx]
                # Non-background pixel (not pure white/light background)
                if r + g + b < 650 and not (r > 240 and g > 240 and b > 240):
                    min_bx = min(min_bx, x)
                    min_by = min(min_by, y)
                    max_bx = max(max_bx, x)
                    max_by = max(max_by, y)

    # If we found a badge region
    if max_bx > min_bx and max_by > min_by:
        # Add some padding
        pad = 3
        badge_left = max(0, left + min_bx - pad)
        badge_top = max(0, top + min_by - pad)
        badge_right = min(width, left + max_bx + pad)
        badge_bottom = min(height, top + max_by + pad)

        print(f"    Badge region: ({badge_left}, {badge_top}) to ({badge_right}, {badge_bottom})")

        # Create a copy of the image
        img_copy = img.copy()

        # Method: Sample pixels from just above and to the left of the badge
        # to fill the badge area (since it's in the corner, we use nearby background)
        pixels_img = img_copy.load()

        for y in range(badge_top, badge_bottom):
            for x in range(badge_left, badge_right):
                # Try to sample from above first, then left
                sample_y = badge_top - (badge_bottom - y) - 1
                sample_x = badge_left - (badge_right - x) - 1

                if sample_y >= 0:
                    # Sample from above
                    pixels_img[x, y] = pixels_img[x, sample_y]
                elif sample_x >= 0:
                    # Sample from left
                    pixels_img[x, y] = pixels_img[sample_x, y]
                else:
                    # Fallback: average of surrounding pixels
                    avg_r, avg_g, avg_b, avg_a = 0, 0, 0, 0
                    count = 0
                    for dx in range(-2, 3):
                        for dy in range(-2, 3):
                            nx, ny = x + dx, y + dy
                            if 0 <= nx < width and 0 <= ny < height and not (badge_left <= nx < badge_right and badge_top <= ny < badge_bottom):
                                pr, pg, pb, pa = pixels_img[nx, ny]
                                avg_r += pr
                                avg_g += pg
                                avg_b += pb
                                avg_a += pa
                                count += 1
                    if count > 0:
                        pixels_img[x, y] = (avg_r // count, avg_g // count, avg_b // count, avg_a // count)

        img_copy.save(output_path, "PNG")
        return True
    else:
        # Fallback: just crop the bottom portion slightly
        # This is less ideal but works as a last resort
        print(f"    No distinct badge found, using fallback method")
        # Crop 40px from bottom
        cropped = img.crop((0, 0, width, height - 40))
        # Paste back onto a new image with the same dimensions
        new_img = Image.new("RGBA", (width, height), (255, 255, 255, 255))
        new_img.paste(cropped, (0, 0))
        new_img.save(output_path, "PNG")
        return True


def main():
    """Scan all images and remove Gemini logos."""
    print("=" * 70)
    print("  GEMINI LOGO WATERMARK DETECTOR & REMOVER")
    print("=" * 70)
    print(f"\nScanning images in: {IMAGES_DIR}")
    print()

    # Find all PNG and JPG images
    image_extensions = {".png", ".jpg", ".jpeg"}
    all_images = []
    for ext in image_extensions:
        all_images.extend(IMAGES_DIR.rglob(f"*{ext}"))

    all_images.sort()
    print(f"Found {len(all_images)} images total\n")

    # First pass: detect
    print("-" * 70)
    print("  PHASE 1: DETECTION")
    print("-" * 70)

    affected_images = []
    for img_path in all_images:
        rel_path = img_path.relative_to(PROJECT_ROOT)
        detected, confidence = has_gemini_logo(str(img_path))
        status = "✅ DETECTED" if detected else "  OK"
        if detected:
            affected_images.append(img_path)
        print(f"  [{confidence:.0%}] {status}  {rel_path}")

    print()
    print(f"\n  Images with potential Gemini logo: {len(affected_images)}")

    if not affected_images:
        print("\n  No Gemini logos detected. Nothing to remove.")
        return

    # Second pass: remove
    print()
    print("-" * 70)
    print("  PHASE 2: REMOVAL")
    print("-" * 70)

    # Create backup directory
    BACKUP_DIR.mkdir(parents=True, exist_ok=True)

    for img_path in affected_images:
        rel_path = img_path.relative_to(PROJECT_ROOT)
        print(f"\n  Processing: {rel_path}")

        # Create backup
        backup_path = BACKUP_DIR / img_path.relative_to(IMAGES_DIR)
        backup_path.parent.mkdir(parents=True, exist_ok=True)
        shutil.copy2(str(img_path), str(backup_path))
        print(f"    Backup saved to: {backup_path}")

        # Remove watermark
        success = remove_watermark(str(img_path))
        if success:
            print(f"    ✅ Watermark removed")
        else:
            print(f"    ❌ Failed to remove watermark")

    print()
    print("=" * 70)
    print(f"  COMPLETE: {len(affected_images)} images processed")
    print(f"  Backups saved in: {BACKUP_DIR}")
    print("=" * 70)


if __name__ == "__main__":
    main()
