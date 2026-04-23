---
name: jmaclabs-design
description: Use this skill to generate well-branded interfaces and assets for JMacLabs / John MacDonald (Fractional CTO, AI advisor, speaker), either for production or throwaway prototypes/mocks/slides. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping — deck-first, dark-surface.
user-invocable: true
---

Read the `README.md` file within this skill, and explore the other available files — `colors_and_type.css` for tokens, `assets/` for logos, `ui_kits/` for component recreations, `slides/` for deck templates, `preview/` for design-system cards.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out of `assets/` and create static HTML files for the user to view. Link to `colors_and_type.css` (or inline its vars). If working on production code, copy assets and read the rules here to become an expert in designing with this brand.

Core rules:
- Dark-first: `#0E0F10` stage, `#15171A/#1C1F24` surfaces.
- One accent dominates per slide/screen: lime (`#9AF23C`) signals action; violet (`#A78BFA`) does structure.
- Fraunces serif display · IBM Plex Sans body · IBM Plex Mono for code.
- No emoji. No hype copy. Sentence case. Eyebrows and kickers are uppercase, letter-spaced.
- Soft radial glows, thin translucent borders, radius 20–28px on cards.

If the user invokes this skill without any other guidance, ask them what they want to build or design (slide, deck, site section, resume, proposal), ask some questions, and act as an expert designer who outputs HTML artifacts *or* production code, depending on the need.
