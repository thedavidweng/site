---
layout: home

hero:
  name: zenodo-cli
  text: Zenodo/InvenioRDM CLI
  tagline: Agent-friendly command-line interface for Zenodo. Record management, file upload, and full InvenioRDM API access.
  actions:
    - theme: brand
      text: Install
      link: /zenodo-cli/docs/auth
    - theme: alt
      text: GitHub
      link: https://github.com/thedavidweng/zenodo-cli

features:
  - icon: 📄
    title: Records
    details: Create, update, publish, and manage Zenodo records and drafts.
  - icon: 📁
    title: Files
    details: Upload, download, and manage files in draft and published records.
  - icon: 🔍
    title: Search
    details: Search Zenodo records with full query syntax and filters.
  - icon: 🔑
    title: DOI Management
    details: Reserve DOIs, manage versions, and handle community submissions.
  - icon: 🛡️
    title: Safety Gates
    details: --dry-run, --confirm, --read-only on all mutations.
  - icon: 🤖
    title: Agent-Ready
    details: JSON output, stable error codes, sandbox support for testing.
---

## Quick Start

```bash
# Install
brew tap thedavidweng/tap
brew install --cask zenodo-cli

# Authenticate
zenodo auth login

# Create and publish a record
zenodo records create --title "My Dataset" --json
zenodo files upload RECORD_ID ./data.csv
zenodo records publish RECORD_ID --confirm
```

## Key Commands

| Command | Description |
|---------|-------------|
| `zenodo records list` | List your records |
| `zenodo records create` | Create a new draft record |
| `zenodo records publish` | Publish a draft record |
| `zenodo files upload` | Upload files to a draft |
| `zenodo files download` | Download files from a record |
| `zenodo search` | Search Zenodo records |
| `zenodo api get` | Raw API passthrough |
