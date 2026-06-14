#!/usr/bin/env node
/**
 * Sync documentation from CLI repos into the VitePress site.
 * Usage: node scripts/sync-docs.mjs [--source /path/to/cli-docs-sync]
 */

import { cpSync, existsSync, mkdirSync, readdirSync, readFileSync, rmSync, statSync, writeFileSync } from 'node:fs'
import { basename, dirname, join, relative, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const siteRoot = resolve(__dirname, '..')
const defaultSource = '/tmp/cli-docs-sync'

const PROJECTS = {
  'canvas-cli': {
    repo: 'canvas-cli',
    rootFiles: ['COMMANDS.md', 'JSON_SCHEMA.md'],
  },
  'zenodo-cli': {
    repo: 'zenodo-cli',
    rootFiles: [],
  },
  'monarchmoney-cli': {
    repo: 'monarchmoney-cli',
    rootFiles: ['COMMANDS.md', 'JSON_SCHEMA.md'],
  },
  'flickr-cli': {
    repo: 'flickr-cli',
    rootFiles: ['COMMANDS.md', 'JSON_SCHEMA.md'],
  },
  money: {
    repo: 'money',
    rootFiles: [],
  },
}

const sourceArg = process.argv.find((arg) => arg.startsWith('--source='))
const sourceRoot = sourceArg ? sourceArg.split('=')[1] : defaultSource

function collectMarkdownFiles(dir) {
  const files = []
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry)
    if (statSync(full).isDirectory()) {
      files.push(...collectMarkdownFiles(full))
    } else if (entry.endsWith('.md')) {
      files.push(full)
    }
  }
  return files
}

function toSitePath(projectSlug, repoRelativePath) {
  const normalized = repoRelativePath.replace(/\\/g, '/')
  const withoutExt = normalized.replace(/\.md$/i, '')
  return `/${projectSlug}/${withoutExt}`
}

function rewriteMarkdownLinks(content, projectSlug, currentRepoPath) {
  return content.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (match, text, rawUrl) => {
    if (rawUrl.startsWith('http://') || rawUrl.startsWith('https://') || rawUrl.startsWith('mailto:')) {
      return match
    }
    if (rawUrl.startsWith('#')) {
      return match
    }

    const [pathPart, hash = ''] = rawUrl.split('#')
    if (!pathPart || pathPart.startsWith('/')) {
      return match
    }

    const currentDir = dirname(currentRepoPath)
    const resolved = resolve(currentDir, pathPart)
    const repoRoot = resolve(sourceRoot, PROJECTS[projectSlug].repo)
    const rel = relative(repoRoot, resolved).replace(/\\/g, '/')

    if (rel.startsWith('..') || rel.includes('/../')) {
      const github = `https://github.com/thedavidweng/${PROJECTS[projectSlug].repo}/blob/main/${pathPart.replace(/^\.\//, '')}`
      return `[${text}](${github}${hash ? `#${hash}` : ''})`
    }

    if (!rel.toLowerCase().endsWith('.md')) {
      const github = `https://github.com/thedavidweng/${PROJECTS[projectSlug].repo}/blob/main/${rel}`
      return `[${text}](${github}${hash ? `#${hash}` : ''})`
    }

    const sitePath = toSitePath(projectSlug, rel)
    return `[${text}](${sitePath}${hash ? `#${hash}` : ''})`
  })
}

function syncProject(projectSlug, { repo, rootFiles }) {
  const repoPath = join(sourceRoot, repo)
  const destPath = join(siteRoot, projectSlug)

  if (!existsSync(repoPath)) {
    throw new Error(`Missing repo at ${repoPath}. Clone repos first.`)
  }

  const docsSrc = join(repoPath, 'docs')
  const docsDest = join(destPath, 'docs')

  if (existsSync(docsDest)) {
    rmSync(docsDest, { recursive: true })
  }
  cpSync(docsSrc, docsDest, { recursive: true })

  for (const file of rootFiles) {
    const src = join(repoPath, file)
    if (existsSync(src)) {
      cpSync(src, join(destPath, file))
    }
  }

  const markdownFiles = [
    ...collectMarkdownFiles(docsDest),
    ...rootFiles.map((file) => join(destPath, file)).filter(existsSync),
  ]

  for (const file of markdownFiles) {
    const relFromProject = relative(destPath, file).replace(/\\/g, '/')
    const currentRepoPath = join(repoPath, relFromProject)
    const original = readFileSync(file, 'utf8')
    const rewritten = rewriteMarkdownLinks(original, projectSlug, currentRepoPath)
    writeFileSync(file, rewritten)
  }

  console.log(`Synced ${projectSlug}: ${markdownFiles.length} markdown files`)
}

mkdirSync(join(siteRoot, 'scripts'), { recursive: true })

for (const [slug, config] of Object.entries(PROJECTS)) {
  syncProject(slug, config)
}

console.log('Documentation sync complete.')
