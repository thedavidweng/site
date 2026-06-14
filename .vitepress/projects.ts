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
}

export const projects: Project[] = [
  {
    slug: 'canvas-cli',
    name: 'canvas-cli',
    title: 'Canvas LMS CLI',
    tagline: 'Canvas LMS',
    description: '50+ commands for courses, assignments, submissions, grading, and more.',
    icon: '🎓',
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
    iconSrc: 'money/Golden-Toad-logo.webp',
    docsEntry: '/money/docs/GETTING_STARTED',
    overview: '/money/',
    github: 'https://github.com/thedavidweng/money',
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
    if (route === project.overview || route === project.overview.replace(/\/$/, '')) return true
    return route.startsWith(`/${project.slug}/`)
  }) ?? null
}

export function isHubPath(path: string, base = '/site/'): boolean {
  const route = stripBase(path, base)
  return route === '/' || route === ''
}
