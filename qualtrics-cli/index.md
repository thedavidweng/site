---
layout: home

hero:
  name: qualtrics-cli
  image:
    src: /qualtrics-cli-icon.webp
    alt: qualtrics-cli
  text: Qualtrics CLI
  tagline: Agent-friendly CLI for the Qualtrics Experience Management Platform & offline survey compiler.
  actions:
    - theme: brand
      text: Guide
      link: /qualtrics-cli/docs/qsf-spec
    - theme: alt
      text: GitHub
      link: https://github.com/thedavidweng/qualtrics-cli

features:
  - icon: 📝
    title: Offline Survey Compiler
    details: Compile plain-text Markdown survey specs directly to .qsf files with zero API access needed.
  - icon: 📊
    title: Full Survey Platform
    details: Complete coverage of surveys, questions, blocks, flows, options, distributions, and contacts.
  - icon: 🔄
    title: Async Response Jobs
    details: Asynchronous response exports and imports with automatic polling, progress, and archive extraction.
  - icon: 🛡️
    title: Safety Model
    details: --dry-run, --confirm, and --read-only gates on all mutations and destructive actions.
  - icon: 🤖
    title: Agent-First Design
    details: Stable JSON envelope, machine-readable error taxonomy, separated stdout/stderr, UUID tracking.
  - icon: ⚡
    title: Raw API Passthrough
    details: qualtrics raw <METHOD> <path> for immediate authenticated access to any endpoint.
---

## Quick Start

```bash
# Install
brew tap thedavidweng/tap
brew install --cask qualtrics

# Set up credentials
qualtrics auth set-token
qualtrics auth set-datacenter pdx1
qualtrics auth status

# Compile survey offline (No API required)
qualtrics definitions build survey.md -o survey.qsf

# Manage surveys & export responses
qualtrics surveys list --json
qualtrics responses export start SV_123456789 --format csv --wait --extract
```

## Key Commands

| Command | Description |
|---------|-------------|
| `qualtrics definitions build` | Compile Markdown survey spec to `.qsf` |
| `qualtrics definitions qsf summary` | Inspect and summarize `.qsf` files |
| `qualtrics surveys list` | List available surveys |
| `qualtrics definitions show` | Inspect survey definition documents |
| `qualtrics responses export start` | Export survey responses asynchronously |
| `qualtrics distributions create` | Create survey distributions |
| `qualtrics raw` | Authenticated passthrough for any endpoint |
