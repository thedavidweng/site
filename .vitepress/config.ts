import { defineConfig } from 'vitepress'
import { projects } from './projects'

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
}

export default defineConfig({
  title: 'CLI Tools',
  description: 'Agent-friendly CLI tools for modern workflows',
  base: '/site/',
  srcExclude: ['**/README.md'],

  transformPageData(pageData) {
    const rel = pageData.relativePath
    const isMoney = rel === 'money/index.md' || rel.startsWith('money/')

    if (isMoney) {
      const existing = pageData.frontmatter.pageClass ?? ''
      pageData.frontmatter.pageClass = `${existing} money-zone`.trim()
    }

    const project = projects.find((item) => {
      return rel === `${item.slug}/index.md` || rel.startsWith(`${item.slug}/`)
    })

    if (rel === 'money/index.md') {
      pageData.title = 'money'
    } else if (project && !pageData.frontmatter.title && rel !== 'index.md') {
      pageData.title = project.title
    }
  },

  themeConfig: {
    nav: [{ component: 'ProjectNavMenu' }],

    sidebar: projectSidebars,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/thedavidweng' },
    ],

    footer: {
      message: 'Built with VitePress',
      copyright: '© 2025 David Weng',
    },

    editLink: {
      pattern: 'https://github.com/thedavidweng/site/edit/main/:path',
      text: 'Edit this page on GitHub',
    },
  },
})
