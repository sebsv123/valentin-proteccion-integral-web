#!/usr/bin/env python3
"""
diagnose_gemini_logo.py

Efficient diagnostic script to analyze pixel characteristics of specific images
to understand why the Gemini logo detection isn't working.

Usage:
  python scripts/diagnose_gemini_logo.py [image_name]

  If image_name is provided, only that image is analyzed.
  If omitted, all key images are analyzed one by one.
"""

import sys
import os
from pathlib import Path
from PIL import Image

IMAGES_DIR = Path(__file__).resolve().parent.parent / "public" / "images"


def analyze_image(rel_path: str):
    """Analyze a single image and print detailed pixel info."""
    img_path = IMAGES_DIR / rel_path
    if not img_path.exists():
        print(f"❌ {rel_path} — NOT FOUND")
        return

    img = Image.open(img_path).convert("RGB")
    width, height = img.size
    print(f"\n{'='*70}")
    print(f"📷 {rel_path} ({width}x{height})")
    print(f"{'='*70}")

    # Define regions to check - focus on corners at various sizes
    regions = []
    for corner_name, corner_fn in [
        ("BR", lambda w, h, rw, rh: (max(0, w-rw), max(0, h-rh))),
        ("BL", lambda w, h, rw, rh: (0, max(0, h-rh))),
        ("TR", lambda w, h, rw, rh: (max(0, w-rw), 0)),
        ("TL", lambda w, h, rw, rh: (0, 0)),
    ]:
        for rw, rh in [(200, 80), (150, 60), (100, 40), (80, 30), (60, 25), (40, 20)]:
            regions.append((f"{corner_name}-{rw}x{rh}", corner_fn, rw, rh))

    for name, corner_fn, rw, rh in regions:
        left, top = corner_fn(width, height, rw, rh)
        right = min(width, left + rw)
        bottom = min(height, top + rh)

        region = img.crop((left, top, right, bottom))
        pixels = list(region.getdata())
        total = len(pixels)
        if total == 0:
            continue

        # Count pixels at various thresholds
        dark_80 = sum(1 for r, g, b in pixels if (r + g + b) / 3 <= 80)
        dark_100 = sum(1 for r, g, b in pixels if (r + g + b) / 3 <= 100)
        dark_120 = sum(1 for r, g, b in pixels if (r + g + b) / 3 <= 120)
        dark_150 = sum(1 for r, g, b in pixels if (r + g + b) / 3 <= 150)

        colorful_30 = sum(1 for r, g, b in pixels if max(r, g, b) - min(r, g, b) >= 30)
        colorful_40 = sum(1 for r, g, b in pixels if max(r, g, b) - min(r, g, b) >= 40)
        colorful_50 = sum(1 for r, g, b in pixels if max(r, g, b) - min(r, g, b) >= 50)
        colorful_60 = sum(1 for r, g, b in pixels if max(r, g, b) - min(r, g, b) >= 60)

        white_180 = sum(1 for r, g, b in pixels if (r + g + b) / 3 >= 180)
        white_200 = sum(1 for r, g, b in pixels if (r + g + b) / 3 >= 200)
        white_220 = sum(1 for r, g, b in pixels if (r + g + b) / 3 >= 220)

        # Count rows with any "badge-like" content
        rows_with_dark = set()
        rows_with_colorful = set()
        rows_with_white = set()
        for y in range(rh):
            for x in range(rw):
                idx = y * rw + x
                if idx >= len(pixels):
                    break
                r, g, b = pixels[idx]
                if (r + g + b) / 3 <= 100:
                    rows_with_dark.add(y)
                if max(r, g, b) - min(r, g, b) >= 30:
                    rows_with_colorful.add(y)
                if (r + g + b) / 3 >= 180:
                    rows_with_white.add(y)

        print(f"\n  [{name}]")
        print(f"    Dark pixels:   ≤80={dark_80/total:.4f}({dark_80})  ≤100={dark_100/total:.4f}({dark_100})  ≤120={dark_120/total:.4f}({dark_120})  ≤150={dark_150/total:.4f}({dark_150})")
        print(f"    Colorful px:   ≥30={colorful_30/total:.4f}({colorful_30})  ≥40={colorful_40/total:.4f}({colorful_40})  ≥50={colorful_50/total:.4f}({colorful_50})  ≥60={colorful_60/total:.4f}({colorful_60})")
        print(f"    White pixels:  ≥180={white_180/total:.4f}({white_180})  ≥200={white_200/total:.4f}({white_200})  ≥220={white_220/total:.4f}({white_220})")
        print(f"    Rows w/ dark={len(rows_with_dark)} colorful={len(rows_with_colorful)} white={len(rows_with_white)}")

        # Show the actual pixel values in the bottom-right corner (last few rows)
        if "BR" in name and rw <= 60:
            print(f"    [Pixel grid - last {min(rh, 10)} rows of bottom-right {rw}x{rh} region]:")
            for y in range(max(0, rh - 10), rh):
                row_pixels = []
                for x in range(min(rw, 20)):  # Show first 20 columns
                    idx = y * rw + x
                    if idx < len(pixels):
                        r, g, b = pixels[idx]
                        brightness = (r + g + b) / 3
                        cv = max(r, g, b) - min(r, g, b)
                        # Mark potential badge pixels
                        marker = ""
                        if brightness <= 100:
                            marker += "D"
                        if cv >= 30:
                            marker += "C"
                        if brightness >= 180:
                            marker += "W"
                        if marker:
                            row_pixels.append(f"({r:3d},{g:3d},{b:3d}){marker:>4s}")
                        else:
                            row_pixels.append(f"({r:3d},{g:3d},{b:3d})    ")
                print(f"      y={y}: {' '.join(row_pixels)}")


def main():
    # Default list of images to check
    test_images = [
        "sebastian.png",
        "sebastian_con_cliente.png",
        "rosa_y_sebastian.jpeg",
        "rosa_y_sebastian_conversando.png",
        "rosa_y_sebastian_de_pie.png",
        "rosa_y_sebastian_mascotas.png",
        "rosa_y_sebastian_mesa.png",
        "agent/sebastian.jpg",
        "agent/rosa-oficina.jpg",
        "agent/rosa-valentin.jpg",
    ]

    # If a specific image name is provided, only analyze that one
    if len(sys.argv) > 1:
        target = sys.argv[1]
        # Check if it's a full path or just a filename
        if "/" in target:
            analyze_image(target)
        else:
            # Search for the image in all subdirectories
            found = False
            for ext in [".jpg", ".jpeg", ".png", ".webp"]:
                for subdir in ["", "agent/", "team/", "hero/"]:
                    candidate = subdir + target
                    if (IMAGES_DIR / candidate).exists():
                        analyze_image(candidate)
                        found = True
                        break
                if found:
                    break
            if not found:
                print(f"❌ Could not find image '{target}' in {IMAGES_DIR}")
        return

    # Analyze all test images
    for rel_path in test_images:
        analyze_image(rel_path)


if __name__ == "__main__":
    main()
