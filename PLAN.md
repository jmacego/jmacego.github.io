# Session Plan - January 29, 2026

## Completed Infrastructure Tasks
1. ~~Create AGENTS.md as single source of truth for agent instructions.~~
2. ~~Add .github/copilot-instructions.md pointing to AGENTS.md.~~
3. ~~Update README.md with build/validation commands.~~
4. ~~Fix assets/images/resizer.sh (destructive bug and validation).~~
5. ~~Add HTML validation tooling (html-proofer in Gemfile).~~
6. ~~Add CI workflow (.github/workflows/validate.yml).~~
7. ~~Remove legacy copilot.md file.~~
8. ~~Add validation commands and pre-commit hook instructions to AGENTS.md.~~
9. ~~Fix uri gem CVE-2025-61594 vulnerability.~~
10. ~~Fix missing alt attributes (post layout, homepage, project).~~
11. ~~Fix anchor tag validation error in default layout.~~
12. ~~Delete obsolete assets/images/html_code.html (source of false favicon errors).~~
13. ~~Fix cookie notice buttons missing href in default layout.~~
14. ~~Fix broken category/tag links (removed link rendering, categories now text-only).~~
15. ~~Fix HTTP links (keybase.pub, menari.eu, fpop.co -> HTTPS).~~
16. ~~Fix broken safaribooksonline.com link (updated to oreilly.com).~~
17. ~~Fix broken internal links to anycast article.~~

## Completed Content Updates
1. ~~Update resume.md with entrepreneurial focus.~~
2. ~~Update about.md with entrepreneurial positioning.~~
3. ~~Update _config.yml site description and add url.~~
4. ~~Fix Keybase project alt text (was "Bootstrap4 Logo").~~

## Current Validation Status
- Jekyll build: PASS
- Jekyll doctor: PASS
- Bundler audit: PASS
- HTML proofer: 2 failures (missing images - deferred)

## Deferred - Missing Image Files
These images are referenced in posts but don't exist. Need to find originals or remove references:
- `assets/images/posts/censorship-limitations-freedom-of-expression-restricted-39584.jpeg` (in gpg-symmetric-encryption post)
- `assets/images/posts/git-name-interfaces-gist.png` (in useful-networking-scripts post)

## Validation Commands (Quick Reference)
```bash
# Full validation (run before committing)
bundle exec jekyll build && bundle exec jekyll doctor && bundle exec htmlproofer ./_site --disable-external --allow-hash-href && bundle exec bundler-audit check

# Individual commands
bundle install                    # Install dependencies
bundle exec jekyll serve          # Local dev server
bundle exec jekyll build          # Build once
bundle exec jekyll doctor         # Diagnostics
bundle exec bundler-audit check   # Security audit
```

## Key Facts
- Disney last day: 1/30/2026
- New role: Fractional CTO at Equivalent Smart Graphics (https://equivalentsvg.io)
- Positioning: Semi-retired, running 4-5 companies, selective consulting
- Focus areas: Leadership, AI/ML, Network Architecture
- Companies to highlight: Sheep's Clothing, Avitus Aviation, Hyak Photography, 5GuysTech, PowerSurge/FastServers

## Do Not Commit
- MacDonald_John_Resume_2025.10.02.docx
- Updated LinkedIn Content_10.02.2025.docx
