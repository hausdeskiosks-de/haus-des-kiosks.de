# Next Agent Handoff

## Goal

Maintain the completed Haus des Kiosks redesign as a mobile-first, trilingual neighbourhood-kiosk site built around the line “Hallo. Servus. Merhaba. Klein der Laden. Draußen groß.”

## Completed

- Rebuilt the home page around the actual shop character: tiny interior, fast practical purchases and spontaneous pavement conversations rather than café or lounge language.
- Put opening hours, address, directions, telephone and the core offer (DHL, cold drinks, snacks, tobacco and vapes) in the first mobile viewport.
- Replaced the former polished/red-black layout with a rough urban kiosk system using poster typography, price-card colours, thick rules, stickers and compact mobile layouts.
- Kept the real shop video as the hero proof point and added `kiez-vor-der-tuer.webp` as an explicitly illustrative street-scene asset.
- Added automatic DE/TR/EN selection from browser preferences, German fallback, the exact `DE → TR → EN → DE` click cycle, no-reload translation and persistent manual selection in `localStorage`.
- Localised the home page, legal pages and 404 page, including relevant metadata and accessibility labels.
- Updated `README.md` with the design, localisation architecture, asset disclosure and publishing notes.
- Corrected all public website URLs and canonical metadata to the actual domain `https://hausdeskiosks.de/`; `CNAME` already contained the correct domain.

## Remaining

- No implementation work remains for the requested redesign.
- Next useful action: review the deployed GitHub Pages build on physical iOS and Android devices, then confirm the existing pre-launch legal and DNS checklist in `README.md`.

## Blockers or pending decisions

- The legal notice still contains the pre-existing reminder to confirm whether a VAT ID, business registration or supervisory authority must be added.
- DNS for `hausdeskiosks.de` still needs to be switched from Google Sites to GitHub Pages before the new site becomes public at the custom domain.
- The existing contact address remains `info@haus-des-kiosks.de`; it was not changed because an email domain can legitimately differ from the website domain. Confirm separately if the mailbox should also move.

## Relevant files

- `index.html`
- `styles.css`
- `script.js`
- `kiez-vor-der-tuer.webp`
- `impressum.html`
- `datenschutz.html`
- `404.html`
- `README.md`

## Verification performed

- `node --check script.js` — passed.
- `git diff --check` — passed.
- Translation-key coverage check — every HTML `data-i18n*` key exists in DE, TR and EN.
- Headless Google Chrome screenshots at 320×800, 390×844, 390×7200 and 1440×1000 — visually checked; responsive layout and key first-viewport content render correctly.
- Browser-language test with `--lang=tr-TR --accept-lang=tr-TR,tr` — selected Turkish automatically.
- Chrome DevTools Protocol click-cycle test — observed `EN → DE → TR → EN` with matching button labels and stored values.
- Reload persistence test — stored `TR` returned as `lang="tr"`, button `TR`, storage value `tr` after reload.
