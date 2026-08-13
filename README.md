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

## Publishing

A push to `main` runs `.github/workflows/pages.yml` and deploys the site to GitHub Pages.

Before the public launch:

- Confirm whether a VAT ID, business registration or supervisory authority must be added to the legal notice.
- Point DNS for `haus-des-kiosks.de` (and optionally `www`) to GitHub Pages. The domain currently still points to Google Sites.
- Set `haus-des-kiosks.de` as the custom domain under **Settings → Pages** and enable **Enforce HTTPS** once the certificate is available.

## External services

- Instagram: [@haus_des_kiosks](https://www.instagram.com/haus_des_kiosks/)
- TikTok: [@haus.des.kiosks](https://www.tiktok.com/@haus.des.kiosks)
- Map: embedded OpenStreetMap view with a Google Maps directions link; no API key is required.
