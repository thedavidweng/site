---
layout: home

hero:
  name: money
  text: Personal Finance Backend
  tagline: Local-first, agent-friendly personal finance backend. Encrypted SQLite, multi-provider sync, AI-agent friendly.
  actions:
    - theme: brand
      text: Guide
      link: /money/docs/GETTING_STARTED
    - theme: alt
      text: GitHub
      link: https://github.com/thedavidweng/money

features:
  - icon: 🔒
    title: Encrypted at Rest
    details: SQLite with Adiantum VFS encryption. Your financial data never leaves your machine unencrypted.
  - icon: 🔄
    title: Multi-Provider Sync
    details: Sync with Plaid and other financial providers. Automatic transaction import.
  - icon: 📊
    title: Accounts & Transactions
    details: Full account management, transaction search, categorization, and rules.
  - icon: 💰
    title: Budgets & Cashflow
    details: Budget tracking, cashflow analysis, and net worth calculations.
  - icon: 🤖
    title: Agent-First
    details: JSON output, stable contracts, designed for AI agent integration.
  - icon: 🔐
    title: BYOK Credentials
    details: You own your API keys. No telemetry, no server, no data leaves your machine.
---

## Quick Start

```bash
# Install
brew tap thedavidweng/tap
brew install --cask money

# Verify environment
money doctor

# Use
money accounts list --json
money transactions list --json
money cashflow --json
```

## Key Commands

| Command | Description |
|---------|-------------|
| `money accounts list` | List all accounts |
| `money transactions list` | List transactions |
| `money cashflow` | Cashflow analysis |
| `money net-worth` | Net worth calculation |
| `money budgets list` | List budgets |
| `money doctor` | Diagnose environment |
| `money sync` | Sync with providers |
