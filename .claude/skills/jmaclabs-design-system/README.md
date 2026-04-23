# JMacLabs Design System

A design system for **John MacDonald** / **JMacLabs** — a Fractional CTO and technology adviser with an AI patent, leveraging decks for advisory deliverables, keynote speaking, podcasts, and marketing.

The system is **dark-first, presentation-first**. It is built around a new Deck Palette: a quiet, low-glare set of neutrals with two accent families — **lime** (the signal color) and **violet** (the structural accent). One signal color at a time, per slide.

---

## Sources provided

- **`uploads/index.html`** — Full "Slide Palette Lab" page from `https://jmaclabs.com/slide-palette/` (noindex, unlinked, private study from April 2026). This is the single most authoritative source: it defines the neutral / lime / violet token families, their hex values, and deck-minded usage notes. Ported verbatim into `colors_and_type.css`.
- **`uploads/ChatGPT Image Apr 18, 2026, 05_01_52 PM.png`** → `assets/logo-jmac-filled.png`. Wordmark variant with solid grey/violet/lime circuit-trace motif and "John MacDonald" set in a light sans.
- **`uploads/ChatGPT Image Apr 18, 2026, 05_02_00 PM.png`** → `assets/logo-jmac-outline.png`. Wordmark variant with outline/stroke circuit traces and the same wordmark.

No codebase, Figma, or slide deck was attached. The existing jmaclabs.com site chrome was inferred from the Slide Palette Lab page (Bootstrap 4 + Playfair Display + IBM Plex Sans + Fraunces).

## About the brand / subject

John MacDonald is a Fractional CTO and advisor focused on **AI strategy, architecture, and technical leadership**. Additional color: licensed pilot, "recovering entrepreneur", occasional tinkerer. The site nav exposes: Home · Posts · Projects · Resumé · About Me. He holds a patent in AI.

The brand operates across two surfaces:

1. **jmaclabs.com / John MacDonald personal site** — a blog/resume/projects site on Bootstrap, calm, print-adjacent editorial feel (Playfair Display headlines on white). It's where work and writing live.
2. **Decks (the current focus)** — dark-first 16:9 presentations used as advisory deliverables and keynote/podcast visuals. This is where the new palette lives and where this design system is heaviest.

---

## Index — root manifest

| File | Purpose |
| --- | --- |
| `README.md` | This document. Context + content + visuals + iconography. |
| `SKILL.md` | Cross-compatible Agent Skill definition. |
| `colors_and_type.css` | Single source of truth: CSS vars for colors, type, spacing, radii, shadow, motion. |
| `assets/` | Real brand assets: logos, any copied imagery. |
| `fonts/` | (Google-served; no local ttf files required. See CAVEATS.) |
| `preview/` | Design System cards — swatches, type specimens, components. |
| `ui_kits/jmaclabs-site/` | Recreation of the jmaclabs.com site (Bootstrap + Playfair Display, editorial/light). |
| `ui_kits/deck/` | Recreation of the dark deck palette surface (buttons, cards, token pills, etc). |
| `slides/` | Sample 1920×1080 slide templates using the deck palette. |

---

## CONTENT FUNDAMENTALS

**Tone.** Calm, senior, unhyped. The Slide Palette Lab page is a good specimen: it describes itself in plain terms — *"A dark-first swatch board for testing your new neutral, lime, and violet palette in actual presentation contexts."* No superlatives, no "revolutionary", no hype. The voice is the voice of an experienced CTO talking to peers.

**Person.** Third-person in bios ("John MacDonald is a Fractional CTO…"). Second-person ("you / your") used sparingly, only when guiding (e.g. *"your new neutral, lime, and violet palette"*). First-person is reserved for blog posts and essays, never in marketing chrome.

**Casing.** Sentence case for titles and buttons. ALL-CAPS is reserved for eyebrows, kickers, and metadata labels — and it is always letter-spaced (`tracking ≈ 0.18–0.20em`). Never ALL-CAPS for sentences.

**Sentence shape.** Short declaratives, often cadenced in threes. Actual specimen: *"Built to stay quiet on projectors, crisp on laptops, and legible when the room lights drop."* Use this pattern — it feels like the brand.

**Copy vibe.** Deck-minded, context-minded, room-minded. Copy frequently references where content will be *used* (projectors, laptops, stage, rooms) rather than abstract design principles. Ground claims in practical setting.

**Eyebrows / kickers.** Small, loud, functional. Examples from the corpus: `PRIVATE SLIDE STUDY`, `NEW DECK SYSTEM`, `TOKEN FAMILIES`, `PALETTE DIRECTION`. Use them to orient the viewer before the headline does the work.

**Numbers and dates.** Plain. *"April 2026"*, *"14 Tokens"*, *"2 Accent families"*, *"16:9"*. No marketing rounding.

