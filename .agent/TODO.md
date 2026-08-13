# TODO

This file is the authoritative repository task list. `README.md` links here rather
than maintaining a competing checklist.

## Now

- [ ] Add Playwright browser tests for 320x800, 390x844, small landscape,
  tablet and desktop. Cover first-viewport facts, navigation, language switching,
  opening hours, route/address, video, jingle, keyboard, legal pages and a real 404.
- [ ] Add axe checks plus explicit assertions for landmarks, heading hierarchy,
  skip links on secondary pages, visible focus, menu state/focus flow, language and
  media control names, opening-status announcements and direction text.
- [ ] Add deterministic visual snapshots with frozen time, stable video/poster and
  reduced motion; snapshots must supplement text and interaction assertions.
- [ ] Give the looping hero video a pause control and stop motion for
  `prefers-reduced-motion`; add the best accurate text alternative available from
  existing content. Recheck audio state announcements and autoplay behavior.
- [ ] Fix the mobile menu keyboard order/focus flow and measured contrast failures,
  including focus indication on paper/blue backgrounds and red/blue content blocks.
- [ ] Replace the eager OpenStreetMap embed with a local placeholder and explicit
  click-to-load control using `referrerpolicy="no-referrer"`; keep the normal route
  link and update privacy text only after the behavior changes.
- [ ] Review the deployed site on physical iOS and Android devices, including the
  first viewport, language switch, navigation, video, and audio controls.
- [ ] Ask the owner or qualified reviewer to confirm whether the legal notice needs
  additional tax, registration, or supervisory information.
- [ ] Ask the owner to confirm the published daily hours, telephone number, address,
  contact mailbox and all listed services; automation must not close this gate.
- [ ] Obtain qualified review of any presentation or wording for age-restricted
  products if that presentation remains in scope.

## Next

- [ ] Confirm whether `info@haus-des-kiosks.de` should remain the public contact
  address even though the website uses `hausdeskiosks.de`.
- [ ] Add locked Playwright/axe tooling and gate the Pages deploy on the complete
  quality job without uploading development files or `node_modules`.
- [ ] Add media regression checks: fixed dimensions, responsive existing-image
  derivatives, below-fold lazy loading, video poster/preload, reproducible
  compression, metadata/EXIF/GPS inspection and preservation of originals.
- [ ] Add Lighthouse budgets and a slow-mobile test that prevents unnecessary
  first-viewport downloads.
- [ ] Audit all outbound links and referrer behavior, then add the strictest static
  Content Security Policy compatible with the verified page behavior.
- [ ] Complete SEO verification using existing facts only: JSON-LD/UI schedule
  parity, address/contact consistency, canonical domain, OpenGraph, sitemap and
  robots. Do not add ratings, reviews, product lists or legal/age claims.
- [ ] Add an optional post-Pages deployment check for HTTP status, canonical domain,
  HTTPS, core assets, mixed content, real 404 behavior and observable security
  headers. Mark network/authentication failures separately from site failures.
- [ ] Create `docs/VERIFICATION_MATRIX.md`, `docs/RELEASE_CHECKLIST.md` and
  `docs/NICE_TO_HAVE.md` from verified results.

## Later — document only, do not implement

- [ ] Record these nice-to-haves without stubs, dependencies or tracking scripts:
  small owner CMS; special/holiday hours; PWA/offline; more languages; social feed;
  WhatsApp contact; loyalty card; digital offers; parcel-status hints; online
  ordering; delivery; analytics; newsletter.

## Blocked

- [ ] Final legal-detail sign-off depends on authoritative owner/legal input.
- [ ] Physical iOS and Android review depends on real devices.
- [ ] Final business-detail and public-mailbox sign-off depends on the owner.
- [ ] Any final age-restricted-product presentation sign-off may require a qualified
  reviewer.

## Recently completed

- [x] Push and fast-forward the first quality baseline into `main` by explicit user
  request; no pull request was opened for this direct integration.
- [x] Create `agent/kiosk-quality-and-regression` from current `main`.
- [x] Add dependency-free JS syntax, HTML/link/asset/ID, metadata, i18n,
  placeholder, external-resource, sitemap/robots and JSON-LD schedule checks.
- [x] Extract testable language and Europe/Berlin opening-hours rules without
  changing the published daily 08:00–22:00 hours or the storage key/cycle.
- [x] Add unit coverage for locale priority/fallback/cycle/storage failures and
  weekday/boundary/midnight/summer/winter/invalid-hours cases.
- [x] Add a separate static/unit GitHub Actions quality workflow.
- [x] Add canonical/OpenGraph metadata to legal/404 pages plus canonical sitemap and
  robots files.
- [x] Add the linked `website made by itmitalles.de` footer credit.
- [x] Complete the mobile-first DE/TR/EN redesign.
- [x] Correct canonical URLs to `https://hausdeskiosks.de/`.
- [x] Point the custom domain to GitHub Pages and enable enforced HTTPS.
- [x] Replace the old root handoff with `.agent/` state and tasks.
