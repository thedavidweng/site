<script setup lang="ts">
import { computed, ref } from 'vue'
import { useData, withBase } from 'vitepress'
import { VPButton, VPLink } from 'vitepress/theme-without-fonts'
import { projects, type Project, type ProjectKind } from '../projects'
import HubIcon from './components/HubIcon.vue'

const { site } = useData()

type Filter = 'all' | ProjectKind

const filters: { id: Filter; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'cli', label: 'CLI tools' },
  { id: 'desktop', label: 'Desktop apps' },
  { id: 'plugin', label: 'Plugins' },
  { id: 'extension', label: 'Extensions' },
]

const filter = ref<Filter>('all')

const counts = computed(() => ({
  all: projects.length,
  cli: projects.filter((p) => p.kinds.includes('cli')).length,
  desktop: projects.filter((p) => p.kinds.includes('desktop')).length,
  plugin: projects.filter((p) => p.kinds.includes('plugin')).length,
  extension: projects.filter((p) => p.kinds.includes('extension')).length,
}))

const visible = computed(() =>
  filter.value === 'all' ? projects : projects.filter((p) => p.kinds.includes(filter.value as ProjectKind)),
)

// Desktop-only apps lead; a CLI that also ships an app (tg-drive) follows them.
const desktopApps = projects
  .filter((p) => p.kinds.includes('desktop') && p.screenshot)
  .sort((a, b) => a.kinds.length - b.kinds.length)

const otherShots = projects.filter((p) => p.screenshot && !p.kinds.includes('cli') && !p.kinds.includes('desktop'))

const brewPrefix = 'brew install --cask '

function splitInstall(command: string) {
  return command.startsWith(brewPrefix)
    ? { prefix: brewPrefix, target: command.slice(brewPrefix.length) }
    : { prefix: '', target: command }
}

const copied = ref<string | null>(null)
const liveMessage = ref('')
let resetTimer: ReturnType<typeof setTimeout> | undefined

async function copyInstall(project: Project) {
  if (!project.install) return
  try {
    await navigator.clipboard.writeText(project.install)
    copied.value = project.slug
    liveMessage.value = `Copied install command for ${project.name}`
  } catch {
    liveMessage.value = 'Copy failed. Select the command and copy it manually.'
  }
  clearTimeout(resetTimer)
  resetTimer = setTimeout(() => {
    copied.value = null
  }, 1800)
}

function asset(src: string) {
  const base = site.value.base.endsWith('/') ? site.value.base : `${site.value.base}/`
  return `${base}${src.replace(/^\//, '')}`
}

const contract = [
  {
    term: 'Stable JSON',
    text: 'Versioned JSON on stdout, logs on stderr, and documented exit codes, so scripts and agents can parse every result.',
    code: '--json',
  },
  {
    term: 'Safety gates',
    text: 'Anything that changes data sits behind an explicit flag. Preview first, then confirm.',
    code: '--read-only  --dry-run  --confirm',
  },
  {
    term: 'Single binary',
    text: 'No runtime, no containers, no dependencies to install first.',
  },
  {
    term: 'Cross-platform',
    text: 'Linux, macOS, and Windows, on amd64 and arm64.',
  },
  {
    term: 'Homebrew',
    text: 'Every CLI installs from one tap.',
    code: 'brew tap thedavidweng/homebrew-tap',
  },
]
</script>

