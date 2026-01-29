# AGENTS.md

## Purpose
This file is the single source of truth for agent and Copilot instructions in this repo.

## Project Overview
- Static site built with Jekyll and hosted on GitHub Pages.
- Content lives in Markdown files; Jekyll generates the site output.
- Do not edit generated output in `_site/`.

## Key Locations
- Posts: `_posts/` (YYYY-MM-DD-title.md)
- Drafts: `_drafts/`
- Projects collection: `_projects/`
- Layouts: `_layouts/`
- Assets: `assets/` (images, files, diagrams)

## Content Conventions
- Use YAML front matter in all Markdown files.
- Keep headings in Title Case and maintain proper hierarchy.
- Use the excerpt separator `<!--more-->` in posts.
- Avoid emojis in content.
- Use descriptive links and provide alt text for images.

## Local Build & Validation (Jekyll)
Run these from the repo root:
- Install dependencies: `bundle install`
- Serve locally: `bundle exec jekyll serve`
- Build once: `bundle exec jekyll build`
- Diagnostics: `bundle exec jekyll doctor`
- Security check: `bundle exec bundler-audit check --update`

## Validation & Linting
- HTML checks: `bundle exec htmlproofer ./_site --disable-external --allow-hash-href`

## Quick Validation (One Command)
Run all checks before committing:
```bash
bundle exec jekyll build && bundle exec jekyll doctor && bundle exec htmlproofer ./_site --disable-external --allow-hash-href && bundle exec bundler-audit check
```

## Pre-Commit Hook (Optional)
To auto-validate before each commit, create `.git/hooks/pre-commit`:
```bash
#!/bin/bash
set -e
bundle exec jekyll build
bundle exec jekyll doctor
bundle exec bundler-audit check
echo "All checks passed"
```
Make it executable: `chmod +x .git/hooks/pre-commit`

## Images (Required)
- Store images under `assets/images/` and organize by topic.
- Optimize images before commit using `assets/images/resizer.sh`.
- Ensure ImageMagick is installed before running the script.
- Always reference the optimized filename in content.

## Editing Rules
- Do not commit large or unoptimized binaries.
- Prefer Markdown over HTML unless needed for layout control.
- Keep HTML/CSS changes minimal; prefer Bootstrap utilities.

## Instruction Sources
- Copilot instructions should reference this file.
- Remove any duplicate or legacy instruction files to avoid conflicts.

## Available Skills
- agent-workflow-builder_ai_toolkit (AI agents/workflows using Microsoft Agent Framework)
