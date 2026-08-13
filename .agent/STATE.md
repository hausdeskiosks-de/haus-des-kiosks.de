# Current State

## Project goal

Maintain a fast, mobile-first, trilingual public website for Haus des Kiosks that
surfaces hours, location, contact details, and the core offer immediately.

## Current status

- Default branch: `main`; quality branch: `agent/kiosk-quality-and-regression`;
  inspected base commit: `5b41e6e`.
- The neighborhood-kiosk redesign is implemented in DE/TR/EN.
- A dependency-free static/unit regression tier now covers the existing published
  facts, translations and opening-hours behavior.
- The Pages workflow for `5b41e6e` completed successfully on 2026-08-13.
- `https://hausdeskiosks.de/` returned HTTP 200 on 2026-08-13; DNS resolved to
  GitHub Pages and GitHub reported an approved certificate with enforced HTTPS.
- No open GitHub issues or pull requests were found during this handoff.
- The quality branch is intentionally local and unpushed at this handoff; the user
  requested a commit followed by a pause.

## Working

- Static HTML/CSS/JavaScript site with no build step.
- Automatic browser-language choice, manual `DE -> TR -> EN` cycling, and persisted
  selection through `localStorage`.
- Shared, testable language and `Europe/Berlin` opening-hours rules in
  `site-config.js`; the actual daily 08:00–22:00 schedule is unchanged.
- `npm test` runs syntax, static-contract and Node unit tests without installing
  dependencies; `.github/workflows/quality.yml` mirrors this in CI.
- Canonical/OpenGraph metadata is present on all four HTML pages; `robots.txt` and
  `sitemap.xml` use the canonical `hausdeskiosks.de` domain.
- Localized home, legal, privacy, and 404 content.
- GitHub Pages deployment from `main` and the custom domain are operational.

## Active work

The first quality milestone is committed locally. Browser automation, accessibility
remediation, privacy/media work, production diagnostics and release documentation
remain explicitly open in `.agent/TODO.md`.

## Recently completed

- Added the linked footer credit `website made by itmitalles.de`.
- Reworked the site around the real neighborhood-kiosk character and mobile use.
- Corrected canonical website URLs to `https://hausdeskiosks.de/`.
- Verified the custom domain and HTTPS after the redesign merge.

## Known issues

- The OpenStreetMap iframe still makes an external request when it enters the
  browser's lazy-load range; click-to-load has not been implemented.
- The looping hero video has no pause control and is not stopped by reduced-motion
  preferences. The mobile menu's DOM order also makes keyboard entry into the open
  navigation awkward.
- Automated Playwright, axe, visual, Lighthouse and slow-network checks do not exist
  yet. The Pages deployment is not yet blocked on quality checks.
- Several foreground/background and focus-color combinations need measured contrast
  remediation.
- The legal notice still asks the owner to confirm whether additional registration,
  tax, or supervisory details are required.
- The contact mailbox uses a different domain from the website; this can be valid
  but has not been reconfirmed with the owner.
- The final design was not recorded as reviewed on physical iOS and Android devices.

## Next recommended tasks

1. Add Playwright, axe and deterministic visual coverage at the requested viewports.
2. Fix the audited accessibility and click-to-load map issues, then update the real
   privacy description.
3. Add media/performance budgets and production deployment diagnostics.
4. Create the verification/release/nice-to-have documents.
5. Push this branch and open a draft pull request after the next implementation pass.

## Relevant files

- `index.html`, `styles.css`, `script.js`
- `site-config.js`, `scripts/static-check.mjs`, `tests/unit/site-config.test.mjs`
- `package.json`, `.github/workflows/quality.yml`
- `impressum.html`, `datenschutz.html`, `404.html`
- `README.md`
- `.github/workflows/pages.yml`, `CNAME`

## Validation

- `npm test`
- `env TZ=Pacific/Honolulu npm run test:unit`
- `git diff --check`
- Headless Chrome smoke test against `python3 -m http.server 8000`; module imports
  loaded and browser-locale translation rendered successfully.
- Local browser preview: `python3 -m http.server 8000`

## Last handoff

2026-08-13: created the first dependency-free quality baseline and paused after a
local commit as requested. No push or pull request was created; all unimplemented
parts of the broader quality brief are itemized in `.agent/TODO.md`.