<template>
  <div class="Hub">
    <section class="hero">
      <div class="container">
        <h1 class="hero-title">Software for the terminal and the desktop.</h1>
        <p class="hero-lead">
          I'm David Weng. I build agent-friendly command-line tools that share one contract,
          native desktop apps for macOS, Windows, and Linux, a Steam Deck plugin, and a browser
          extension. All of it is open source.
        </p>
        <div class="hero-actions">
          <VPButton tag="a" size="big" theme="brand" text="Browse the index" href="#index" />
          <VPButton tag="a" size="big" theme="alt" text="GitHub" href="https://github.com/thedavidweng" />
        </div>
      </div>
    </section>

    <section id="index" class="index" aria-labelledby="index-title">
      <div class="container">
        <header class="index-head">
          <h2 id="index-title" class="index-title">Index</h2>
          <div class="filter" role="group" aria-label="Filter projects">
            <button
              v-for="f in filters"
              :key="f.id"
              type="button"
              class="filter-option"
              :aria-pressed="filter === f.id"
              @click="filter = f.id"
            >
              {{ f.label }}
              <span class="filter-count">{{ counts[f.id] }}</span>
            </button>
          </div>
        </header>

        <div class="index-columns" aria-hidden="true">
          <span class="col-project">Project</span>
          <span class="col-desc">What it does</span>
          <span class="col-get">Install</span>
        </div>

        <TransitionGroup tag="ul" name="row" class="rows">
          <li v-for="project in visible" :key="project.slug" class="row">
            <img
              class="row-icon"
              :src="asset(project.iconSrc)"
              alt=""
              width="40"
              height="40"
              loading="lazy"
            />
            <div class="row-who">
              <VPLink class="row-name" :href="project.overview" :no-icon="true">{{ project.name }}</VPLink>
              <span class="row-tagline">{{ project.tagline }}</span>
            </div>
            <p class="row-desc">
              {{ project.description }}
              <span class="row-platforms">{{ project.platforms }}</span>
            </p>
            <div class="row-get">
              <button
                v-if="project.install"
                type="button"
                class="cmd"
                :class="{ copied: copied === project.slug }"
                :title="project.install"
                :aria-label="`Copy install command for ${project.name}: ${project.install}`"
                @click="copyInstall(project)"
              >
                <code class="cmd-text">
                  <span class="cmd-prefix">{{ splitInstall(project.install).prefix }}</span>{{ splitInstall(project.install).target }}
                </code>
                <span class="cmd-icon">
                  <HubIcon :name="copied === project.slug ? 'check' : 'copy'" />
                </span>
              </button>
            </div>
            <div class="row-links">
              <VPLink class="row-docs" :href="project.docsEntry" :no-icon="true">Docs</VPLink>
              <VPLink
                class="row-github"
                :href="project.github"
                :no-icon="true"
                :aria-label="`${project.name} on GitHub`"
              >
                <HubIcon name="github" />
              </VPLink>
            </div>
          </li>
        </TransitionGroup>
        <p class="visually-hidden" aria-live="polite">{{ liveMessage }}</p>
      </div>
    </section>

    <section class="apps" aria-labelledby="apps-title">
      <div class="container">
        <div class="section-head">
          <h2 id="apps-title">Desktop apps</h2>
          <p>Native where it matters, cross-platform where it helps. Each app has its own site with downloads and a full tour.</p>
        </div>
        <div class="shots">
          <figure
            v-for="(app, i) in desktopApps"
            :key="app.slug"
            class="shot"
            :class="{ 'shot-wide': i === 0, 'shot-flat': app.slug === 'openkara' }"
          >
            <VPLink class="shot-stage" :href="app.website ?? app.overview" :no-icon="true" :aria-label="`${app.name} website`">
              <img
                class="shot-image"
                :src="asset(app.screenshot!.src)"
                :alt="`${app.name} app window`"
                :width="app.screenshot!.width"
                :height="app.screenshot!.height"
                loading="lazy"
                decoding="async"
              />
            </VPLink>
            <figcaption class="shot-caption">
              <img class="shot-icon" :src="asset(app.iconSrc)" alt="" width="28" height="28" loading="lazy" />
              <span class="shot-text">
                <span class="shot-name">{{ app.name }}</span>
                <span class="shot-desc">{{ app.description }}</span>
              </span>
              <VPLink class="shot-link" :href="app.website ?? app.overview" :no-icon="true">
                Visit site <HubIcon name="arrow-up-right" />
              </VPLink>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>

    <section v-if="otherShots.length" class="apps" aria-labelledby="other-shots-title">
      <div class="container">
        <div class="section-head">
          <h2 id="other-shots-title">Plugin and extension</h2>
          <p>A Steam Deck plugin and a browser extension. Each has its own site.</p>
        </div>
        <div class="shots">
          <figure v-for="app in otherShots" :key="app.slug" class="shot">
            <VPLink class="shot-stage" :href="app.website ?? app.overview" :no-icon="true" :aria-label="`${app.name} website`">
              <img
                class="shot-image"
                :src="asset(app.screenshot!.src)"
                :alt="app.name"
                :width="app.screenshot!.width"
                :height="app.screenshot!.height"
                loading="lazy"
                decoding="async"
              />
            </VPLink>
            <figcaption class="shot-caption">
              <img class="shot-icon" :src="asset(app.iconSrc)" alt="" width="28" height="28" loading="lazy" />
              <span class="shot-text">
                <span class="shot-name">{{ app.name }}</span>
                <span class="shot-desc">{{ app.description }}</span>
              </span>
              <VPLink class="shot-link" :href="app.website ?? app.overview" :no-icon="true">
                Visit site <HubIcon name="arrow-up-right" />
              </VPLink>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>

    <section class="contract" aria-labelledby="contract-title">
      <div class="container contract-grid">
        <div class="section-head contract-head">
          <h2 id="contract-title">One contract, every CLI</h2>
          <p>Learn one tool and you know how the rest behave. Scripts and agents get the same guarantees everywhere.</p>
        </div>
        <dl class="spec">
          <div v-for="item in contract" :key="item.term" class="spec-row">
            <dt class="spec-term">{{ item.term }}</dt>
            <dd class="spec-detail">
              <p>{{ item.text }}</p>
              <code v-if="item.code" class="spec-code">{{ item.code }}</code>
            </dd>
          </div>
        </dl>
      </div>
    </section>

    <section class="close">
      <div class="container close-inner">
        <div>
          <h2 class="close-title">Built in the open.</h2>
          <p class="close-text">
            Source, issues, and releases for every project live on GitHub. Agents can read the whole
            site from <a :href="withBase('/llms.txt')" target="_self">llms.txt</a> or
            <a :href="withBase('/llms-full.txt')" target="_self">llms-full.txt</a>.
          </p>
        </div>
        <div class="close-actions">
          <VPButton tag="a" size="big" theme="brand" text="GitHub" href="https://github.com/thedavidweng" />
          <VPButton
            tag="a"
            size="big"
            theme="alt"
            text="Homebrew tap"
            href="https://github.com/thedavidweng/homebrew-tap"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.Hub {
  --hub-gutter: 24px;
  padding-bottom: 32px;
}

