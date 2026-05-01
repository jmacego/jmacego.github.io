#!/usr/bin/env python3
"""
Render a JMacLabs LinkedIn banner from a background image and text inputs.

Usage:
    render.py --bg <path> --headline <text> [...flags] --out <path>

Required:
    --bg PATH           Path to background image (any aspect; will be cropped 4:1)
    --headline TEXT     Headline text. Use \\n to force a line break.
    --out PATH          Output PNG path

Optional:
    --eyebrow TEXT      Small uppercase line above headline. Omit for no eyebrow.
    --meta TEXT         Small line under headline. Use ' · ' as a separator.
    --logo PATH         Logo PNG. Defaults to repo's white-text logo.
    --logo-height N     Logo display height in px (default 56).
    --headline-size N   Headline font size in px (default 44).
    --text-top N        Vertical offset of text block from top in px (default 90).
    --right-padding N   Right edge padding in px (default 56).
    --bottom-padding N  Bottom edge padding for the logo in px (default 30).
    --bg-y-offset N     Pixels to shift the cropped background up (-) or down (+).
                        Useful when the photo's subject isn't centered. Default 0.
    --overlay 0..1.5    Strength multiplier for the right-side gradient overlay
                        that darkens the text area. Default 1.0. Set lower if
                        the photo is already dark on the right.
"""

from __future__ import annotations

import argparse
import shutil
import sys
import tempfile
from pathlib import Path

from PIL import Image
from playwright.sync_api import sync_playwright

# ---------------------------------------------------------------------------
# Paths
# ---------------------------------------------------------------------------

SKILL_DIR = Path(__file__).resolve().parent
TEMPLATE = SKILL_DIR / "template.html"
REPO_ROOT = SKILL_DIR.parents[2]  # .claude/skills/linkedin-banner -> repo root
DEFAULT_LOGO = REPO_ROOT / "public" / "assets" / "images" / "branding" / "logo-white-text.png"

LINKEDIN_W = 1584
LINKEDIN_H = 396


