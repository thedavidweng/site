---
layout: home

hero:
  name: tg-drive
  image:
    src: /tg-drive-icon.webp
    alt: tg-drive
  text: Telegram Drive, as a CLI and a desktop app
  tagline: Turn a Telegram channel into a recoverable, scriptable file tree. Local SQLite cache with Telegram source of truth.
  actions:
    - theme: brand
      text: Guide
      link: /tg-drive/docs/guides/getting-started
    - theme: alt
      text: GitHub
      link: https://github.com/thedavidweng/tg-drive

features:
  - icon: lucide:folder-tree
    title: Virtual File Tree
    details: Upload and download files and recursive trees with exact ls and tree over local cache.
  - icon: lucide:life-buoy
    title: Disaster Recovery
    details: Telegram messages are the source of truth. Rebuild the local index from channel metadata after database loss.
  - icon: lucide:hash
    title: Native Hashtags
    details: Channel posts stay human-readable with native hashtag navigation in official Telegram apps.
  - icon: lucide:inbox
    title: Saved Messages Import
    details: Mirror Telegram Saved Messages into structured channel folders with provenance and deduplication.
  - icon: lucide:lock
    title: Safety & Locks
    details: Remote writes use operation locks, DB transactions, and --confirm on destructive operations.
  - icon: lucide:bot
    title: Agent-Friendly
    details: Stable --json outputs, machine-readable manifests (td-manifest:v1), and distinct stdout/stderr.
---

## Quick Start

```bash
# Install
brew tap thedavidweng/tap
brew install --cask tg-drive

# Login to Telegram
td auth setup
td auth login

# Bind channel and upload
td init ~/Pictures --create-channel
td cp ~/Pictures/beach.jpg /2024/beach.jpg
td ls /
td tree /

# Disaster recovery
td scan --full
```

## Key Commands

| Command | Description |
|---------|-------------|
| `td auth login` | Authenticate with Telegram API credentials |
| `td init <root>` | Bind a local folder to a Telegram channel |
| `td cp` / `td get` | Upload or download files and folders |
| `td ls` / `td tree` | Browse cached directory tree |
| `td mv` / `td rm` | Rename, move, or delete files |
| `td scan --full` | Rebuild local index from Telegram channel |
| `td import saved` | Mirror Telegram Saved Messages |
| `td share` | Generate invite link and folder hashtag |
