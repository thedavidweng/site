# Design

The site is one visual system across the hub (`/`) and every docs page. It extends the VitePress default theme through its CSS variables and public components, so theme upgrades carry through. The money pages keep their own theme (`.vitepress/theme/money.css`).

## Tokens

Defined in `.vitepress/theme/custom.css`.

| Token | Light | Dark |
|---|---|---|
| `--vp-c-brand-1` (links, active, focus) | `#2a4fd6` | `#93abff` |
| `--vp-c-brand-2` (hover) | `#2243bd` | `#7a96ff` |
| `--vp-c-brand-3` (brand button fill) | `#2747c9` | `#3a5ae0` |
| `--vp-c-brand-soft` (selection, tints) | `rgba(42, 79, 214, 0.12)` | `rgba(122, 150, 255, 0.16)` |
| `--vp-c-text-1` | `#1b1b1f` | theme default |

- Type: Geist Variable for all text (`--vp-font-family-base`), Geist Mono Variable for code and install commands only (`--vp-font-family-mono`). Self-hosted via `@fontsource-variable/*`; the theme is imported from `vitepress/theme-without-fonts` so Inter is not shipped.
- Neutrals, dividers, and surfaces are the theme's own (`--vp-c-bg`, `--vp-c-bg-soft`, `--vp-c-bg-alt`, `--vp-c-divider`).
- Radius: 14px (`--site-radius`) for screenshot stages, 8–10px for controls. Project icons are not clipped in CSS: each `public/*-icon.webp` file carries its own superellipse (n=5) shape on transparency, so every icon has the same outline.
- Motion: `--site-ease-out` (`cubic-bezier(0.16, 1, 0.3, 1)`); disabled under `prefers-reduced-motion`.

## Rules

- Color strategy is restrained: neutral grounds, one cobalt accent for actions, links, focus, and selection.
- Hierarchy comes from type scale and weight, not boxes. Lists are rows separated by 1px dividers; no cards, no nested containers.
- Display headings: weight 600, tracking -0.025em to -0.038em, `text-wrap: balance`.
- No emoji or Unicode glyphs as icons. Icons are SVG on a 24px grid (`components/HubIcon.vue`, Lucide and Simple Icons paths). Home page features write `icon: lucide:<name>`; `config.ts` swaps in the `lucide-static` SVG at build time and an unknown name fails the build.
- No eyebrow labels above headings.
- Use framework components first: `VPButton` for actions, `VPLink` for links, both from `vitepress/theme-without-fonts`. Nav items go through `themeConfig.nav`.
- Imagery is real product UI only (`public/hub/*.webp`, captured from each app's landing page). Window captures keep their transparent shadow and sit on a `--vp-c-bg-soft` stage.

## Hub structure

1. Statement headline, one paragraph, brand and alt buttons.
2. Index: every project on one row grammar (icon, name and tagline, description and platforms, copyable `brew install` command, Docs and GitHub). Filterable by kind (desktop, CLI, plugin, extension), in the same order as the index. The filter animates row moves. A project without a Homebrew cask leaves the install cell empty. The filter wraps when the chips do not fit the row.
3. Desktop apps: one wide screenshot, then a three-column row. Plugin and extension projects with a screenshot follow in the same frame. Each caption carries small neutral stack tags (language first, then UI framework) from `stack` in `.vitepress/projects.ts`. CLI tools have no screenshot.
4. Command-line tools: every CLI-only project in one row (icon, name, tagline, stack tag), then the shared CLI contract as a definition list below it.
5. Closing band with GitHub, Homebrew tap, and `llms.txt` links.

Project data, install commands, and screenshots live in `.vitepress/projects.ts`.

## Project pages

Each CLI's overview and docs take an accent from its icon or brand kit (`accent` in `.vitepress/projects.ts`; Zenodo uses its brand-kit blue, not its black-and-white icon). `Layout.vue` sets `--project-*` variables on a wrapper and `theme/project-theme.css` maps them onto the brand, button, and tip tokens, a soft halo behind the home hero, and the glow behind the hero icon. `light` and `dark` must pass 4.5:1 as text on the page background and behind white button text. money keeps its own gold-and-green theme in `money.css`.
