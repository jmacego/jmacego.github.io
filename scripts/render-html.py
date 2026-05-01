#!/usr/bin/env python3
"""
Render an HTML file to PNG via Playwright (Chromium).

Usage:
    render-html.py <input.html> <output.png> [width] [height]

Defaults to 1584×396 (LinkedIn banner). Renders at the exact viewport size
specified, no browser chrome, no scrollbars.
"""

import sys
from pathlib import Path
from playwright.sync_api import sync_playwright


def render(html_path: Path, out_path: Path, width: int = 1584, height: int = 396):
    url = f"file://{html_path.resolve()}"
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        ctx = browser.new_context(
            viewport={"width": width, "height": height},
            device_scale_factor=1,
        )
        page = ctx.new_page()
        page.goto(url)
        page.wait_for_load_state("networkidle")
        page.screenshot(path=str(out_path), clip={
            "x": 0, "y": 0, "width": width, "height": height
        })
        browser.close()


if __name__ == "__main__":
    if len(sys.argv) < 3:
        print(__doc__, file=sys.stderr)
        sys.exit(1)
    html = Path(sys.argv[1])
    out = Path(sys.argv[2])
    w = int(sys.argv[3]) if len(sys.argv) > 3 else 1584
    h = int(sys.argv[4]) if len(sys.argv) > 4 else 396
    render(html, out, w, h)
    print(f"rendered {out} ({w}×{h})")
