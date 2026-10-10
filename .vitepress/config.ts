import { defineConfig } from 'vitepress'
import * as lucide from 'lucide-static'
import { projects } from './projects'

// Home features write `icon: lucide:<name>`; the default theme renders a string icon as HTML.
function lucideIcon(icon: unknown): unknown {
  if (typeof icon !== 'string' || !icon.startsWith('lucide:')) return icon
  const name = icon.slice('lucide:'.length)
  const exportName = name.replace(/(^|-)([a-z0-9])/g, (_, __, c: string) => c.toUpperCase())
  const svg = (lucide as Record<string, string>)[exportName]
  if (!svg) throw new Error(`Unknown Lucide icon "${name}"`)
  return svg.replace(/\s*\n\s*/g, ' ').replace('stroke-width="2"', 'stroke-width="1.75"')
}

const projectSidebars = {
  '/canvas-cli/': [
    {
      text: 'Guide',
      items: [
        { text: 'Overview', link: '/canvas-cli/' },
        { text: 'Authentication', link: '/canvas-cli/docs/auth' },
        { text: 'Command Reference', link: '/canvas-cli/docs/command-spec' },
        { text: 'JSON Contract', link: '/canvas-cli/docs/json-contract' },
        { text: 'Safety Model', link: '/canvas-cli/docs/safety-model' },
      ],
    },
    {
      text: 'Reference',
      items: [
        { text: 'Commands (COMMANDS.md)', link: '/canvas-cli/COMMANDS' },
        { text: 'API Surface', link: '/canvas-cli/docs/api-surface' },
        { text: 'Raw API', link: '/canvas-cli/docs/raw-api' },
        { text: 'File Upload/Download', link: '/canvas-cli/docs/file-upload-download' },
        { text: 'Pagination & Rate Limits', link: '/canvas-cli/docs/pagination-rate-limits' },
        { text: 'Audit Log', link: '/canvas-cli/docs/audit-log' },
        { text: 'Export Context', link: '/canvas-cli/docs/export-context-spec' },
      ],
    },
    {
      text: 'Workflows',
      items: [
        { text: 'Student Workflows', link: '/canvas-cli/docs/student-workflows' },
        { text: 'Teaching Team Workflows', link: '/canvas-cli/docs/teaching-team-workflows' },
      ],
    },
    {
      text: 'Architecture',
      items: [
        { text: 'Architecture', link: '/canvas-cli/docs/architecture' },
        { text: 'Architecture Plan', link: '/canvas-cli/docs/architecture-plan' },
        { text: 'Product Brief', link: '/canvas-cli/docs/product-brief' },
      ],
    },
    {
      text: 'Agents',
      collapsed: true,
      items: [
        { text: 'Domain', link: '/canvas-cli/docs/agents/domain' },
        { text: 'Issue Tracker', link: '/canvas-cli/docs/agents/issue-tracker' },
        { text: 'Triage Labels', link: '/canvas-cli/docs/agents/triage-labels' },
      ],
    },
  ],

  '/zenodo-cli/': [
    {
      text: 'Guide',
      items: [
        { text: 'Overview', link: '/zenodo-cli/' },
        { text: 'Authentication', link: '/zenodo-cli/docs/auth' },
        { text: 'Capabilities', link: '/zenodo-cli/docs/capabilities' },
        { text: 'Safety', link: '/zenodo-cli/docs/safety' },
        { text: 'Agent Guide', link: '/zenodo-cli/docs/agent-guide' },
      ],
    },
    {
      text: 'Architecture',
      items: [
        { text: 'Architecture', link: '/zenodo-cli/docs/ARCHITECTURE' },
      ],
    },
    {
      text: 'Agents',
      collapsed: true,
      items: [
        { text: 'Domain', link: '/zenodo-cli/docs/agents/domain' },
        { text: 'Issue Tracker', link: '/zenodo-cli/docs/agents/issue-tracker' },
        { text: 'Triage Labels', link: '/zenodo-cli/docs/agents/triage-labels' },
      ],
    },
  ],

  '/monarchmoney-cli/': [
    {
      text: 'Guide',
      items: [
        { text: 'Overview', link: '/monarchmoney-cli/' },
        { text: 'Capabilities', link: '/monarchmoney-cli/docs/capabilities' },
        { text: 'Authentication', link: '/monarchmoney-cli/docs/auth' },
        { text: 'Safety Model', link: '/monarchmoney-cli/docs/safety' },
        { text: 'Agent Guide', link: '/monarchmoney-cli/docs/agent-guide' },
        { text: 'JSON Schema', link: '/monarchmoney-cli/docs/json-schema' },
      ],
    },
    {
      text: 'Reference',
      items: [
        { text: 'Commands (COMMANDS.md)', link: '/monarchmoney-cli/COMMANDS' },
        { text: 'JSON Schema (JSON_SCHEMA.md)', link: '/monarchmoney-cli/JSON_SCHEMA' },
      ],
    },
    {
      text: 'Agents',
      collapsed: true,
      items: [
        { text: 'Doc Sync', link: '/monarchmoney-cli/docs/agents/doc-sync' },
        { text: 'Domain', link: '/monarchmoney-cli/docs/agents/domain' },
        { text: 'Issue Tracker', link: '/monarchmoney-cli/docs/agents/issue-tracker' },
        { text: 'Triage Labels', link: '/monarchmoney-cli/docs/agents/triage-labels' },
      ],
    },
  ],

  '/flickr-cli/': [
    {
      text: 'Guide',
      items: [
        { text: 'Overview', link: '/flickr-cli/' },
        { text: 'Authentication', link: '/flickr-cli/docs/auth' },
        { text: 'Capabilities', link: '/flickr-cli/docs/capabilities' },
        { text: 'Upload', link: '/flickr-cli/docs/upload' },
        { text: 'Backup', link: '/flickr-cli/docs/backup' },
        { text: 'Safety', link: '/flickr-cli/docs/safety' },
        { text: 'Agent Guide', link: '/flickr-cli/docs/agent-guide' },
        { text: 'Piwigo Import', link: '/flickr-cli/docs/piwigo' },
      ],
    },
    {
      text: 'Reference',
      items: [
        { text: 'Commands (COMMANDS.md)', link: '/flickr-cli/COMMANDS' },
        { text: 'JSON Schema (JSON_SCHEMA.md)', link: '/flickr-cli/JSON_SCHEMA' },
      ],
    },
    {
      text: 'Architecture',
      items: [
        { text: 'Architecture', link: '/flickr-cli/docs/ARCHITECTURE' },
        { text: 'ADR-0001: Own Flickr Client', link: '/flickr-cli/docs/adr/0001-own-flickr-client' },
        { text: 'ADR-0002: Piwigo Migration', link: '/flickr-cli/docs/adr/0002-piwigo-migration' },
      ],
    },
    {
      text: 'Agents',
      collapsed: true,
      items: [
        { text: 'Domain', link: '/flickr-cli/docs/agents/domain' },
        { text: 'Issue Tracker', link: '/flickr-cli/docs/agents/issue-tracker' },
        { text: 'Triage Labels', link: '/flickr-cli/docs/agents/triage-labels' },
      ],
    },
  ],

  '/money/': [
    {
      text: 'Guide',
      items: [
        { text: 'Overview', link: '/money/' },
        { text: 'Getting Started', link: '/money/docs/GETTING_STARTED' },
        { text: 'Configuration', link: '/money/docs/CONFIG' },
        { text: 'Contracts', link: '/money/docs/CONTRACTS' },
      ],
    },
    {
      text: 'Reference',
      items: [
        { text: 'Architecture', link: '/money/docs/ARCHITECTURE' },
        { text: 'Database Schema', link: '/money/docs/SCHEMA' },
        { text: 'Vision', link: '/money/docs/VISION' },
        { text: 'PRD', link: '/money/docs/PRD' },
        { text: 'Roadmap', link: '/money/docs/ROADMAP' },
        { text: 'Donors', link: '/money/docs/DONORS' },
      ],
    },
    {
      text: 'ADR',
      collapsed: true,
      items: [
        { text: 'Encrypted SQLite Store', link: '/money/docs/adr/0001-encrypted-sqlite-store' },
      ],
    },
    {
      text: 'Plans',
      collapsed: true,
      items: [
        { text: 'Plaid Dashboard Login', link: '/money/docs/plans/2026-05-13-plaid-dashboard-login' },
        { text: 'Plaid Link Hardening', link: '/money/docs/plans/2026-05-13-plaid-link-hardening' },
        { text: 'Plaid Sandbox Link', link: '/money/docs/plans/2026-05-13-plaid-sandbox-link' },
      ],
    },
    {
      text: 'Agents',
      collapsed: true,
      items: [
        { text: 'Domain', link: '/money/docs/agents/domain' },
        { text: 'Issue Tracker', link: '/money/docs/agents/issue-tracker' },
        { text: 'Triage Labels', link: '/money/docs/agents/triage-labels' },
      ],
    },
  ],

  '/qualtrics-cli/': [
    {
      text: 'Guide',
      items: [
        { text: 'Overview', link: '/qualtrics-cli/' },
        { text: 'QSF Spec', link: '/qualtrics-cli/docs/qsf-spec' },
      ],
    },
    {
      text: 'Reference',
      items: [
        { text: 'Commands (COMMANDS.md)', link: '/qualtrics-cli/COMMANDS' },
        { text: 'JSON Schema (JSON_SCHEMA.md)', link: '/qualtrics-cli/JSON_SCHEMA' },
        { text: 'Context (CONTEXT.md)', link: '/qualtrics-cli/CONTEXT' },
      ],
    },
    {
      text: 'Architecture & ADR',
      collapsed: true,
      items: [
        { text: 'ADR-0001: Architecture Boundaries', link: '/qualtrics-cli/docs/adr/0001-architecture-boundaries' },
        { text: 'ADR-0002: Transport Layer & Retries', link: '/qualtrics-cli/docs/adr/0002-transport-layer-and-retries' },
        { text: 'ADR-0003: Safety Model & Permissions', link: '/qualtrics-cli/docs/adr/0003-safety-model-and-permissions' },
        { text: 'ADR-0004: Pagination Abstraction', link: '/qualtrics-cli/docs/adr/0004-pagination-abstraction' },
        { text: 'ADR-0005: Async Response Jobs', link: '/qualtrics-cli/docs/adr/0005-async-response-jobs' },
        { text: 'ADR-0006: Survey Builder DSL & Compiler', link: '/qualtrics-cli/docs/adr/0006-survey-builder-dsl-and-compiler' },
      ],
    },
  ],
}