**Emoji.** Not used. Do not add them.

**Unicode glyphs.** Sparingly — an en-dash in prose, a slash in token names (`Lime/400`, `Neutral/850`).

**Don'ts.** No exclamation points. No "We're excited to…". No emoji. No "revolutionary / game-changing / cutting-edge". No AI buzzwords even though the subject matter is AI. Let the expertise be implicit.

---

## VISUAL FOUNDATIONS

### Colors

Two surfaces:

- **Dark (decks, deliverables, the new system).** `#0E0F10` stage → `#15171A` surface → `#1C1F24` card → `#2A2F36` raised → `#3A404A` hairline. Text in `#F2F4F7` primary, `#C7CDD6` secondary, `#98A2B3` muted.
- **Light (blog/resume, legacy site).** White page, `#15171A` text, `#999999` meta. Keep this surface unchanged from the existing Bootstrap chrome.

**Accent philosophy.** Lime is the *signal* color — go, highlight, active, "pay attention here". Violet is the *structural* color — kickers, eyebrows, quiet chrome, decorative glow. The single most important rule in the system: **one accent dominates per slide**. Never mix lime and violet as equal signals on the same slide; pick one to carry meaning, and let the other whisper.

- Lime swatches: `#B7FF6A` (300) · `#9AF23C` (400, brand signal) · `#7ED61A` (500)
- Violet swatches: `#C9B8FF` (300) · `#A78BFA` (400, brand structure) · `#8B5CF6` (500)

### Type

- **Display** — **Space Grotesk** 500/600, tight tracking (`-0.035em`), short lines (`max-width: 14–18ch` on h1/h2), line-height `0.98–1.05`. Used for slide titles, hero H1, H2/H3.
- **Sans body** — **Plus Jakarta Sans** 400/500/600/700. Used for lede, body, labels, buttons. Supports italics via the paired variable italic file.
- **Mono / code tokens** — **Commit Mono (Nerd Font)** 400/700 + italics. Used for code, keyboard, hex values, metadata labels, and any ALL-CAPS meta line. Nerd Font glyphs available if needed.
- **Legacy site headings** were previously Playfair Display; now unified to **Space Grotesk** across both the dark deck system *and* the light jmaclabs.com chrome.

Eyebrows and kickers are in sans, 600–700, uppercase, letter-spaced, often colored lime or violet.

### Backgrounds

- **Dark canvases are never pure black.** Stage is `#0E0F10`, not `#000`. Saves eyes in dark rooms.
- **Subtle radial glows** are the signature background treatment. Combine two: one lime glow top-left at ~10% opacity, one violet glow bottom-right at ~16% opacity, over a 145° linear gradient from `#1C1F24` → `#0E0F10`. Always subtle — the glow should register peripherally, not dominate.
- **No photography as backdrop** in the deck system. If imagery is needed, inset it inside a framed card.
- **No hand-drawn illustrations, no textures, no grain, no repeating patterns.** The brand reads as technical/editorial, not organic.
- **No heavy gradients as hero fills.** Gradients are for atmosphere (radial glows, hairline fades), never for buttons or cards.

### Layout

- **Rounded, generous radii.** `28px` for hero/section shells, `24px` for cards, `20px` for inner frames, `16px` for swatches, `999px` for pills.
- **Thin, translucent borders.** `1px solid rgba(242,244,247,0.08)` on cards; `rgba(242,244,247,0.12)` on inputs/pills.
- **Deep but soft shadow.** `0 30px 60px -42px rgba(0,0,0,0.55)` plus optional color glow (`0 40px 90px -60px rgba(139,92,246,0.22)` or the lime equivalent). Cards float, never pop.
- **Inset highlight.** `inset 0 1px rgba(255,255,255,0.04)` adds a one-pixel top glint — it's what makes cards feel lit from above.
- **Grid.** 12-col for the blog/resume surface; on decks prefer 2-col hero, 2-col family grids, 3-col recipe grids, collapsing to 1-col under ~1050px.

### Cards

- Background: layered — `linear-gradient(180deg, #1C1F24C7, #0E0F10DB)` or similar — over a faint radial glow.
- Border: `1px solid rgba(242,244,247,0.08)`.
- Radius: `24px`.
- Shadow: `0 18px 42px -34px rgba(0,0,0,0.8)` with inset hairline.
- Backdrop-filter `blur(16px)` for the raised-on-dark glass effect.

### Motion

- Easing: `cubic-bezier(0.22, 1, 0.36, 1)` for entrances; `cubic-bezier(0.65, 0, 0.35, 1)` for state changes.
- Duration: `150ms` fast (hover), `240ms` medium (state), `420ms` slow (entrance).
- **Style: fades and gentle lifts.** No bounces, no spring overshoots, no slide-in-from-edge on decks. A card may lift 2px on hover; a button may brighten its border.
- Respect `prefers-reduced-motion: reduce`.

