# jmacego.github.io

Jekyll static site for jmaclabs.com, hosted on GitHub Pages.

## Local Build & Validation
From the repo root:
- Install dependencies: `bundle install`
- Serve locally: `bundle exec jekyll serve`
- Build once: `bundle exec jekyll build`
- Diagnostics: `bundle exec jekyll doctor`
- Security check: `bundle exec bundler-audit check --update`
- HTML checks: `bundle exec htmlproofer ./_site --disable-external --check-html --allow-hash-href --assume-extension`

## CI Validation
- GitHub Actions runs build, HTML checks, and bundler-audit on push and PRs.

## Instructions
- Agent and Copilot guidance: see AGENTS.md

## Assets
- Images live under `assets/images/` and must be optimized before commit.
- Use `assets/images/resizer.sh` after installing ImageMagick.
