# Claude Code Guide

Read `AGENTS.md` first. It is the repository-local operating guide.

## Continuation startup

1. Inspect `git status` and recent relevant commits.
2. Read `.agent/STATE.md`.
3. Read `.agent/TODO.md`.
4. Demand-load `.agent/DECISIONS.md` and `.agent/ARCHITECTURE.md` only when needed.
5. Continue the highest-priority unfinished task unless the user specifies
   another task.

Do not duplicate the README or completed redesign in chat. Keep translation work
complete across German, Turkish, and English, and never guess legal or business
facts.

## Useful commands

```bash
node --check script.js
python3 -m http.server 8000
git diff --check
```

There is no dependency installation or build step. A push to `main` deploys the
repository root through GitHub Pages.

Before finishing substantial work, validate the change and update the affected
`.agent/` files. Assume the next session has no useful memory of this conversation.
