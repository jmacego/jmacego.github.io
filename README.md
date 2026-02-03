# jmaclabs

Astro static site for jmaclabs.com, hosted on GitHub Pages.

## Local Development
From the repo root:
- Install dependencies: `npm install`
- Run dev server: `npm run dev`
- Build once: `npm run build`
- Preview build: `npm run preview`

## Content
- Posts: `src/content/posts/`
- Projects: `src/content/projects/`
- Use the excerpt separator `<!--more-->` in posts and projects.

## Features
- Permalinks: `/blog/:title` and `/projects/:title`
- RSS feed: `/rss.xml`
- Sitemap: `/sitemap-index.xml`
- Google Analytics + cookie consent banner

## Assets
- Static files live in `public/`
- Images live under `public/assets/images/` and must be optimized before commit.

## Agent Instructions
- See `AGENTS.md` for repo-specific rules.