.container {
  max-width: calc(1152px + var(--hub-gutter) * 2);
  margin: 0 auto;
  padding: 0 var(--hub-gutter);
}

@media (min-width: 640px) {
  .Hub {
    --hub-gutter: 48px;
  }
}

@media (min-width: 960px) {
  .Hub {
    --hub-gutter: 64px;
  }
}

h2 {
  margin: 0;
  font-size: 30px;
  font-weight: 600;
  line-height: 1.15;
  letter-spacing: -0.025em;
  color: var(--vp-c-text-1);
}

/* Hero */
.hero {
  padding: 72px 0 56px;
}

.hero-title {
  max-width: 14em;
  margin: 0;
  font-size: clamp(2.5rem, 1.4rem + 4.2vw, 4.75rem);
  font-weight: 600;
  line-height: 1.02;
  letter-spacing: -0.038em;
  text-wrap: balance;
  color: var(--vp-c-text-1);
}

.hero-lead {
  max-width: 38rem;
  margin: 24px 0 0;
  font-size: 19px;
  line-height: 1.6;
  color: var(--vp-c-text-2);
  text-wrap: pretty;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 32px;
}

@media (min-width: 960px) {
  .hero {
    padding: 104px 0 72px;
  }
}

/* Index */
.index {
  scroll-margin-top: calc(var(--vp-nav-height) + 16px);
}

.index-head {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding-bottom: 20px;
}

.index-title {
  font-size: 22px;
}

.filter {
  display: inline-flex;
  flex-wrap: wrap;
  max-width: 100%;
  padding: 3px;
  border-radius: 10px;
  background: var(--vp-c-bg-soft);
}

.filter-option {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  height: 32px;
  padding: 0 12px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-text-2);
  transition:
    color 0.2s,
    background-color 0.2s,
    box-shadow 0.2s;
}

.filter-option:hover {
  color: var(--vp-c-text-1);
}