const siteUrl = 'https://thedavidweng.github.io/site'

export default defineConfig({
  title: 'Hajware',
  description: 'Hajware is David Weng\'s software label: agent-friendly CLI tools, desktop apps, and a personal finance backend.',
  base: '/site/',
  srcExclude: ['**/README.md', 'PRODUCT.md', 'DESIGN.md', '.impeccable/**'],
  ignoreDeadLinks: true,

  head: [
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'Hajware' }],
    ['meta', { property: 'og:description', content: 'Agent-friendly CLI tools, desktop apps, and a personal finance backend.' }],
    ['meta', { property: 'og:url', content: siteUrl }],
    ['meta', { property: 'og:site_name', content: 'Hajware' }],
    ['meta', { name: 'twitter:card', content: 'summary' }],
    ['meta', { name: 'twitter:title', content: 'Hajware' }],
    ['meta', { name: 'twitter:description', content: 'Agent-friendly CLI tools, desktop apps, and a personal finance backend.' }],
    ['link', { rel: 'sitemap', type: 'application/xml', href: `${siteUrl}/sitemap.xml` }],
    ['link', { rel: 'alternate', type: 'text/plain', href: `${siteUrl}/llms.txt`, title: 'LLMs.txt' }],
    ['script', { type: 'application/ld+json' }, JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Hajware',
      alternateName: 'Hajware by David Weng',
      url: siteUrl,
      description: 'Hajware is David Weng\'s software label: agent-friendly CLI tools, desktop apps, and a personal finance backend.',
      inLanguage: 'en',
      author: {
        '@type': 'Person',
        name: 'David Weng',
        url: 'https://github.com/thedavidweng',
        sameAs: ['https://github.com/thedavidweng'],
      },
    })],
  ],

  transformPageData(pageData) {
    const rel = pageData.relativePath

    if (Array.isArray(pageData.frontmatter.features)) {
      for (const feature of pageData.frontmatter.features) feature.icon = lucideIcon(feature.icon)
    }
    const isMoney = rel === 'money/index.md' || rel.startsWith('money/')

    if (isMoney) {
      const existing = pageData.frontmatter.pageClass ?? ''
      pageData.frontmatter.pageClass = `${existing} money-zone`.trim()

      pageData.frontmatter.head ??= []
      pageData.frontmatter.head.push([
        'link',
        { rel: 'icon', type: 'image/png', href: '/site/money-favicon.png' },
      ])
    }

    const project = projects.find((item) => {
      return rel === `${item.slug}/index.md` || rel.startsWith(`${item.slug}/`)
    })

    // Per-project favicon (skip money — already handled above, skip external projects)
    if (project && !isMoney && !project.external) {
      pageData.frontmatter.head ??= []
      pageData.frontmatter.head.push([
        'link',
        { rel: 'icon', type: 'image/png', href: `/site/${project.slug}-favicon.png` },
      ])
    }

    // Everything outside a project (the hub, 404) carries the Hajware mark.
    if (!project && !isMoney) {
      pageData.frontmatter.head ??= []
      pageData.frontmatter.head.push(['link', { rel: 'icon', type: 'image/svg+xml', href: '/site/hajware.svg' }])
    }

    if (rel === 'money/index.md') {
      pageData.title = 'money'
    } else if (project && !pageData.frontmatter.title && rel !== 'index.md') {
      pageData.title = project.title
    }
  },

  themeConfig: {
    // The title text is rendered per project by the nav-bar-title-after slot in Layout.vue.
    siteTitle: false,

    nav: [
      { component: 'ProjectGuideLink' },
      {
        text: 'Apps',
        items: projects.map((project) => ({
          text: project.name,
          link: project.overview,
          ...(project.external ? {} : { activeMatch: `^/${project.slug}/` }),
        })),
      },
    ],

    sidebar: projectSidebars,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/thedavidweng' },
    ],

    footer: {
      message: 'Built with VitePress',
      copyright: '© 2025–2026 David Weng. Published as Hajware.',
    },

    editLink: {
      pattern: 'https://github.com/thedavidweng/site/edit/main/:path',
      text: 'Edit this page on GitHub',
    },
  },
})
