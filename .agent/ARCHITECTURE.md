# Architecture

## Overview

A static, multi-page website is served directly by GitHub Pages. There is no
application backend, build process, or server-side persistence.

## Components

- `index.html`: primary page, structured business data, metadata, and content.
- `impressum.html`, `datenschutz.html`, `404.html`: secondary static pages.
- `styles.css`: shared responsive layout and visual system.
- `script.js`: translation dictionaries, language state, navigation, opening-hours
  display, and media behavior.
- Root media assets: real shop video/audio/logo assets plus a disclosed editorial
  illustration.

## Data flow and persistence

The browser downloads static files. It chooses DE/TR/EN from browser preferences
unless a manual choice exists under `haus-des-kiosks-language` in `localStorage`.
No business or customer data is submitted to this repository.

## External systems

- GitHub Pages hosts the site at `hausdeskiosks.de`.
- The map is an OpenStreetMap embed; directions link to Google Maps.
- Instagram and TikTok are outbound links.

## Deployment

`.github/workflows/pages.yml` uploads the repository root on pushes to `main`.
`CNAME` declares the custom domain.

## Testing

Use JavaScript syntax checks, translation-key coverage, link/asset checks, and
browser review at representative mobile and desktop sizes.
