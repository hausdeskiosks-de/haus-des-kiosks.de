# Current State

## Project goal

Maintain a fast, mobile-first, trilingual public website for Haus des Kiosks that
surfaces hours, location, contact details, and the core offer immediately.

## Current status

- Default branch: `main`; inspected base commit: `f28b6e2`.
- The neighborhood-kiosk redesign is implemented in DE/TR/EN.
- The Pages workflow for `f28b6e2` completed successfully on 2026-08-13.
- `https://hausdeskiosks.de/` returned HTTP 200 on 2026-08-13; DNS resolved to
  GitHub Pages and GitHub reported an approved certificate with enforced HTTPS.
- No open GitHub issues were found during this handoff.

## Working

- Static HTML/CSS/JavaScript site with no build step.
- Automatic browser-language choice, manual `DE -> TR -> EN` cycling, and persisted
  selection through `localStorage`.
- Localized home, legal, privacy, and 404 content.
- GitHub Pages deployment from `main` and the custom domain are operational.

## Active work

No implementation workstream is recorded. Remaining work is launch-quality review
and confirmation of owner-controlled legal/contact details.

## Recently completed

- Reworked the site around the real neighborhood-kiosk character and mobile use.
- Corrected canonical website URLs to `https://hausdeskiosks.de/`.
- Verified the custom domain and HTTPS after the redesign merge.

## Known issues

- The legal notice still asks the owner to confirm whether additional registration,
  tax, or supervisory details are required.
- The contact mailbox uses a different domain from the website; this can be valid
  but has not been reconfirmed with the owner.
- The final design was not recorded as reviewed on physical iOS and Android devices.

## Next recommended tasks

1. Review the deployed site on physical iOS and Android devices.
2. Obtain owner/legal confirmation for the remaining imprint fields.
3. Confirm whether the existing contact mailbox should remain unchanged.

## Relevant files

- `index.html`, `styles.css`, `script.js`
- `impressum.html`, `datenschutz.html`, `404.html`
- `README.md`
- `.github/workflows/pages.yml`, `CNAME`

## Validation

- `node --check script.js`
- Translation-key coverage for every HTML `data-i18n*` key
- `git diff --check`
- Local browser preview: `python3 -m http.server 8000`

## Last handoff

2026-08-13: migrated the detailed generic root handoff into `.agent/`, retained all
remaining launch tasks, and verified that the formerly pending domain migration is
now complete.
