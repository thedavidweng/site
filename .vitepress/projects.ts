export type ProjectKind = 'cli' | 'desktop' | 'plugin' | 'extension'

export interface Project {
  slug: string
  name: string
  title: string
  tagline: string
  description: string
  /** A project can be both, e.g. a CLI that also ships a desktop app. */
  kinds: ProjectKind[]
  iconSrc: string
  docsEntry: string
  overview: string
  /** Standalone landing page, when the overview is the docs on this site. */
  website?: string
  github: string
  platforms: string
  /** Homebrew install command; casks live in thedavidweng/homebrew-tap. */
  install?: string
  /** App screenshot under public/, shown on the hub. */
  screenshot?: { src: string; width: number; height: number }
  /** When true, overview is an external landing page, not part of the site repo. */
  external?: boolean
  /**
   * Accent for the project's pages, taken from its icon or brand kit. `light` and `dark` must
   * pass 4.5:1 as text on the page background and behind white button text. `glow` is decorative.
   */
  accent?: { light: string; dark: string; glow: [string, string] }
}

const cliPlatforms = 'macOS, Linux, Windows'

export const projects: Project[] = [
  {
    slug: 'openkara',
    name: 'OpenKara',
    title: 'OpenKara',
    tagline: 'Karaoke',
    description: 'Turn your music library into a karaoke stage. On-device stem separation, synced lyrics, and live mixing.',
    kinds: ['desktop'],
    iconSrc: 'openkara-icon.webp',
    docsEntry: 'https://github.com/thedavidweng/OpenKara#readme',
    overview: 'https://openkara.blahaj.uk/',
    github: 'https://github.com/thedavidweng/OpenKara',
    platforms: 'macOS, Windows, Linux',
    install: 'brew install --cask thedavidweng/tap/openkara',
    screenshot: { src: 'hub/openkara.webp', width: 1368, height: 770 },
    external: true,
  },
  {
    slug: 'sukiru',
    name: 'Sukiru',
    title: 'Sukiru',
    tagline: 'Skill libraries',
    description: 'Checks and repairs your coding agents\' skill libraries through npx skills and gh skill.',
    kinds: ['desktop'],
    iconSrc: 'sukiru-icon.webp',
    docsEntry: 'https://github.com/thedavidweng/sukiru#readme',
    overview: 'https://sukiru.blahaj.uk/',
    github: 'https://github.com/thedavidweng/sukiru',
    platforms: 'macOS 14+, Apple silicon',
    install: 'brew install --cask thedavidweng/tap/sukiru',
    screenshot: { src: 'hub/sukiru.webp', width: 1600, height: 1061 },
    external: true,
  },
  {
    slug: 'apple-say',
    name: 'Apple Say',
    title: 'Apple Say',
    tagline: 'Speech synthesis',
    description: 'Speech synthesis and timed text. Preview and export Plain Text, LRC, and Enhanced LRC with system voices.',
    kinds: ['desktop'],
    iconSrc: 'apple-say-icon.webp',
    docsEntry: 'https://github.com/thedavidweng/apple-say#readme',
    overview: 'https://apple-say.blahaj.uk/',
    github: 'https://github.com/thedavidweng/apple-say',
    platforms: 'macOS 14+',
    install: 'brew install --cask thedavidweng/tap/apple-say',
    screenshot: { src: 'hub/apple-say.webp', width: 1600, height: 1155 },
    external: true,
  },
  {
    slug: 'sdf-flash-gui',
    name: 'SDF Flash GUI',
    title: 'SDF Flash GUI',
    tagline: 'Drive firmware',
    description: 'Dump, flash, and recover MT1959 Blu-ray drive firmware, behind safety gates that refuse the mistakes that brick drives.',
    kinds: ['desktop'],
    iconSrc: 'sdf-flash-gui-icon.webp',
    docsEntry: 'https://github.com/thedavidweng/sdf-flash-gui#readme',
    overview: 'https://sdf-flash-gui.blahaj.uk/',
    github: 'https://github.com/thedavidweng/sdf-flash-gui',
    platforms: 'macOS, Windows, Linux',
    install: 'brew install --cask thedavidweng/tap/sdf-flash-gui',
    screenshot: { src: 'hub/sdf-flash-gui.webp', width: 1040, height: 1588 },
    external: true,
  },
  {
    slug: 'tg-drive',
    name: 'tg-drive',
    title: 'Telegram Drive',
    tagline: 'Telegram Drive',
    description: 'Turn a Telegram channel into a recoverable file tree. The desktop app browses the drive; td is the command-line interface for the same engine.',
    kinds: ['desktop'],
    iconSrc: 'tg-drive-icon.webp',
    docsEntry: 'https://github.com/thedavidweng/tg-drive/blob/main/docs/guides/getting-started.md',
    overview: 'https://tg-drive.blahaj.uk/',
    github: 'https://github.com/thedavidweng/tg-drive',
    external: true,
    platforms: 'macOS, Windows, Linux',
    install: 'brew install --cask thedavidweng/tap/tg-drive',
    screenshot: { src: 'hub/tg-drive.webp', width: 1600, height: 1122 },
    accent: { light: '#1f4fe0', dark: '#8fb0ff', glow: ['#2352e8', '#2aabee'] },
  },
  {
    slug: 'vapourfly',
    name: 'Vapourfly',
    title: 'Vapourfly',
    tagline: 'Steam library',
    description: 'Organize a Steam library into playlists, with recommendations and junk cleanup. vapourfly is the command-line interface for the same app.',
    kinds: ['desktop'],
    iconSrc: 'vapourfly-icon.webp',
    docsEntry: 'https://github.com/thedavidweng/vapourfly/blob/main/docs/tutorials/getting-started.md',
    overview: 'https://vapourfly.blahaj.uk/',
    github: 'https://github.com/thedavidweng/vapourfly',
    platforms: 'macOS, Windows, Linux',
    install: 'brew install --cask thedavidweng/tap/vapourfly',
    screenshot: { src: 'hub/vapourfly.webp', width: 1440, height: 921 },
    external: true,
  },
  {
    slug: 'canvas-cli',
    name: 'canvas-cli',
    title: 'Canvas LMS CLI',
    tagline: 'Canvas LMS',
    description: '50+ commands for courses, assignments, submissions, grading, and more.',
    kinds: ['cli'],
    iconSrc: 'canvas-cli-icon.webp',
    docsEntry: '/canvas-cli/docs/auth',
    overview: '/canvas-cli/',
    github: 'https://github.com/thedavidweng/canvas-cli',
    platforms: cliPlatforms,
    install: 'brew install --cask thedavidweng/tap/canvas',
    accent: { light: '#c13a22', dark: '#ff8f78', glow: ['#d64129', '#f29a6b'] },
  },
  {
    slug: 'zenodo-cli',
    name: 'zenodo-cli',
    title: 'Zenodo/InvenioRDM CLI',
    tagline: 'Zenodo',
    description: 'Record management, file upload, and full InvenioRDM API access.',
    kinds: ['cli'],
    iconSrc: 'zenodo-cli-icon.webp',
    docsEntry: '/zenodo-cli/docs/auth',
    overview: '/zenodo-cli/',
    github: 'https://github.com/thedavidweng/zenodo-cli',
    platforms: cliPlatforms,
    install: 'brew install --cask thedavidweng/tap/zenodo',
    accent: { light: '#0b5cb8', dark: '#5cc0ff', glow: ['#0047a8', '#2bbcff'] },
  },
  {
    slug: 'monarchmoney-cli',
    name: 'monarchmoney-cli',
    title: 'Monarch Money CLI',
    tagline: 'Monarch Money',
    description: 'Accounts, transactions, budgets, and cashflow from your terminal.',
    kinds: ['cli'],
    iconSrc: 'monarchmoney-cli-icon.webp',
    docsEntry: '/monarchmoney-cli/docs/auth',
    overview: '/monarchmoney-cli/',
    github: 'https://github.com/thedavidweng/monarchmoney-cli',
    platforms: cliPlatforms,
    install: 'brew install --cask thedavidweng/tap/monarchmoney-cli',
    accent: { light: '#b84a07', dark: '#ff9a5c', glow: ['#ff692d', '#ffb36b'] },
  },
  {
    slug: 'flickr-cli',
    name: 'flickr-cli',
    title: 'Flickr CLI',
    tagline: 'Flickr',
    description: 'Photo management, backup, upload, albums, and full API access.',
    kinds: ['cli'],
    iconSrc: 'flickr-cli-icon.webp',
    docsEntry: '/flickr-cli/docs/auth',
    overview: '/flickr-cli/',
    github: 'https://github.com/thedavidweng/flickr-cli',
    platforms: cliPlatforms,
    install: 'brew install --cask thedavidweng/tap/flickr',
    accent: { light: '#cc0069', dark: '#ff6cb4', glow: ['#2856ce', '#fc0a87'] },
  },
  {
    slug: 'money',
    name: 'money',
    title: 'Personal Finance Backend',
    tagline: 'Finance backend',
    description: 'Local-first backend with encrypted SQLite, multi-provider sync, and agent-friendly JSON.',
    kinds: ['cli'],
    iconSrc: 'money-icon.webp',
    docsEntry: '/money/docs/GETTING_STARTED',
    overview: '/money/',
    github: 'https://github.com/thedavidweng/money',
    platforms: cliPlatforms,
    install: 'brew install --cask thedavidweng/tap/money',
  },
  {
    slug: 'qualtrics-cli',
    name: 'qualtrics-cli',
    title: 'Qualtrics CLI',
    tagline: 'Qualtrics',
    description: 'Agent-friendly CLI for the Qualtrics XM Platform & offline survey compiler.',
    kinds: ['cli'],
    iconSrc: 'qualtrics-cli-icon.webp',
    docsEntry: '/qualtrics-cli/docs/qsf-spec',
    overview: '/qualtrics-cli/',
    github: 'https://github.com/thedavidweng/qualtrics-cli',
    platforms: cliPlatforms,
    install: 'brew install --cask thedavidweng/tap/qualtrics',
    accent: { light: '#4b3be0', dark: '#a59cff', glow: ['#07a8ed', '#5826e6'] },
  },
  {
    slug: 'deckpad',
    name: 'DeckPad',
    title: 'DeckPad',
    tagline: 'Steam Deck',
    description: 'Use your Steam Deck as a Bluetooth controller for a PC, phone, or tablet.',
    kinds: ['plugin'],
    iconSrc: 'deckpad-icon.webp',
    docsEntry: 'https://github.com/thedavidweng/DeckPad#readme',
    overview: 'https://deckpad.blahaj.uk/',
    github: 'https://github.com/thedavidweng/DeckPad',
    platforms: 'SteamOS',
    screenshot: { src: 'hub/deckpad.webp', width: 1600, height: 831 },
    external: true,
  },
  {
    slug: 'adp-shifts',
    name: 'ADP Shifts',
    title: 'ADP Shifts',
    tagline: 'Work schedule',
    description: 'Copies your ADP Workforce Now schedule into a Google Calendar it owns, and keeps that calendar current.',
    kinds: ['extension'],
    iconSrc: 'adp-shifts-icon.webp',
    docsEntry: 'https://github.com/thedavidweng/adp-calendar#readme',
    overview: 'https://adp-shifts.blahaj.uk/',
    github: 'https://github.com/thedavidweng/adp-calendar',
    platforms: 'Chrome, Edge, Brave',
    screenshot: { src: 'hub/adp-shifts.webp', width: 1280, height: 800 },
    external: true,
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
