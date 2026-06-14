---
layout: home

hero:
  name: money
  text: Personal Finance Backend
  tagline: Local-first finance data your agent can rely on. Encrypted SQLite, stable CLI + JSON contracts, BYOK providers — no embedded AI, no required server.
  actions:
    - theme: brand
      text: Guide
      link: /money/docs/GETTING_STARTED
    - theme: alt
      text: GitHub
      link: https://github.com/thedavidweng/money

features:
  - icon: 🔒
    title: Encrypted SQLite
    details: Financial data at rest in an encrypted local file you control — not plaintext SQLite, not someone else's cloud.
  - icon: 🔌
    title: BYOK Providers
    details: Plaid, Bridge, and more as adapters. You bring credentials; no managed proxy or subscription.
  - icon: 📋
    title: Stable JSON Contracts
    details: Versioned envelopes, deterministic sorting and pagination — built for scripts, cron, and agents.
  - icon: 💻
    title: CLI-First
    details: Human output by default; --json when you need parseable stdout. No web server required.
  - icon: 🛡️
    title: Explicit Sync Boundary
    details: Read commands use local data only. Network I/O happens when you link or sync — not on every query.
  - icon: ▶️
    title: Demo Mode
    details: money demo … runs against bundled sample data — no credentials required.
---

## Key Commands

| Command | Description |
|---------|-------------|
| `money demo accounts list --json` | Try with sample data (no credentials) |
| `money setup` | Initialize config and encrypted database |
| `money link` | Link a financial institution |
| `money sync` | Sync linked provider data |
| `money accounts list` | List all accounts |
| `money transactions search` | Search transactions |
| `money doctor` | Diagnose environment |

Read the [architecture guide](/money/docs/ARCHITECTURE) for data flow and module boundaries.
