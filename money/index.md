---
layout: home

hero:
  name: money
  text: Personal Finance Backend
  tagline: Local-first finance data your agent can rely on. Encrypted SQLite, stable CLI + JSON contracts, BYOK providers — no embedded AI, no required server.
  actions:
    - theme: brand
      text: Get Started
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

## Quick Start

Two paths: try with sample data, or connect a real provider.

### Step 1 — Demo mode {#demo-mode}

Bundled in-memory sample data; safe to run anywhere. `meta.demo: true` on every envelope.

```sh
# Install via Homebrew Cask
$ brew install --cask thedavidweng/tap/money

# Or via Go
$ go install github.com/thedavidweng/money/cmd/money@latest

# Try with sample data
$ money demo accounts list --json
$ money demo transactions search "coffee"
```

### Step 2 — Real sync (BYOK) {#real-sync}

Bring your own Plaid / Bridge credentials. `money` stores them in your encrypted local DB.

```sh
# Interactive setup — config, key, database
$ money setup

# Link an institution, then sync
$ money link
$ money sync
$ money accounts list --json
```

::: info
All commands accept `--json`. Write operations require `--dry-run` or `--confirm`.
:::

## Why money

Many personal finance workflows depend on a single SaaS for truth, on products that bundle AI advisors, or on a full web app you must keep online. That conflicts with owning your data, choosing providers, and giving an *external* agent predictable, deterministic primitives.

`money` takes the opposite shape: a user-owned encrypted database, explicit sync to BYOK providers, and machine-readable envelopes. **Your agent owns reasoning and memory — not the tool.**

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

## Architecture

Read commands never call the network. Outbound provider traffic only happens when you explicitly `link` or `sync`.

Providers map into canonical records — accounts, transactions, categories, tags, recurring items — and land in encrypted SQLite. Every command returns a versioned JSON envelope with deterministic sorting and pagination.

Read the [full architecture document](/money/docs/ARCHITECTURE).
