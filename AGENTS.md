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
- Anything being released or intended for a public URL must use the real dated post filename format. **Never** leave `DRAFT-` in the filename for a released/published post.
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
- All new image assets should follow the **CMS-managed asset workflow**. Do not manually run local image tooling unless the user explicitly asks for a one-off repair task.
- Before CMS upload, the only manual file operation allowed is renaming the source file to the intended canonical stem.
- After CMS upload, reference the CMS-generated asset path via `/assets/images/...` in `image.src`.

## Talks (Unlisted Section)
- Lives at `/talks/`. Intentionally **unlisted**: not linked from the site nav, every page sets `robots="noindex, nofollow"`, the path is excluded from `sitemap-index.xml` via `privatePathPrefixes` in `astro.config.mjs`, and `public/robots.txt` disallows it.
- Content lives in `src/content/talks/` as `YYYY-MM-DD-title.md`. Schema is defined in `src/content/config.ts` (collection `talks`).
- Frontmatter shape: `title`, `date`, `description`, optional `venue`, `relatedPosts` (array of post slugs), `seriesLabel`, `deck` ({ embedUrl, shareUrl, downloadUrl, filename }), `video` ({ youtubeId | vimeoId | url, durationMinutes }), `image`, `published`.
- Decks are hosted in OneDrive (account: M365). One folder per talk under `OneDrive/JMacLabs/Talks/<slug>/`. Three URLs to capture from OneDrive web UI:
  - **Embed iframe `src`** (⋯ menu → Embed) → `deck.embedUrl` for inline rendering.
  - **Anyone-with-link share URL** (Share → Anyone with the link) → `deck.shareUrl` for "Open in OneDrive" button.
  - **Force-download URL** (share URL with `?download=1` or `&download=1`) → `deck.downloadUrl`.
- "Anyone with link" share URLs are unauthenticated; treat any deck content as effectively public once an embed URL exists.
- `relatedPosts` is an array of post slugs (filename without date prefix). 0 entries = standalone, 1 = "Based on:" with link, 2+ = series list using `seriesLabel` as heading.
- Drafts (`published: false`) render in `pnpm dev` but are excluded from production builds via `isPublishedOrDraftInDev`.

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
- This repo’s standard is the **CMS asset workflow**, not ad hoc local processing.
- For CMS-managed images:
  - The CMS owns renditions and metadata under `public/assets/images/`, `public/assets/images/originals/`, `public/assets/images/thumbnails/`, and `public/assets/images/image-assets.json`.
  - Do not manually move uploaded assets between those locations.
  - Do not manually edit `image-assets.json`.
  - Do not manually run `public/assets/images/resizer.sh`.
  - Do not convert, resize, deduplicate, or otherwise alter source files before upload.
  - The only manual preprocessing step allowed by default is renaming the original file before upload.
  - **Dimension suffixes belong in CMS-generated renditions only.** Original filenames must use the canonical stem with no dimension suffix (e.g. `my-image.png`, not `my-image-1536x1024.png`). The CMS appends dimensions when generating web and thumbnail renditions. Post and front matter `src` references should use the CMS-generated path including dimensions (e.g. `/assets/images/my-image-1536x1024.png`); always reference the web rendition, never the originals path.
- Always reference the CMS-generated web asset in content, never the file under `originals/`.
- If an image task does not clearly fit the CMS flow, stop and verify before touching files.
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
