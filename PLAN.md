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

## Completed Content Updates
1. ~~Update resume.md with entrepreneurial focus.~~
2. ~~Update about.md with entrepreneurial positioning.~~
3. ~~Update _config.yml site description and add url.~~
4. ~~Fix Keybase project alt text (was "Bootstrap4 Logo").~~

## Pending
- Commit content changes (resume.md, about.md, _config.yml)
- Verify Jekyll build works locally
- Consider adding dedicated Services page (optional)

## Content Issues to Address Later
Missing image files referenced in posts:
- `assets/images/posts/censorship-limitations-freedom-of-expression-restricted-39584.jpeg` (referenced in gpg-symmetric-encryption post)
- `assets/images/posts/git-name-interfaces-gist.png` (referenced in useful-networking-scripts post)

Missing favicon/manifest files (referenced in default layout at /assets/images/):
- `apple-touch-icon.png`
- `favicon-16x16.png`
- `favicon-32x32.png`
- `safari-pinned-tab.svg`
- `site.webmanifest`

Broken internal links (tag/category pages that don't exist):
- `/blog/Anycast/`, `/blog/DNS/`, `/blog/arp/`, `/blog/Learning%20Series/`, etc.

HTTP links that could be HTTPS:
- `http://keybase.pub`
- `http://menari.eu`
- `http://fpop.co/lxp5`

Broken external link:
- `safaribooksonline.com` (site defunct, in ccde-written-first-try post)

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
