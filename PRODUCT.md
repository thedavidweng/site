# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- Developers and AI-agent users who arrive to pick a tool, install it, and read its docs. They want to know quickly what each tool does and how to get it (Homebrew, release download, docs).
- Recruiters and potential employers judging David Weng's work. They scan for range, finish, and whether the projects are real, shipped software.
- David himself, using the hub as the index of everything he has published.

## Product Purpose

A single home for David Weng's open-source software: agent-friendly CLI tools, a local-first personal finance backend, and native desktop apps. The hub routes each visitor to the right project; the docs half of the site hosts each CLI's documentation, synced from the project repositories. Success: a visitor understands the range in one screen and reaches the project they need in one click, and the whole thing reads as shipped product, not a hobby page.

## Positioning

One maker, a coherent body of tools: every CLI shares the same contract (stable JSON output, safety gates, single binary, Homebrew), and the desktop apps are native, local, and private. The consistency across projects is the claim; a collection of unrelated repos cannot make it.

## Operating Context

- Docs are synced from each CLI repository (`pnpm sync-docs`) into VitePress; sidebars live in `.vitepress/config.ts`. Fast client-side navigation between docs pages is a requirement (a reason VitePress is kept over Starlight).
- Desktop apps (OpenKara, Sukiru, Apple Say, SDF Flash GUI, tg-drive's td-gui), DeckPad, and ADP Shifts have their own landing pages; the hub links to them.
- Machine-readable endpoints (`llms.txt`, `llms-full.txt`, sitemap, money `agent.json`) are part of the product for agent users.

## Capabilities and Constraints

- Stack: VitePress default theme, extended. Prefer framework components and theme CSS variables over hand-written UI so VitePress upgrades stay easy (2.0 is in alpha; the theme already avoids deleted internal components).
- The landing page and the docs must read as one site, not two.
- Open decision: an umbrella name for the projects. David floated "Hajware"; personal identity (David Weng) stays primary. "Blahaj" itself must not be used as a brand name (IKEA product). Product sites use DNS-only `*.blahaj.uk` names (`openkara`, `sukiru`, `apple-say`, `sdf-flash-gui`, `tg-drive`, `deckpad`, `adp-shifts`), recorded in the dnscontrol repo. CLI tools stay on this hub.

## Brand Commitments

- Personal identity: David Weng.
- No emoji as icons or decoration.
- Should feel like a funded product company's site, not a toy or template.

## Evidence on Hand

- Real app screenshots on the desktop app landing pages: `https://sukiru.blahaj.uk/assets/screenshot.webp`, `https://apple-say.blahaj.uk/assets/screenshot.webp`, OpenKara and tg-drive landing pages.
- App and CLI icons in `public/*-icon.webp`.
- No testimonials, user counts, or download numbers; do not invent them.

## Product Principles

1. Route fast: every project is one click from the hub, docs are one click from the project.
2. Show the software, not adjectives: real screenshots, real commands, real install lines.
3. One site: the hub and the docs share type, color, and chrome.
4. Upgradeable by default: build on the framework, not around it.
