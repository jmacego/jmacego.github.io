---
name: linkedin-banner
description: Build a JMacLabs-branded LinkedIn cover banner (1584×396) over a photographic or generated background image. Walks the user from concept to finished PNG: gathers headline + campaign copy, suggests an Images 2.0 prompt to generate the background, then renders the final banner with the canonical logo bottom-right and text top-right to middle.
user-invocable: true
---

# LinkedIn banner skill

Use this skill when the user asks for a new LinkedIn banner, asks to refresh
the current one, or wants to build a per-series / per-campaign banner.

## Hard layout rules (do not violate)

- **Dimensions:** 1584 × 396 (LinkedIn standard, 4:1).
- **Profile photo zone:** bottom-left ~280 × 280 region is covered by the
  user's profile photo. Never put text or the logo there.
- **Logo:** anchored bottom-right, 30–40 px margin from the edges. Use the
  canonical white-text logo (or black-text for any future light banner).
- **Text:** anchored to the right side, vertically positioned anywhere from
  upper-third to middle. Right-aligned. Stays clear of the bottom-right
  logo zone.
- **Mobile crop:** on mobile, LinkedIn shows roughly the center 1128 × 191.
  The headline and eyebrow must read in that window. Logo will be cut on
  mobile and that's expected.

## Brand tokens (already wired into `render.py`)

- Surface: dark image background (the photo provides the depth)
- Text: `#F2F4F7` primary, `#C7CDD6` meta
- Eyebrow: `#B7FF6A` (lime), uppercase, 0.22em letter-spacing
- Headline font: `Space Grotesk`, weight 600, tight tracking
- Body / meta font: `Plus Jakarta Sans`
- Right-side gradient overlay applied for text contrast

## Workflow

When invoked, drive the conversation in this order. Don't skip steps. Ask
one question at a time unless the user obviously wants a faster lane.

### 1. Goal / campaign

Ask: **"What's this banner for?"** Common answers:

- **Evergreen positioning** — "Fractional CTO / AI advisor."
- **Active essay series** — e.g. AI vs. DotCom (5 essays).
- **A specific upcoming talk or event.**
- **A travel / location post** — e.g. "Currently in Chiang Mai."

The answer drives copy and prompt choice.

### 2. Copy

Gather three short strings:

- `eyebrow` — small uppercase line above the headline. Examples:
  *"Now publishing"*, *"Currently shipping"*, *"Series · April–May 2026"*.
  Keep under 40 chars. Optional; can be empty.
- `headline` — the main line. 2–6 words ideal, max ~50 chars per line, max
  2 lines. Examples: *"AI Bubble Lessons / from the DotCom Era"*. Use a
  literal `\n` in the string to force a line break, or pass it pre-broken.
- `meta` — small line under the headline. Examples:
  *"A five-part essay series · jmaclabs.com"*. Optional.

Keep the **simple, clean, don't overload it** principle from the user's
established preference. Resist adding pills, badges, "now booking" CTAs,
or anything sales-y. The goal of the banner is follower growth, not
conversion.

### 3. Background image

Three categorical prompts live in `prompts/`. Read the relevant file and
present the prompt to the user, formatted to be pasted directly into
**OpenAI Images 2.0** (or another image model). Suggest one as a primary
recommendation rather than offering all four:

- `infrastructure.md` — server room / fiber optic / data center. Default.
  Use this when in doubt.
- `era-bridge.md` — vintage and modern hardware side-by-side. Use for the
  AI vs. DotCom series specifically.
- `topographic.md` — abstract glowing-line composition. Use when the user
  wants something less photographic and more graphic.
- `speaker-presence.md` — for when a real photo of the user on stage is
  available; documents how to crop, not how to generate.

Tell the user to drop the resulting image into `image_drop/<name>.png`
(the symlinked drop folder at `~/git/personal/image_drop/`). Wait for
confirmation.

### 4. Render

Run `render.py` with the gathered inputs. The script crops the source
image to 4:1, applies the gradient overlay and text stack, drops the logo
bottom-right, and writes the final PNG.

```bash
python3 .claude/skills/linkedin-banner/render.py \
  --bg image_drop/banner1.png \
  --eyebrow "Now publishing" \
  --headline "AI Bubble Lessons\nfrom the DotCom Era" \
  --meta "A five-part essay series · jmaclabs.com" \
  --out output/linkedin-banner/banner.png
```

### 5. Show the result and offer iterations

Read the PNG back, show it to the user, and ask if anything needs to
move. Common revisions:

- Logo too small / too large (`--logo-height` arg)
- Text too tight to right edge (`--right-padding` arg)
- Headline wrapping awkwardly (suggest a manual line break in the input)
- Background image needs re-cropping vertically (`--bg-y-offset` arg)

Re-render in place each time. The output path overwrites by design.

## What this skill does NOT do

- It does not generate the background image itself. It hands the user a
  prompt and waits for them to drop a real PNG. Image generation goes
  through the user's Images 2.0 workflow, not the skill.
- It does not auto-post to LinkedIn. The deliverable is a PNG file.
- It does not accept vector logos. Use the canonical PNG at
  `public/assets/images/branding/logo-white-text.png` (or override with
  `--logo`).

## Files

- `render.py` — the renderer (Playwright + Pillow)
- `template.html` — banner template with CSS, used by `render.py`
- `prompts/*.md` — Images 2.0 prompt library, one per category
- `README.md` — same content as this file in plain Markdown for non-skill
  consumers
