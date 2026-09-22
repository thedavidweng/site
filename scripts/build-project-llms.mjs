#!/usr/bin/env node
import { mkdirSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

const siteUrl = 'https://thedavidweng.github.io/site'

const projectDetails = [
  {
    slug: 'canvas-cli',
    name: 'canvas-cli',
    description: '50+ commands for Canvas LMS — courses, assignments, submissions, grading, and more.',
    github: 'https://github.com/thedavidweng/canvas-cli',
    overview: '50+ commands for Canvas LMS — courses, assignments, submissions, grading, and more.',
    features: [
      'Full Canvas LMS API coverage — courses, assignments, submissions, enrollments',
      'JSON output on all commands via --json',
      'Safety gates — --dry-run, --confirm on mutations',
      'OAuth2 authentication',
      'Single Go binary, no runtime dependencies',
    ],
    docs: [
      ['Authentication', '/docs/auth'],
      ['Command Reference', '/docs/command-spec'],
      ['JSON Contract', '/docs/json-contract'],
      ['Safety Model', '/docs/safety-model'],
      ['Architecture', '/docs/architecture'],
    ],
  },
  {
    slug: 'zenodo-cli',
    name: 'zenodo-cli',
    description: 'Record management, file upload, and full InvenioRDM API access for Zenodo.',
    github: 'https://github.com/thedavidweng/zenodo-cli',
    overview: 'Record management, file upload, and full InvenioRDM API access for Zenodo.',
    features: [
      'Full Zenodo/InvenioRDM API access — records, deposits, files, communities',
      'JSON output via --json',
      'API token authentication',
      'Read-only default, --confirm on uploads',
      'Single Go binary',
    ],
    docs: [
      ['Authentication', '/docs/auth'],
      ['Capabilities', '/docs/capabilities'],
      ['Safety', '/docs/safety'],
      ['Agent Guide', '/docs/agent-guide'],
      ['Architecture', '/docs/ARCHITECTURE'],
    ],
  },
  {
    slug: 'monarchmoney-cli',
    name: 'monarchmoney-cli',
    description: 'Accounts, transactions, budgets, and cashflow from your terminal.',
    github: 'https://github.com/thedavidweng/monarchmoney-cli',
    overview: 'Accounts, transactions, budgets, and cashflow from your terminal.',
    features: [
      'Monarch Money API access — accounts, transactions, budgets, cashflow',
      'Versioned JSON envelope output',
      'Session token authentication',
      'Single Go binary, no runtime dependencies',
    ],
    docs: [
      ['Capabilities', '/docs/capabilities'],
      ['Authentication', '/docs/auth'],
      ['Safety Model', '/docs/safety'],
      ['Agent Guide', '/docs/agent-guide'],
      ['JSON Schema', '/docs/json-schema'],
    ],
  },
  {
    slug: 'flickr-cli',
    name: 'flickr-cli',
    description: 'Photo management, backup, upload, albums, and full Flickr API access.',
    github: 'https://github.com/thedavidweng/flickr-cli',
    overview: 'Photo management, backup, upload, albums, and full Flickr API access.',
    features: [
      'Full Flickr API access — photos, albums, galleries, favorites',
      'Backup and restore',
      'Bulk upload with album assignment',
      'Piwigo migration support',
      'OAuth1 authentication',
      'Single Go binary',
    ],
    docs: [
      ['Authentication', '/docs/auth'],
      ['Capabilities', '/docs/capabilities'],
      ['Upload', '/docs/upload'],
      ['Backup', '/docs/backup'],
      ['Safety', '/docs/safety'],
      ['Agent Guide', '/docs/agent-guide'],
      ['Piwigo Import', '/docs/piwigo'],
      ['Architecture', '/docs/ARCHITECTURE'],
    ],
  },
  {
    slug: 'qualtrics-cli',
    name: 'qualtrics-cli',
    description: 'Agent-friendly CLI for Qualtrics XM Platform & offline survey compiler.',
    github: 'https://github.com/thedavidweng/qualtrics-cli',
    overview: 'Query surveys, definitions, asynchronous response exports and imports, distributions, contacts, webhooks, compile offline survey specifications to QSF, and call unmapped APIs directly.',
    features: [
      'Offline plain-text survey spec to .qsf compiler (qualtrics definitions build)',
      'Full Qualtrics XM REST API coverage with stable JSON envelope',
      'Async response exports and imports with automatic polling and extraction',
      'Safety gates — --read-only, --dry-run, --confirm on mutations',
      'Single Go binary, no runtime dependencies',
    ],
    docs: [
      ['QSF Spec', '/docs/qsf-spec'],
      ['Commands', '/COMMANDS'],
      ['JSON Schema', '/JSON_SCHEMA'],
      ['Context', '/CONTEXT'],
    ],
  },
  {
    slug: 'tg-drive-cli',
    name: 'tg-drive-cli',
    description: 'Turn a Telegram channel into a recoverable, scriptable file tree.',
    github: 'https://github.com/thedavidweng/tg-drive-cli',
    overview: 'Upload local files as ordinary Telegram media, stamp each message with machine-readable metadata, and maintain a rebuildable SQLite index. Telegram remains the source of truth.',
    features: [
      'Virtual file tree with exact ls and tree over local SQLite cache',
      'Telegram channel as source of truth — td scan --full recovers from database loss',
      'Native hashtag navigation in official Telegram clients',
      'Mirror Saved Messages into channel folders with provenance and deduplication',
      'Operation locks, DB transactions, and safety gates on mutations',
      'Single Go binary, cross-platform with WASM support',
    ],
    docs: [
      ['Getting Started', '/docs/guides/getting-started'],
      ['How td Works', '/docs/guides/how-td-works'],
      ['CLI Reference', '/docs/guides/cli-reference'],
      ['Organize Files', '/docs/guides/organize-files'],
      ['Scripting with JSON', '/docs/guides/script-with-json'],
      ['Architecture', '/docs/architecture'],
    ],
  },
]

for (const project of projectDetails) {
  const projectUrl = `${siteUrl}/${project.slug}`
  const docs = project.docs.map(([name, path]) => `- ${name}: ${projectUrl}${path}`).join('\n')

  const llmsTxt = `# ${project.name}

> ${project.description}

## Overview

${project.overview}

## Key features

${project.features.map((f) => `- ${f}`).join('\n')}

## Documentation

${docs}

## Contact

- GitHub: ${project.github}
- Site: ${projectUrl}/

## Machine-Readable Endpoints

- Site: ${projectUrl}/
`

  const outDir = join(import.meta.dirname, '..', 'public', project.slug)
  mkdirSync(outDir, { recursive: true })
  writeFileSync(join(outDir, 'llms.txt'), llmsTxt)
  console.log(`Generated ${project.slug}/llms.txt`)
}
