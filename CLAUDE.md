# CLAUDE.md

Project instructions for the Perfect Smile website project.

## Design context
- Visual reference for the alternate direction: `uploads/DESIGN.md` (warm cream canvas #faf9f5, coral #cc785c, dark #181715, serif display + humanist sans, 96px section rhythm, 8/12/16px radii).
- Brand direction v1: deep navy #0B1B2B + gold #F5B301, taken from the clinic's icon.
- Clinic: Perfect Smile Dental Studio, 18 Devonshire Place, Marylebone, London. Site language: English.

## Toolkit reference (from the user's uploaded CLAUDE.md)

UI UX Pro Max is an AI-powered design intelligence toolkit providing searchable databases of UI styles, color palettes, font pairings, chart types, and UX guidelines. It works as a skill/workflow for AI coding assistants (Claude Code, Windsurf, Cursor, etc.).

### Search command

```bash
python3 src/ui-ux-pro-max/scripts/search.py "<query>" --domain <domain> [-n <max_results>]
```

Domains: `product`, `style`, `typography`, `color`, `landing`, `chart`, `ux`, `icons`, `react`, `web`, `google-fonts`, `gsap`.

Design dials (only with `--design-system`): `--variance <1-10>`, `--motion <1-10>`, `--density <1-10>`.

Stack search: `--stack <stack>` — `html-tailwind` (default), `react`, `nextjs`, `astro`, `vue`, `nuxtjs`, `nuxt-ui`, `svelte`, `swiftui`, `react-native`, `flutter`, `shadcn`, `jetpack-compose`, `threejs`, `angular`, `laravel`, `javafx`, `wpf`, `winui`, `avalonia`, `uno`, `uwp`.

### Architecture

```
src/ui-ux-pro-max/                # Source of Truth
├── data/                         # Canonical CSV databases
│   ├── products.csv, styles.csv, colors.csv, typography.csv, ...
│   └── stacks/                   # Stack-specific guidelines
├── scripts/
│   ├── search.py                 # CLI entry point
│   ├── core.py                   # BM25 + regex hybrid search engine
│   └── design_system.py          # Design system generation
└── templates/
    ├── base/                     # Base templates (skill-content.md, quick-reference.md)
    └── platforms/                # Platform configs (claude.json, cursor.json, ...)

cli/                              # CLI installer (ui-ux-pro-max-cli on npm)
.claude/skills/ui-ux-pro-max/     # Claude Code skill: hand-authored SKILL.md + mirrored data/, scripts/
.claude-plugin/                   # Claude Marketplace publishing
```

Search engine: BM25 ranking combined with regex matching; domain auto-detection when `--domain` is omitted.

### Sync rules

Source of truth is `src/ui-ux-pro-max/`. No symlinks in the repo — every mirrored copy is a real committed file kept in sync by `cli/scripts/sync-assets.mjs`, enforced by the "Check asset sync" CI workflow.

1. Data & scripts — edit in `src/ui-ux-pro-max/` (`data/*.csv`, `data/stacks/*.csv`, `scripts/*.py`), then sync.
2. Templates — edit in `src/ui-ux-pro-max/templates/` (`base/skill-content.md`, `base/quick-reference.md`, `platforms/*.json`).
3. Sync before publishing or committing data/script changes:
   ```bash
   cd cli
   npm run sync:assets
   npm run check:assets
   ```
   `.claude/skills/ui-ux-pro-max/SKILL.md` is hand-authored — edit it directly.
4. Reference folders need no manual sync; the CLI generates them from templates during `uipro init`.

### Prerequisites

Python 3.x, no external dependencies. On Windows use `python` instead of `python3`.

### Git workflow

Never push directly to `main`: branch (`feat/...` / `fix/...`), commit, `git push -u origin <branch>`, `gh pr create`.
