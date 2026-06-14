---
layout: home

hero:
  name: flickr-cli
  text: Flickr CLI
  tagline: Agent-friendly command-line interface for Flickr. Photo management, backup, upload, albums, and full API access.
  actions:
    - theme: brand
      text: Install
      link: /flickr-cli/docs/auth
    - theme: alt
      text: GitHub
      link: https://github.com/thedavidweng/flickr-cli

features:
  - icon: 📷
    title: Photos
    details: List, search, upload, download, and manage photos with metadata.
  - icon: 📁
    title: Albums & Galleries
    details: Create and manage albums, galleries, and collections.
  - icon: 💾
    title: Backup
    details: Full account backup with deduplication and incremental sync.
  - icon: 🔐
    title: OAuth
    details: Secure Flickr OAuth authentication with profile support.
  - icon: 🛡️
    title: Safety Gates
    details: --dry-run, --confirm, --read-only on all mutations.
  - icon: 🤖
    title: Agent-Ready
    details: JSON output, NDJSON events stream, secret redaction.
---

## Quick Start

```bash
# Install
brew tap thedavidweng/tap
brew install --cask flickr-cli

# Authenticate
flickr auth login --perms write

# Use
flickr photos list --json
flickr albums list --json
flickr photos download --all --dest ./backup
```

## Key Commands

| Command | Description |
|---------|-------------|
| `flickr photos list` | List your photos |
| `flickr photos search` | Search by text or tags |
| `flickr photos upload` | Upload photos |
| `flickr albums list` | List albums |
| `flickr backup` | Full account backup |
| `flickr api get` | Raw API passthrough |
