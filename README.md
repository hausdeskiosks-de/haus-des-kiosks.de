# Haus des Kiosks

Static website for Haus des Kiosks at Ungsteiner Str. 3 in Munich. The site is intentionally plain HTML, CSS and JavaScript so it stays fast, inexpensive and easy to maintain.

## Site character

The design presents the shop as what it is: a tiny, busy neighbourhood kiosk whose social space is the pavement outside. Opening hours, address, directions and the core offer (DHL, drinks, snacks, tobacco and vapes) appear immediately on mobile.

The hero uses real shop footage from `teaser.mp4`. `kiez-vor-der-tuer.webp` is a deliberately illustrative editorial scene, not a photograph of the actual storefront.

## Localisation

German, Turkish and English are defined in `script.js`. On first visit the site checks `navigator.languages` and `navigator.language`, then falls back to German. A manual choice is stored under `haus-des-kiosks-language` in `localStorage` and takes precedence on future visits.

The language button cycles in this fixed order without reloading the page:

`DE → TR → EN → DE`

To add a language, append its code to `SUPPORTED_LANGUAGES`, add a complete translation map and keep every `data-i18n*` key covered.

Shared language and opening-hours rules live in `site-config.js`. Opening status is
always calculated in `Europe/Berlin`; a static contract check keeps the published
JSON-LD hours aligned with that configuration.

## Quality checks

Node.js 22 or newer is sufficient; the first test tier has no package dependencies:

```bash
npm test
```

This checks JavaScript syntax, basic HTML structure, local links and assets,
duplicate IDs, canonical/OpenGraph/favicon metadata, DE/TR/EN key and placeholder
parity, approved external subresources, sitemap/robots, language selection and
opening-hours boundaries. `.github/workflows/quality.yml` runs the same suite for
pushes and pull requests.

## Publishing

A push to `main` runs `.github/workflows/pages.yml` and deploys the site to GitHub Pages.
The deployment workflow is not yet gated on the separate quality workflow.

Current launch and maintenance tasks are tracked only in [`.agent/TODO.md`](.agent/TODO.md).
The custom domain and enforced HTTPS were verified during the 2026-08-13 agent-state
handoff; legal and physical-device review remain separate tasks.

## External services

- Instagram: [@haus_des_kiosks](https://www.instagram.com/haus_des_kiosks/)
- TikTok: [@haus.des.kiosks](https://www.tiktok.com/@haus.des.kiosks)
- Map: embedded OpenStreetMap view with a Google Maps directions link; no API key is required.
