# Decisions

## 2026-08-12 - Static GitHub Pages site

**Decision:** Keep the site in plain HTML, CSS, and JavaScript and deploy the
repository root from `main` through GitHub Pages.

**Reason:** The site remains fast, inexpensive, and easy to maintain without a
build toolchain.

**Consequences:** Browser validation replaces a framework test suite; new tooling
needs a concrete maintenance benefit.

## 2026-08-12 - Client-side trilingual content

**Decision:** Maintain complete DE/TR/EN dictionaries in `script.js`, detect the
initial browser language, and persist explicit user choice in `localStorage`.

**Reason:** All pages can remain static while supporting the kiosk's audiences.

**Consequences:** Every translatable key must remain complete in all languages.

## 2026-08-13 - Repository task authority

**Decision:** `.agent/TODO.md` is the only maintenance checklist; README links to it.

**Reason:** This prevents the former root handoff and README checklist from drifting.

## 2026-08-13 - Dependency-free first regression tier

**Decision:** Keep the delivered site as plain HTML/CSS/JavaScript and use Node's
built-in test runner plus a repository-owned static checker for the first CI tier.

**Reason:** Syntax, structure, assets, translations, metadata and deterministic
opening-hours behavior can be protected immediately without changing runtime
delivery or installing packages.

**Consequences:** `site-config.js` is an ES module used by both the browser and Node
tests, so `script.js` now loads as a module. Playwright, axe, visual and Lighthouse
coverage remain a later, explicitly tracked dependency tier.
