# Repository Agent Guide

## Operating model

The repository is persistent project memory. A chat or agent session is temporary
working memory. Durable, verified continuation context belongs in `.agent/`.

Assume the next session has no useful memory of the current conversation.

## Startup

1. Inspect `git status` and preserve unrelated worktree changes.
2. Read `.agent/STATE.md`.
3. Read `.agent/TODO.md` when continuing work.
4. Read `.agent/DECISIONS.md` and `.agent/ARCHITECTURE.md` only when relevant.
5. Inspect recent relevant commits and the specific files needed for the task.

For a vague continuation request, continue the highest-priority unfinished item in
`.agent/TODO.md` unless the user supplies a different task. Do not redo completed
redesign work.

## Project map

- `index.html`: home page structure, metadata, and business content.
- `styles.css`: responsive visual system.
- `script.js`: DE/TR/EN translations, language selection, navigation, hours, and
  media controls.
- `impressum.html`, `datenschutz.html`, `404.html`: localized secondary pages.
- Media files at the repository root: hero, jingle, logo, and editorial imagery.
- `.github/workflows/pages.yml` and `CNAME`: GitHub Pages deployment and domain.
- `README.md`: stable maintenance and publishing overview.
- `.agent/`: current state, authoritative tasks, decisions, and architecture map.

## Scope and safety

- The site is static HTML/CSS/JavaScript with no build or package-install step.
- Keep every `data-i18n*` key covered in German, Turkish, and English.
- Preserve the language cycle and the `haus-des-kiosks-language` storage key.
- Treat legal requirements and business details as owner-review items; do not
  silently invent or update them.
- Keep real and illustrative media descriptions accurate.
- Do not add credentials, tracking, or third-party scripts without an explicit
  requirement and corresponding privacy review.

## Context hygiene

- Use targeted `rg`, narrow reads, scoped history, and focused diffs.
- Search translation keys before reading all of `script.js`.
- Avoid giant logs and unnecessary rereads of media or generated output.
- Run scoped syntax and content checks before broader browser review.
- Use isolated or subagent investigations, where supported, only for large
  independent explorations.
- Move durable findings into `.agent/STATE.md`; do not rely on chat history.

## Validation

- Run `node --check script.js`.
- Run `git diff --check`.
- Confirm every changed `data-i18n*` key exists for DE, TR, and EN.
- For layout or interaction changes, serve with `python3 -m http.server 8000` and
  inspect relevant mobile and desktop widths.
- Confirm referenced assets and links exist.
- Verify deployment separately from the workflow configuration when runtime state
  matters.

## Handoff

Before ending substantial work:

1. Validate the coherent change.
2. Update `.agent/STATE.md` with verified current reality.
3. Update `.agent/TODO.md`; it is the only repository task authority.
4. Record durable decisions only when they were actually made.
5. Update architecture only when the implemented structure changed.

When visible context usage reaches roughly 50-70%, prefer a coherent stopping
point, update the handoff, and continue in a fresh session. Do not stop halfway
through an atomic change merely to satisfy a percentage.

Inspect the final diff and include handoff updates in the same logical change so a
fresh Codex or Claude Code session can continue without this conversation.
