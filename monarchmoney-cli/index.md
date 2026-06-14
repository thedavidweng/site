---
layout: home

hero:
  name: monarchmoney-cli
  text: Monarch Money CLI
  tagline: Agent-friendly command-line interface for Monarch Money. Accounts, transactions, budgets, and cashflow from your terminal.
  actions:
    - theme: brand
      text: Install
      link: /docs/monarchmoney-cli/guide/install
    - theme: alt
      text: GitHub
      link: https://github.com/thedavidweng/monarchmoney-cli

features:
  - icon: 🏦
    title: Accounts
    details: List and inspect all financial accounts, balances, and institutions.
  - icon: 💳
    title: Transactions
    details: Search, filter, list, and manage transactions with full query support.
  - icon: 📊
    title: Budgets & Cashflow
    details: View budget allocations, spending, and cashflow analysis.
  - icon: 📋
    title: Rules & Splits
    details: Manage transaction rules and split transactions.
  - icon: 🛡️
    title: Safety Gates
    details: --dry-run, --confirm, --read-only on all mutations. Audit logging.
  - icon: 🤖
    title: Agent-Ready
    details: JSON output, SQLite caching, stable error codes.
---

## Quick Start

```bash
# Install
brew tap thedavidweng/tap
brew install --cask monarchmoney-cli

# Authenticate
monarch auth login

# Use
monarch accounts list --json
monarch transactions list --json
monarch cashflow --json
```

## Key Commands

| Command | Description |
|---------|-------------|
| `monarch accounts list` | List all accounts |
| `monarch transactions list` | List transactions with filters |
| `monarch budgets list` | List budget categories |
| `monarch cashflow` | Cashflow analysis |
| `monarch rules list` | List transaction rules |
| `monarch doctor` | Verify environment and auth |
