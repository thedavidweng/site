---
layout: home

hero:
  name: canvas-cli
  image:
    src: /canvas-cli-icon.webp
    alt: canvas-cli
  text: Canvas LMS CLI
  tagline: Agent-friendly command-line interface for Canvas LMS. 50+ commands, stable JSON output, mutation safety gates.
  actions:
    - theme: brand
      text: Guide
      link: /canvas-cli/docs/auth
    - theme: alt
      text: GitHub
      link: https://github.com/thedavidweng/canvas-cli

features:
  - icon: 📚
    title: Courses & Modules
    details: List, search, and manage courses, modules, and module items.
  - icon: 📝
    title: Assignments & Submissions
    details: Create assignments, submit work, download submissions, grade with rubrics.
  - icon: 💬
    title: Discussions & Inbox
    details: Read and post discussion replies, send and manage inbox messages.
  - icon: 📁
    title: Files & Pages
    details: Upload, download, and manage course files and wiki pages.
  - icon: 🛡️
    title: Safety Gates
    details: --dry-run, --confirm, --read-only on all mutations. Audit logging.
  - icon: 🤖
    title: Agent-Ready
    details: JSON envelope output, stable error codes, secret redaction.
---

## Quick Start

```bash
# Install
brew tap thedavidweng/tap
brew install --cask canvas-cli

# Authenticate
canvas auth login

# Use
canvas courses list --json
canvas assignments list COURSE_ID --json
```

## Key Commands

| Command | Description |
|---------|-------------|
| `canvas courses list` | List enrolled courses |
| `canvas assignments list` | List assignments in a course |
| `canvas submissions list` | List submissions for an assignment |
| `canvas discussions list` | List discussion topics |
| `canvas inbox list` | List inbox conversations |
| `canvas files list` | List files in a course |
| `canvas api get` | Raw API passthrough |
