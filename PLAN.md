# Plan (Today)

## Goals
- Establish a single source of truth for agent/Copilot instructions.
- Ensure local build and validation steps are documented.
- Remove outdated instruction files.

## Tasks
1. ~~Create AGENTS.md with project overview, conventions, and local build steps.~~
2. ~~Create .github/copilot-instructions.md referencing AGENTS.md.~~
3. ~~Remove legacy instruction files that duplicate guidance.~~
4. ~~Validate the repo has a clear, consistent instruction path.~~
5. ~~Update README with local build and validation steps.~~
6. ~~Update assets/images/README.md with safe resizer usage.~~
7. ~~Fix destructive image resizer script behavior.~~

## Status
- AGENTS.md created.
- Copilot instructions created.
- Legacy instructions removed.
- README updated with build/validation guidance.
- Image resizer instructions corrected.
- Image resizer script hardened and bug fixed.

## Notes
- resizer.sh previously called an undefined variable and allowed running from assets/images. Now it validates ImageMagick, prevents running from the root assets/images folder, and uses the correct resmushit-cli path.

## Addendum (Validation)
1. ~~Add HTML validation tooling (html-proofer).~~
2. ~~Add CI workflow for build, HTML checks, and bundler-audit.~~
3. ~~Document validation commands in README and AGENTS.~~
