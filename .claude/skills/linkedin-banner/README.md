# linkedin-banner skill

Build a JMacLabs-branded LinkedIn banner (1584×396) over a photographic or
generated background image.

The skill itself is described in `SKILL.md` (which Claude reads when invoked).
This README is for humans browsing the repo.

## Layout

```
┌──────────────────────────────────────────────────────────────────────┐
│                                              EYEBROW (lime, caps)    │
│        [bg image: photo or                                           │
│         generated abstract]                  HEADLINE LINE 1         │
│                                              HEADLINE LINE 2         │
│                                              meta · jmaclabs.com     │
│   [profile photo zone]                                               │
│   (LinkedIn covers this                                              │
│    on the live profile)                            [JMacLabs logo]   │
└──────────────────────────────────────────────────────────────────────┘
```

- Logo bottom-right (canonical white-text wordmark by default)
- Text top-right to middle, right-aligned
- Right-side gradient overlay for text contrast
- Profile photo zone (bottom-left) deliberately empty

## Files

| File | What it is |
|---|---|
| `SKILL.md` | Skill entry — what Claude reads when invoked |
| `template.html` | Banner HTML with CSS-variable knobs |
| `render.py` | Playwright renderer, takes CLI args, writes PNG |
| `prompts/infrastructure.md` | Default Images 2.0 prompt (server room / fiber) |
| `prompts/era-bridge.md` | Vintage + modern hardware (AI vs. DotCom flavour) |
| `prompts/topographic.md` | Abstract glowing lines |
| `prompts/speaker-presence.md` | How to crop a real speaker photo |

## Quick CLI use

```bash
python3 .claude/skills/linkedin-banner/render.py \
  --bg ../image_drop/banner1.png \
  --eyebrow "Now publishing" \
  --headline "AI Bubble Lessons\nfrom the DotCom Era" \
  --meta "A five-part essay series · jmaclabs.com" \
  --out output/linkedin-banner/banner.png
```

Run `render.py --help` for the full flag list (logo height, font size,
overlay strength, vertical crop offset, etc.).

## Background image flow

1. Pick a category from `prompts/`.
2. Paste the prompt into OpenAI Images 2.0 (or other generator).
3. Save the resulting PNG to `~/git/personal/image_drop/<name>.png`.
4. Run `render.py --bg <that-path>` with your copy.

The renderer crops any aspect ratio to 4:1 (centered, with optional
vertical offset) and resizes to 1584×396.

## Dependencies

- Python 3.9+
- `pip install Pillow playwright`
- `playwright install chromium`
