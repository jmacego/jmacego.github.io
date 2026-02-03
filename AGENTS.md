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
  - `image` (optional object with `path`, `alt`, `credit_text`, `credit_link`)
  - `published: false` (optional to hide drafts)
- Excerpts are generated from the content before `<!--more-->`. Add it to control homepage/listing teasers.
- Images for posts/projects live under `public/assets/images/posts/` and `public/assets/images/projects/`.
- Use optimized images (run `public/assets/images/resizer.sh` when needed) and reference them via `/assets/images/...` in `image.path`.

## Local Build & Validation (Astro)
Run these from the repo root:
- Install dependencies: `pnpm install`
- Dev server: `pnpm dev`
- Build once: `pnpm build`
- Preview build: `pnpm preview`

## Local Validation Hooks
Set up git hooks (once per clone): `./scripts/setup-githooks.sh`
- Pre-commit: `pnpm build`
- Pre-push: `pnpm install --frozen-lockfile && pnpm build`

## Images (Required)
- Store images under `public/assets/images/` and organize by topic.
- Optimize images before commit using `public/assets/images/resizer.sh`.
- Ensure ImageMagick or macOS `sips` is available before running the script.
- Always reference the optimized filename in content.
- Provide descriptive alt text for every image and aria labels for controls; avoid generic placeholders.

## Editing Rules
- Do not commit large or unoptimized binaries.
- Prefer Markdown over HTML unless needed for layout control.
- Keep HTML/CSS changes minimal and accessibility-focused.

## Instruction Sources
- Copilot instructions should reference this file.
- Remove any duplicate or legacy instruction files to avoid conflicts.