### Hover / press states

- **Hover on dark surfaces:** border brightens to `rgba(242,244,247,0.16)`, background gains +4% white overlay, optional accent ring glow. No background-color swap.
- **Hover on accent buttons:** shift lime 400 → 300 (brighter), not darker. The signal gets louder, not dimmer.
- **Press:** translate `1px`, reduce shadow by one step. No shrink / scale.
- **Focus:** 2px ring in accent-ring color, offset 2px.

### Transparency & blur

- Backdrop-filter `blur(16px)` on raised cards over busy backdrops (hero, recipe frames).
- Token pills use translucent fills: `rgba(154,242,60,0.14)` lime, `rgba(167,139,250,0.14)` violet, `rgba(58,64,74,0.55)` neutral.
- Never blur text directly; only the surfaces behind.

### Imagery vibe

When imagery is used in decks or on the site:

- **Cool, slightly desaturated.** No warm/nostalgic filters. No heavy grain.
- **Technical / architectural / minimal** framing. Empty rooms, projection screens, whiteboards, laptops in dim rooms. Never stock-photo "team high-fiving".
- **Dark backgrounds preferred** so imagery integrates with the deck palette.
- If a portrait is needed, use the `jmac-profile.jpg` referenced in the site's Open Graph tags (not included in this system; flagged below).

---

## ICONOGRAPHY

The source site did not ship a bespoke icon set. The Bootstrap 4 page uses no icons to speak of; the Slide Palette Lab uses none at all.

**Approach for this system:**

- **Default icon library: Lucide.** Stroke-based, `1.5–2px` stroke, geometric, quiet — aligns with the "low-glare, technical, editorial" vibe. Load from CDN:
  ```html
  <script src="https://unpkg.com/lucide@latest"></script>
  ```
  or as SVG per-icon. Common set: `arrow-right`, `check`, `chevron-right`, `circle`, `dot`, `external-link`, `file-text`, `plane`, `cpu`, `sparkles` (sparingly), `layers`, `slash`.
- **Icon color.** Default `var(--text-muted-on-dark)`. Active/hover `var(--lime-300)`. Decorative-structural `var(--violet-300)`.
- **Icon size.** `16px` in text, `20px` in buttons, `24px` in cards, `32px+` for hero marks.
- **SVGs, not PNGs.** Always SVG. Set `stroke="currentColor"` so icon color follows text color.
- **Emoji: never.** Not on the site, not in decks, not in resumes.
- **Unicode glyphs as icons:** only the en-dash (`–`), the slash (`/` in token names), and arrows (`→`) for navigation prose. Not mandatory.

**Substitution flag.** Lucide is a reasonable default given no source iconography was provided. If John has a preferred set (Heroicons, Phosphor, a custom circuit-themed set that would echo the logo's trace motif), swap `ui_kits/*/icons.md` accordingly.

**Logo system.** Three variants shipped in `assets/`:

- `logo-jmac-filled.png` — light grey traces + color accents + white wordmark. **Use on dark surfaces** (decks, the deck UI kit, keynote marketing).
- `logo-jmac-on-light.png` — same circuit marks in color + **black "John MacDonald" wordmark**. **Use on white / light surfaces** (jmaclabs.com, resume, blog, print, proposals). This is the canonical light-surface version.
- `logo-jmac-outline.png` — stroke-only variant. Utility / alternate; use only when the primary two don't fit (e.g. over a photograph, embossing, single-color applications).

The logo is a left-flowing grey circuit trace + right-flowing lime trace + bottom violet trace terminating in dots, with "John MacDonald" set to the right in a light geometric sans. For deck use, keep the logo at one of the bottom corners, small (`~200px` wide on 1920×1080). Clear space = logo height on all sides.

---

## CAVEATS / things to confirm

- **Fonts.** Brand font files are loaded locally from `fonts/`: **Plus Jakarta Sans** (variable, upright + italic) for body, **Space Grotesk** (variable) for display, **Commit Mono Nerd Font** (regular/italic/bold/bold-italic) for code. No network / Google Fonts dependency.
- **Profile image** (`jmac-profile.jpg`) referenced in the site's OG tags is not included — add it to `assets/` when available.
- **jmaclabs.com codebase / Figma** were not attached. The `ui_kits/jmaclabs-site/` recreation is inferred from the chrome visible in the one uploaded HTML file (Bootstrap 4, Playfair Display headings, simple nav). If a real codebase or Figma exists, link it and the kit will be re-derived.
- **Iconography** is a proposed default (Lucide) — no source set was provided.
- **Slide deck samples** are not tied to a specific existing deck; they are exercises in the palette.
