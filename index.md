---
layout: home

hero:
  name: CLI Tools
  text: Agent-friendly command-line tools
  tagline: Stable JSON output, safety gates, single binaries. Built for humans and AI agents.
  actions:
    - theme: brand
      text: GitHub
      link: https://github.com/thedavidweng
    - theme: alt
      text: Homebrew Tap
      link: https://github.com/thedavidweng/homebrew-tap

features:
  - icon: 🎓
    title: canvas-cli
    details: Canvas LMS CLI. 50+ commands for courses, assignments, submissions, grading, and more.
    link: /docs/canvas-cli/
    linkText: Get started
  - icon: 🔬
    title: zenodo-cli
    details: Zenodo/InvenioRDM CLI. Record management, file upload, and full API access.
    link: /docs/zenodo-cli/
    linkText: Get started
  - icon: 💰
    title: monarchmoney-cli
    details: Monarch Money CLI. Accounts, transactions, budgets, and cashflow from your terminal.
    link: /docs/monarchmoney-cli/
    linkText: Get started
  - icon: 📷
    title: flickr-cli
    details: Flickr CLI. Photo management, backup, upload, albums, and full API access.
    link: /docs/flickr-cli/
    linkText: Get started
  - icon: 🏦
    title: money
    details: Local-first personal finance backend. Encrypted SQLite, multi-provider sync, AI-agent friendly.
    link: /docs/money/
    linkText: Get started
---

## Shared Principles

All tools follow the same design philosophy:

- **Agent-friendly** — Stable JSON output, predictable exit codes, distinct stdout/stderr
- **Safety first** — `--read-only`, `--dry-run`, `--confirm` gates on all mutations
- **Single binary** — No runtime, no containers, no dependencies
- **Cross-platform** — Linux, macOS, Windows (amd64/arm64)
- **Homebrew distribution** — `brew install --cask thedavidweng/tap/<tool>`

## Quick Install

```bash
brew tap thedavidweng/tap
brew install --cask <tool-name>
```