def crop_to_4_1(src: Path, dst: Path, y_offset: int = 0):
    """Crop the source image to 4:1 aspect ratio centered (with optional vertical offset),
    then resize to LinkedIn's 1584×396 banner dimensions."""
    img = Image.open(src).convert("RGB")
    w, h = img.size
    target_h = round(w / 4)
    if target_h > h:
        # Source is too short; pad. Rare for photo backgrounds.
        new_h = target_h
        padded = Image.new("RGB", (w, new_h), (14, 15, 16))
        padded.paste(img, (0, (new_h - h) // 2))
        img = padded
        h = new_h
    base_y = (h - target_h) // 2
    y0 = max(0, min(h - target_h, base_y + y_offset))
    cropped = img.crop((0, y0, w, y0 + target_h))
    final = cropped.resize((LINKEDIN_W, LINKEDIN_H), Image.LANCZOS)
    final.save(dst)


def render_banner(args):
    out_path = Path(args.out).resolve()
    out_path.parent.mkdir(parents=True, exist_ok=True)

    work = Path(tempfile.mkdtemp(prefix="linkedin-banner-"))
    try:
        # 1. Crop and stage background image into the work folder
        bg_in = Path(args.bg).resolve()
        if not bg_in.exists():
            print(f"error: background not found: {bg_in}", file=sys.stderr)
            sys.exit(1)
        bg_staged = work / "bg.png"
        crop_to_4_1(bg_in, bg_staged, y_offset=args.bg_y_offset)

        # 2. Stage logo
        logo_in = Path(args.logo).resolve() if args.logo else DEFAULT_LOGO
        if not logo_in.exists():
            print(f"error: logo not found: {logo_in}", file=sys.stderr)
            sys.exit(1)
        logo_staged = work / "logo.png"
        shutil.copy(logo_in, logo_staged)

        # 3. Compose HTML by substituting placeholders
        template = TEMPLATE.read_text()

        eyebrow_block = (
            f'<p class="eyebrow">{html_escape(args.eyebrow)}</p>'
            if args.eyebrow else ""
        )
        meta_block = (
            f'<p class="meta">{format_meta(args.meta)}</p>'
            if args.meta else ""
        )
        headline_html = html_escape(args.headline.replace("\\n", "\n"))

        css_vars = (
            f"--logo-height: {args.logo_height}px;"
            f"--headline-size: {args.headline_size}px;"
            f"--text-top: {args.text_top}px;"
            f"--right-padding: {args.right_padding}px;"
            f"--bottom-padding: {args.bottom_padding}px;"
            f"--overlay-strength: {args.overlay};"
            f"--bg-image: url('bg.png');"
        )

        composed = template
        composed = composed.replace("{{EYEBROW_BLOCK}}", eyebrow_block)
        composed = composed.replace("{{HEADLINE}}", headline_html)
        composed = composed.replace("{{META_BLOCK}}", meta_block)
        composed = composed.replace("{{LOGO_SRC}}", "logo.png")
        # Inject CSS vars by appending an inline <style> override into <head>
        composed = composed.replace(
            "</head>",
            f"<style>html, body {{ {css_vars} }}</style></head>",
        )

        html_path = work / "banner.html"
        html_path.write_text(composed)

        # 4. Render via Playwright
        with sync_playwright() as p:
            browser = p.chromium.launch(headless=True)
            ctx = browser.new_context(
                viewport={"width": LINKEDIN_W, "height": LINKEDIN_H},
                device_scale_factor=1,
            )
            page = ctx.new_page()
            page.goto(f"file://{html_path}")
            page.wait_for_load_state("networkidle")
            page.screenshot(
                path=str(out_path),
                clip={"x": 0, "y": 0, "width": LINKEDIN_W, "height": LINKEDIN_H},
            )
            browser.close()

        # 5. Also emit a JPG sibling. LinkedIn sometimes rejects PNGs at upload
        #    time without surfacing a useful error; JPG is the reliable fallback.
        jpg_path = out_path.with_suffix(".jpg")
        Image.open(out_path).convert("RGB").save(
            jpg_path, "JPEG", quality=92, optimize=True, progressive=True
        )

        png_kb = out_path.stat().st_size / 1024
        jpg_kb = jpg_path.stat().st_size / 1024
        print(f"rendered → {out_path} ({LINKEDIN_W}×{LINKEDIN_H}, {png_kb:.0f} KB)")
        print(f"        + {jpg_path} ({jpg_kb:.0f} KB)")
    finally:
        shutil.rmtree(work, ignore_errors=True)


def html_escape(text: str) -> str:
    return (
        text.replace("&", "&amp;")
        .replace("<", "&lt;")
        .replace(">", "&gt;")
        .replace('"', "&quot;")
    )


def format_meta(text: str) -> str:
    """Render ' · ' separators with a styled dot span so spacing is even."""
    parts = [html_escape(p.strip()) for p in text.split(" · ")]
    return '<span class="dot">·</span>'.join(parts)


def main():
    ap = argparse.ArgumentParser(
        description="Render a JMacLabs LinkedIn banner.",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog=__doc__,
    )
    ap.add_argument("--bg", required=True, help="Background image path")
    ap.add_argument("--headline", required=True,
                    help="Headline text. Use \\n for line breaks.")
    ap.add_argument("--out", required=True, help="Output PNG path")

    ap.add_argument("--eyebrow", default="", help="Eyebrow text (optional)")
    ap.add_argument("--meta", default="", help="Meta line under headline (optional)")
    ap.add_argument("--logo", default=None,
                    help=f"Logo PNG path. Default: {DEFAULT_LOGO}")
    ap.add_argument("--logo-height", type=int, default=56,
                    help="Logo display height in px (default 56)")
    ap.add_argument("--headline-size", type=int, default=44,
                    help="Headline font size in px (default 44)")
    ap.add_argument("--text-top", type=int, default=90,
                    help="Top offset of text block in px (default 90)")
    ap.add_argument("--right-padding", type=int, default=56,
                    help="Right edge padding in px (default 56)")
    ap.add_argument("--bottom-padding", type=int, default=30,
                    help="Bottom edge padding for logo in px (default 30)")
    ap.add_argument("--bg-y-offset", type=int, default=0,
                    help="Vertical crop offset in source pixels (default 0)")
    ap.add_argument("--overlay", type=float, default=1.0,
                    help="Right-side gradient strength 0..1.5 (default 1.0)")

    args = ap.parse_args()
    render_banner(args)


if __name__ == "__main__":
    main()
