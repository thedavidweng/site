export interface Project {
  slug: string
  name: string
  title: string
  tagline: string
  description: string
  icon: string
  iconSrc?: string
  docsEntry: string
  overview: string
  github: string
  /** When true, overview and docsEntry are external URLs — not part of the site repo. */
  external?: boolean
}

export interface Category {
  id: string
  label: string
  description: string
  projects: Project[]
  principles?: string[]
}

export const projects: Project[] = [
  {
    slug: 'canvas-cli',
    name: 'canvas-cli',
    title: 'Canvas LMS CLI',
    tagline: 'Canvas LMS',
    description: '50+ commands for courses, assignments, submissions, grading, and more.',
    icon: '🎓',
    iconSrc: 'canvas-cli-icon.webp',
    docsEntry: '/canvas-cli/docs/auth',
    overview: '/canvas-cli/',
    github: 'https://github.com/thedavidweng/canvas-cli',
  },
  {
    slug: 'zenodo-cli',
    name: 'zenodo-cli',
    title: 'Zenodo/InvenioRDM CLI',
    tagline: 'Zenodo',
    description: 'Record management, file upload, and full InvenioRDM API access.',
    icon: '🔬',
    iconSrc: 'zenodo-cli-icon.webp',
    docsEntry: '/zenodo-cli/docs/auth',
    overview: '/zenodo-cli/',
    github: 'https://github.com/thedavidweng/zenodo-cli',
  },
  {
    slug: 'monarchmoney-cli',
    name: 'monarchmoney-cli',
    title: 'Monarch Money CLI',
    tagline: 'Monarch Money',
    description: 'Accounts, transactions, budgets, and cashflow from your terminal.',
    icon: '💰',
    iconSrc: 'monarchmoney-cli-icon.webp',
    docsEntry: '/monarchmoney-cli/docs/auth',
    overview: '/monarchmoney-cli/',
    github: 'https://github.com/thedavidweng/monarchmoney-cli',
  },
  {
    slug: 'flickr-cli',
    name: 'flickr-cli',
    title: 'Flickr CLI',
    tagline: 'Flickr',
    description: 'Photo management, backup, upload, albums, and full API access.',
    icon: '📷',
    iconSrc: 'flickr-cli-icon.webp',
    docsEntry: '/flickr-cli/docs/auth',
    overview: '/flickr-cli/',
    github: 'https://github.com/thedavidweng/flickr-cli',
  },
  {
    slug: 'money',
    name: 'money',
    title: 'Personal Finance Backend',
    tagline: 'money',
    description: 'Local-first backend with encrypted SQLite, multi-provider sync, and agent-friendly JSON.',
    icon: '🏦',
    iconSrc: 'money-icon.webp',
    docsEntry: '/money/docs/GETTING_STARTED',
    overview: '/money/',
    github: 'https://github.com/thedavidweng/money',
  },
  {
    slug: 'openkara',
    name: 'OpenKara',
    title: 'OpenKara',
    tagline: 'Karaoke',
    description: 'Turn your music library into a karaoke stage. AI stem separation, lyrics sync, cross-platform desktop app.',
    icon: '🎤',
    iconSrc: 'openkara-icon.webp',
    docsEntry: 'https://openkara.103279.xyz/',
    overview: 'https://openkara.103279.xyz/',
    github: 'https://github.com/thedavidweng/OpenKara',
    external: true,
  },
]

export const categories: Category[] = [
  {
    id: 'cli',
    label: 'CLI Tools',
    description: 'Agent-friendly command-line tools — stable JSON output, safety gates, single binaries.',
    projects: projects.filter((p) => !p.external),
    principles: [
      '<strong>Agent-friendly</strong> — stable JSON output, predictable exit codes, distinct stdout/stderr',
      '<strong>Safety first</strong> — <code>--read-only</code>, <code>--dry-run</code>, <code>--confirm</code> gates on mutations',
      '<strong>Single binary</strong> — no runtime, no containers, no dependencies',
      '<strong>Cross-platform</strong> — Linux, macOS, Windows (amd64/arm64)',
      '<strong>Homebrew distribution</strong> — <code>brew install --cask thedavidweng/tap/&lt;tool&gt;</code>',
    ],
  },
  {
    id: 'desktop',
    label: 'Desktop Apps',
    description: 'Cross-platform desktop applications built with Tauri.',
    projects: projects.filter((p) => p.external),
  },
]

export function stripBase(path: string, base = '/site/'): string {
  const normalizedBase = base.endsWith('/') ? base.slice(0, -1) : base
  if (path === normalizedBase || path === `${normalizedBase}/`) return '/'
  if (path.startsWith(`${normalizedBase}/`)) return path.slice(normalizedBase.length)
  return path
}

export function resolveProject(path: string, base = '/site/'): Project | null {
  const route = stripBase(path, base)
  return projects.find((project) => {
    if (project.external) return false
    if (route === project.overview || route === project.overview.replace(/\/$/, '')) return true
    return route.startsWith(`/${project.slug}/`)
  }) ?? null
}

export function isHubPath(path: string, base = '/site/'): boolean {
  const route = stripBase(path, base)
  return route === '/' || route === ''
}
