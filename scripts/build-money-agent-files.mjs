#!/usr/bin/env node
import { mkdirSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const siteRoot = join(__dirname, '..')
const outDir = join(siteRoot, 'public', 'money')

const siteUrl = 'https://thedavidweng.github.io/site/money'
const repo = 'https://github.com/thedavidweng/money'

const llmsTxt = `# money

> A local-first, self-hostable personal finance backend for AI agents and power users.

## Overview

money pulls account and transaction data from user-configured financial providers (Plaid, Bridge, ...), stores it in a user-owned encrypted SQLite database, and exposes stable CLI + JSON contracts for external agents, scripts, and cron jobs.

It does not embed AI chat, model providers, hosted billing, telemetry, or a required long-running server. Your data stays local. Your agent owns the reasoning.

## Key features

- Encrypted SQLite — financial data at rest in an encrypted local file you control
- BYOK providers — bring your own Plaid / Bridge credentials; no managed proxy or subscription
- Stable JSON contracts — versioned envelopes, deterministic sorting and pagination
- CLI-first — human output by default; --json when you need parseable stdout
- Explicit sync boundary — read commands use local data only; network I/O only on link/sync
- Demo mode — try without credentials: money demo accounts list --json
- Apache 2.0 licensed, single Go binary, no telemetry

## Quick start

- Install: brew install --cask thedavidweng/tap/money
- Go install: go install github.com/thedavidweng/money/cmd/money@latest
- Demo: money demo accounts list --json
- Setup: money setup
- Sync: money link && money sync

## Contact

- GitHub Issues: ${repo}/issues
- Repository: ${repo}
- License: Apache 2.0

## Machine-Readable Endpoints

- Agent JSON: ${siteUrl}/agent.json
- Full content: ${siteUrl}/llms-full.txt
- Markdown homepage: ${siteUrl}/index.md
- Site: ${siteUrl}/
`

const llmsFullTxt = `${llmsTxt}

## Documentation (on unified site)

- Getting Started: ${siteUrl}/docs/GETTING_STARTED
- Architecture: ${siteUrl}/docs/ARCHITECTURE
- Contracts: ${siteUrl}/docs/CONTRACTS
- Schema: ${siteUrl}/docs/SCHEMA
- Config: ${siteUrl}/docs/CONFIG
- Roadmap: ${siteUrl}/docs/ROADMAP
`

const indexMd = `# money

A local-first, self-hostable personal finance backend for AI agents and power users.

[CLI] · [Local-first] · [For AI agents] · [v0.x pre-release]

## Local-first finance data your agent can rely on.

Pull accounts and transactions from providers you configure, store them in encrypted SQLite, and automate with stable CLI + JSON contracts. No embedded AI, no hosted ledger, no long-running server required.

- Apache 2.0 licensed
- Single Go binary
- No telemetry

## Quick start

\`\`\`
brew install --cask thedavidweng/tap/money
money demo accounts list --json
money setup
money link
money sync
\`\`\`

## Documentation

- [Getting Started](${siteUrl}/docs/GETTING_STARTED)
- [Architecture](${siteUrl}/docs/ARCHITECTURE)
- [Schema](${siteUrl}/docs/SCHEMA)
- [Configuration](${siteUrl}/docs/CONFIG)
- [Roadmap](${siteUrl}/docs/ROADMAP)

## Contact

- GitHub: ${repo}
- Issues: ${repo}/issues
`

const agent = {
  identity: {
    name: 'money',
    description: 'A local-first, self-hostable personal finance backend for AI agents and power users.',
    url: siteUrl,
    repository: repo,
    license: 'Apache-2.0',
    version: '0.x (pre-release)',
  },
  services: [
    {
      name: 'CLI tool',
      description: 'Command-line interface for personal finance data management',
      commands: [
        'accounts list',
        'accounts create-manual',
        'transactions list',
        'transactions search',
        'categories list',
        'tags list',
        'recurring list',
        'link',
        'sync',
        'setup',
        'doctor',
        'demo',
      ],
      interface: 'CLI + JSON contracts',
      outputFormat: 'Versioned JSON envelope with meta, data, errors',
    },
  ],
  content: {
    overview:
      'money pulls account and transaction data from user-configured financial providers, stores it in a user-owned encrypted SQLite database, and exposes stable CLI + JSON contracts for external agents, scripts, and cron jobs.',
    features: [
      'Encrypted SQLite — data at rest in an encrypted local file',
      'BYOK providers — Plaid, Bridge, and more as replaceable adapters',
      'Stable JSON contracts — versioned envelopes, deterministic ordering',
      'CLI-first — human output by default, --json for automation',
      'Explicit sync boundary — read uses local data only',
      'Demo mode — try without credentials against sample data',
      'Apache 2.0 licensed, single Go binary, no telemetry',
    ],
    documentation: [
      { name: 'Getting Started', url: `${siteUrl}/docs/GETTING_STARTED` },
      { name: 'Architecture', url: `${siteUrl}/docs/ARCHITECTURE` },
      { name: 'Contracts', url: `${siteUrl}/docs/CONTRACTS` },
      { name: 'Schema', url: `${siteUrl}/docs/SCHEMA` },
      { name: 'Config', url: `${siteUrl}/docs/CONFIG` },
      { name: 'Roadmap', url: `${siteUrl}/docs/ROADMAP` },
    ],
  },
  contact: {
    issues: `${repo}/issues`,
    repository: repo,
  },
  meta: {
    schema: '1.0.0',
    generated: new Date().toISOString(),
    deploy: 'GitHub Pages (site repo)',
    framework: 'VitePress',
  },
}

mkdirSync(outDir, { recursive: true })
writeFileSync(join(outDir, 'llms.txt'), llmsTxt)
writeFileSync(join(outDir, 'llms-full.txt'), llmsFullTxt)
writeFileSync(join(outDir, 'index.md'), indexMd)
writeFileSync(join(outDir, 'agent.json'), `${JSON.stringify(agent, null, 2)}\n`)

console.log('Generated money agent files in public/money/')