.filter-option[aria-pressed='true'] {
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.dark .filter-option[aria-pressed='true'] {
  background: var(--vp-c-default-soft);
  box-shadow: none;
}

.filter-count {
  font-size: 12px;
  font-variant-numeric: tabular-nums;
  color: var(--vp-c-text-3);
}

.index-columns {
  display: none;
}

.rows {
  position: relative;
  margin: 0;
  padding: 0;
  list-style: none;
  border-bottom: 1px solid var(--vp-c-divider);
}

.row {
  position: relative;
  isolation: isolate;
  display: grid;
  grid-template-columns: 40px minmax(0, 1fr) auto;
  grid-template-areas:
    'icon who links'
    'icon desc desc'
    'icon get get';
  column-gap: 16px;
  row-gap: 10px;
  padding: 20px 0;
  border-top: 1px solid var(--vp-c-divider);
}

.row-icon {
  grid-area: icon;
  width: 40px;
  height: 40px;
  /* Icon files carry their own squircle; a hairline shadow keeps white tiles visible on white. */
  filter: drop-shadow(0 0 0.5px rgba(0, 0, 0, 0.28));
}

.row-who {
  grid-area: who;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 0;
}

.row-name {
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.01em;
  color: var(--vp-c-text-1);
  transition: color 0.2s;
}

.row-name:hover {
  color: var(--vp-c-brand-1);
}

/* Stretch the name link over the row so the whole row is a target, while nested controls stay on top. */
.row-name::after {
  content: '';
  position: absolute;
  inset: 0;
}

.row-tagline {
  font-size: 13px;
  color: var(--vp-c-text-3);
}

.row-desc {
  grid-area: desc;
  margin: 0;
  font-size: 14px;
  line-height: 1.55;
  color: var(--vp-c-text-2);
}

.row-platforms {
  display: block;
  margin-top: 4px;
  font-size: 13px;
  color: var(--vp-c-text-3);
}

.row-get {
  grid-area: get;
  position: relative;
  min-width: 0;
}

.row-links {
  grid-area: links;
  position: relative;
  display: flex;
  align-items: center;
  gap: 4px;
}

.row-docs,
.row-github {
  display: inline-flex;
  align-items: center;
  height: 32px;
  border-radius: 8px;
  color: var(--vp-c-text-2);
  transition:
    color 0.2s,
    background-color 0.2s;
}

.row-docs {
  padding: 0 10px;
  font-size: 14px;
  font-weight: 500;
}

.row-github {
  justify-content: center;
  width: 32px;
  font-size: 17px;
}

.row-docs:hover,
.row-github:hover {
  color: var(--vp-c-text-1);
  background: var(--vp-c-default-soft);
}

.cmd {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  max-width: 100%;
  height: 38px;
  padding: 0 10px 0 12px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  background: var(--vp-c-bg-alt);
  font-family: var(--vp-font-family-mono);
  font-size: 13px;
  text-align: left;
  color: var(--vp-c-text-1);
  cursor: pointer;
  transition:
    border-color 0.2s,
    background-color 0.2s;
}

.cmd:hover {
  border-color: var(--vp-c-brand-1);
}

.cmd-text {
  flex: 1;
  min-width: 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-family: inherit;
  font-size: inherit;
  background: none;
  padding: 0;
  color: inherit;
}

.cmd-prefix {
  color: var(--vp-c-text-3);
}

/* On phones the package name matters more than the fixed prefix; the copied text is unchanged. */
@media (max-width: 639px) {
  .cmd-prefix {
    display: none;
  }
}

.cmd-icon {
  display: inline-flex;
  font-size: 15px;
  color: var(--vp-c-text-3);
  transition: color 0.2s;
}

.cmd:hover .cmd-icon,
.cmd.copied .cmd-icon {
  color: var(--vp-c-brand-1);
}

@media (min-width: 768px) {
  .row {
    grid-template-columns: 40px minmax(150px, 0.9fr) minmax(0, 2fr) auto;
    grid-template-areas:
      'icon who desc links'
      'icon who get links';
    column-gap: 24px;
    align-items: start;
  }

  .row-who {
    justify-content: flex-start;
    padding-top: 2px;
  }
}

@media (min-width: 1100px) {
  .index-columns {
    display: grid;
    grid-template-columns: 40px minmax(150px, 0.9fr) minmax(0, 1.6fr) minmax(0, 1.9fr) 88px;
    column-gap: 24px;
    padding-bottom: 10px;
    font-size: 13px;
    color: var(--vp-c-text-3);
  }

  .col-project {
    grid-column: 2;
  }

  .row {
    grid-template-columns: 40px minmax(150px, 0.9fr) minmax(0, 1.6fr) minmax(0, 1.9fr) 88px;
    grid-template-areas: 'icon who desc get links';
    align-items: center;
  }

  .row-links {
    justify-content: flex-end;
  }
}

.row::before {
  content: '';
  position: absolute;
  inset: 0 -12px;
  border-radius: 12px;
  background: var(--vp-c-bg-soft);
  opacity: 0;
  transition: opacity 0.2s;
  pointer-events: none;
  z-index: -1;
}

.row:hover::before {
  opacity: 1;
}

.row-move,
.row-enter-active,
.row-leave-active {
  transition:
    opacity 0.28s var(--site-ease-out),
    transform 0.36s var(--site-ease-out);
}

.row-enter-from,
.row-leave-to {
  opacity: 0;
  transform: translateY(6px);
}

.row-leave-active {
  position: absolute;
  left: 0;
  right: 0;
}

/* Sections */
.apps,
.contract {
  padding-top: 112px;
}

.section-head {
  max-width: 40rem;
}

.section-head p {
  margin: 12px 0 0;
  font-size: 16px;
  line-height: 1.6;
  color: var(--vp-c-text-2);
}

/* Desktop app screenshots */
.shots {
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px 24px;
  margin-top: 40px;
}

@media (min-width: 768px) {
  .shots {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .shot-wide {
    grid-column: 1 / -1;
  }
}

.shot {
  margin: 0;
}

.shot-stage {
  display: flex;
  align-items: center;
  justify-content: center;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  padding: 16px;
  border-radius: var(--site-radius);
  background: var(--vp-c-bg-soft);
}

/* max-* sizing lets both landscape and portrait windows fit the stage without cropping. */
.shot-image {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  transition: transform 0.5s var(--site-ease-out);
}

.shot-stage:hover .shot-image {
  transform: translateY(-4px);
}

.shot-flat .shot-stage {
  align-items: flex-end;
  padding: 24px 24px 0;
}

.shot-flat .shot-image {
  height: auto;
  border-radius: 10px 10px 0 0;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.22);
}

@media (min-width: 768px) {
  .shot-wide .shot-stage {
    aspect-ratio: 16 / 8;
  }

  .shot-flat .shot-stage {
    padding: 48px 64px 0;
  }

  .shot-flat .shot-image {
    max-width: 960px;
  }
}

.shot-caption {
  display: grid;
  grid-template-columns: 28px minmax(0, 1fr) auto;
  gap: 12px;
  align-items: start;
  margin-top: 16px;
}

.shot-icon {
  width: 28px;
  height: 28px;
  filter: drop-shadow(0 0 0.5px rgba(0, 0, 0, 0.28));
}

.shot-text {
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
}

.shot-name {
  font-size: 15px;
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.shot-desc {
  font-size: 14px;
  line-height: 1.5;
  color: var(--vp-c-text-2);
}

.shot-link {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding-top: 1px;
  font-size: 14px;
  font-weight: 500;
  white-space: nowrap;
  color: var(--vp-c-brand-1);
}

.shot-link:hover {
  color: var(--vp-c-brand-2);
}

/* Contract */
.contract-grid {
  display: grid;
  gap: 32px;
}

@media (min-width: 960px) {
  .contract-grid {
    grid-template-columns: minmax(0, 1fr) minmax(0, 1.6fr);
    gap: 64px;
  }

  .contract-head {
    position: sticky;
    top: calc(var(--vp-nav-height) + 32px);
    align-self: start;
  }
}

.spec {
  margin: 0;
  border-bottom: 1px solid var(--vp-c-divider);
}

.spec-row {
  display: grid;
  gap: 6px;
  padding: 20px 0;
  border-top: 1px solid var(--vp-c-divider);
}

@media (min-width: 640px) {
  .spec-row {
    grid-template-columns: 160px minmax(0, 1fr);
    gap: 24px;
  }
}

.spec-term {
  font-size: 15px;
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.spec-detail {
  margin: 0;
}

.spec-detail p {
  margin: 0;
  font-size: 15px;
  line-height: 1.6;
  color: var(--vp-c-text-2);
}

.spec-code {
  display: inline-block;
  margin-top: 10px;
  padding: 4px 8px;
  border-radius: 6px;
  background: var(--vp-c-bg-soft);
  font-family: var(--vp-font-family-mono);
  font-size: 13px;
  white-space: pre;
  color: var(--vp-c-text-1);
}

/* Close */
.close {
  margin-top: 112px;
  padding: 72px 0 48px;
  border-top: 1px solid var(--vp-c-divider);
}

.close-inner {
  display: grid;
  gap: 28px;
}

@media (min-width: 960px) {
  .close-inner {
    grid-template-columns: minmax(0, 1fr) auto;
    align-items: end;
    gap: 64px;
  }
}

.close-title {
  font-size: clamp(2rem, 1.5rem + 2vw, 2.75rem);
  letter-spacing: -0.03em;
}

.close-text {
  max-width: 36rem;
  margin: 14px 0 0;
  font-size: 16px;
  line-height: 1.6;
  color: var(--vp-c-text-2);
}

.close-text a {
  font-weight: 500;
  color: var(--vp-c-brand-1);
  text-decoration: underline;
  text-underline-offset: 3px;
}

.close-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

@media (prefers-reduced-motion: reduce) {
  .row-move,
  .row-enter-active,
  .row-leave-active,
  .shot-image {
    transition: none;
  }

  .shot-stage:hover .shot-image {
    transform: none;
  }
}
</style>
