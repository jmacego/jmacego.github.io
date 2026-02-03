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
- Use descriptive links and provide alt text for images.

## Local Build & Validation (Astro)
Run these from the repo root:
- Install dependencies: `npm install`
- Dev server: `npm run dev`
- Build once: `npm run build`
- Preview build: `npm run preview`

## Images (Required)
- Store images under `public/assets/images/` and organize by topic.
- Optimize images before commit using `public/assets/images/resizer.sh`.
- Ensure ImageMagick is installed before running the script.
- Always reference the optimized filename in content.

## Editing Rules
- Do not commit large or unoptimized binaries.
- Prefer Markdown over HTML unless needed for layout control.
- Keep HTML/CSS changes minimal and accessibility-focused.

## Instruction Sources
- Copilot instructions should reference this file.
- Remove any duplicate or legacy instruction files to avoid conflicts.
