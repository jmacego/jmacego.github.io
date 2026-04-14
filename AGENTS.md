# AGENTS.md

## Purpose
Single source of truth for agent and Copilot instructions in this repo.

## Project Overview
- Static site built with Astro and hosted on GitHub Pages.
- Content lives in `src/content/` and is rendered with Astro layouts.
- Do not edit generated output in `dist/`.

## Key Locations
- Posts: `src/content/posts/`
- Projects: `src/content/projects/`
- Layouts: `src/layouts/`
- Pages: `src/pages/`
- Assets & static files: `public/`

## Content Conventions
- Use YAML front matter in all Markdown files.
- Keep headings in Title Case and maintain proper hierarchy.
- Use the excerpt separator `<!--more-->` in posts and projects.
- Avoid emojis in content.
- Accessibility is a first-tier requirement. Use descriptive links and provide meaningful alt text for images (no generic labels like "image" or "photo").
- When in doubt about what an image contains, use AI tooling to identify the subject and write accurate, useful alt/aria descriptions.

## Content Authoring (Posts & Projects)
- Posts live in `src/content/posts/` and must be named `YYYY-MM-DD-title.md` (or `.markdown`) using kebab-case.
- Projects live in `src/content/projects/` and should be named `kebab-case.md` (no date prefix).
- Permalinks are derived from filenames: posts publish to `/blog/<title>/` where `<title>` is the filename without the date prefix; projects publish to `/projects/<filename>/`.
- Keep filenames stable to preserve legacy permalinks. If a slug must change, add a redirect.
- Front matter fields (see `src/content/config.ts`):
  - `title` (required)
  - `date` (recommended; if omitted on posts, the date is inferred from the filename prefix)
  - `description` or `summary` (recommended for SEO/social; excerpt is used if both are missing)
  - `categories` and `tags` (optional arrays)
  - `image` (optional object with `src`, `alt`, `credit`, `creditUrl`)
  - `published: false` (optional to hide drafts)
- Excerpts are generated from the content before `<!--more-->`. Add it to control homepage/listing teasers.
- Images for posts/projects live under `public/assets/images/posts/` and `public/assets/images/projects/`.
- Use optimized images (run `public/assets/images/resizer.sh` when needed) and reference them via `/assets/images/...` in `image.src`.

## Local Build & Validation (Astro)
Run these from the repo root:
- Install dependencies: `pnpm install`
- Dev server: `pnpm dev`
- Build once: `pnpm build`
- Preview build: `pnpm preview`
- Validation: `./scripts/validate.sh`

## Local Validation Hooks
Set up git hooks (once per clone): `./scripts/setup-githooks.sh`
- Pre-commit: `./scripts/validate.sh --quick`
- Pre-push: `./scripts/validate.sh`

## Images (Required)
- Store images under `public/assets/images/` and organize by topic (e.g., `posts/`, `projects/`).
- Optimize images before commit using `public/assets/images/resizer.sh`.
  - Run it from the target subdirectory, not the repo root: `cd public/assets/images/posts && ../resizer.sh`
  - Requires ImageMagick (`identify`/`convert`) or macOS `sips`.
  - The script moves the original file into an `originals/` subfolder using its original filename (e.g., `photo.png` → `originals/photo.png`), then creates a resized web copy in the working folder as WebP with dimensions in the filename (e.g., `photo-1536x1024.webp`).
  - Files in `originals/` are preserved source assets and should not be referenced directly in posts.
- Always reference the **dimensioned web copy** in content (e.g., `photo-1536x1024.webp`), not the original.
- Provide descriptive alt text for every image and aria labels for controls; avoid generic placeholders.

### Hero Images (Front Matter)
Hero images are set via the `image` object in YAML front matter. They render after the `<h1>` and before post content, styled with `object-fit: cover`, max-height 400 px, full width. They also populate `og:image` and `twitter:image` meta tags for social sharing.

Format:
```yaml
image:
  src: /assets/images/posts/my-image.png
  alt: |
    Descriptive alt text for accessibility and social cards.
    May span multiple lines using YAML literal block syntax.
  credit: Photographer Name   # optional attribution
  creditUrl: "https://example.com/photographer"  # optional link
```
- `src` (required): absolute site path starting with `/assets/images/...`.
- `alt` (optional but strongly recommended): falls back to the post title if omitted.
- `credit` / `creditUrl` (optional): attribution for third-party images.

### Inline Images (Body Content)
Three patterns are used inside Markdown body content, in order of preference:

1. **Standard Markdown** — simple cases:
   ```markdown
   ![Alt text](/assets/images/posts/example.png "Optional title")
   ```

2. **HTML `<img>`** — when width or layout control is needed:
   ```html
   <img src="/assets/images/posts/example.png"
        alt="Descriptive alt text"
        title="Optional title"
        width="75%"
        style="width:75%;height:auto;display:block">
   ```

3. **`<figure>` with float classes** — for editorially placed inline images with captions:
   ```html
   <figure class="inline-photo inline-photo-right">
     <img src="/assets/images/posts/example.jpeg"
          alt="Descriptive alt text." />
     <figcaption>Caption text goes here.</figcaption>
   </figure>
   ```
   Available classes:
   - `inline-photo-right` — floats right, ~44 % width, left margin.
   - `inline-photo-left` — floats left, ~44 % width, right margin.
   - On screens ≤ 767 px both collapse to full width (no float).

## Editing Rules
- Do not commit large or unoptimized binaries.
- Prefer Markdown over HTML unless needed for layout control.
- Keep HTML/CSS changes minimal and accessibility-focused.

## Editorial Style Guide
- Evaluate post and project writing against `STYLE_GUIDE.md` in the repo root.
- Use it as the primary reference for diction, tone, narrative stance, and prose craft when drafting, revising, or reviewing content for this site.
- Do not default to the generic "started technical, moved into management, then became strategic" narrative. John has always operated in leadership, including at smaller companies and in founder/owner contexts, while often remaining relatively hands-on.
- Frame John as a people-first leader. The point is not that leaders should behave like full-time engineers; it is that leaders should understand the work well enough to speak credibly with engineers, ask better questions, and make sound decisions.
- When describing John's technical edge, make clear that he maintains it primarily outside of work through personal projects, infrastructure, experimentation, and continued learning. Avoid implying that he is doing day-to-day IC work inside leadership roles unless a specific role actually required it.
- John is more technical than many leaders by choice and habit, and that distinction matters. Do not flatten him into either a generic executive or a "technical founder turned manager" stereotype.

## Instruction Sources
- Copilot instructions should reference this file.
- Remove any duplicate or legacy instruction files to avoid conflicts.
