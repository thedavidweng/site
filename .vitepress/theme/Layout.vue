<script setup lang="ts">
import { computed, onMounted, watch, nextTick } from 'vue'
import { useRoute, useData, useRouter, withBase } from 'vitepress'
import DefaultTheme from 'vitepress/theme-without-fonts'
import { resolveProject } from '../projects'
import TerminalHighlight from './components/TerminalHighlight.vue'
import MoneyIntroVideo from './components/MoneyIntroVideo.vue'
import MoneyQuickStart from './components/MoneyQuickStart.vue'
import MoneyDocsCards from './components/MoneyDocsCards.vue'

const { Layout: DefaultLayout } = DefaultTheme
const route = useRoute()
const router = useRouter()
const { frontmatter, site } = useData()

const base = computed(() => site.value.base)
const currentProject = computed(() => resolveProject(route.path, base.value))

const navTitle = computed(() => currentProject.value?.name ?? 'David Weng')

const accentVars = computed(() => {
  const accent = currentProject.value?.accent
  if (!accent) return undefined
  return {
    '--project-light': accent.light,
    '--project-dark': accent.dark,
    '--project-glow-1': accent.glow[0],
    '--project-glow-2': accent.glow[1],
  }
})

// The default theme has no option for a per-page title link, so the anchor is patched after render.
function updateTitleLink() {
  const titleLink = document.querySelector('.VPNavBarTitle a.title') as HTMLAnchorElement | null
  if (titleLink) titleLink.href = withBase(currentProject.value?.overview ?? '/')
}

const tgDriveSite = 'https://tg-drive.blahaj.uk/'

function isRetiredTgDrivePath(path: string) {
  const prefix = base.value.replace(/\/$/, '')
  let routePath = path.startsWith(prefix) ? path.slice(prefix.length) || '/' : path
  routePath = routePath.replace(/\.html$/, '').replace(/\/$/, '') || '/'
  return routePath === '/tg-drive' || routePath.startsWith('/tg-drive/')
}

function redirectRetiredTgDrive() {
  if (isRetiredTgDrivePath(route.path)) window.location.replace(tgDriveSite)
}

onMounted(() => {
  nextTick(updateTitleLink)
  redirectRetiredTgDrive()
  watch(() => route.path, () => {
    nextTick(updateTitleLink)
    redirectRetiredTgDrive()
  })
})

const isMoneyHome = computed(() => {
  if (frontmatter.value.layout !== 'home') return false
  const b = base.value.replace(/\/$/, '')
  const path = route.path.replace(/\/$/, '') || '/'
  const normalized = path.startsWith(b) ? path.slice(b.length).replace(/\/$/, '') || '/' : path
  return normalized === '/money'
})

const isMoneyRoute = computed(() => {
  const b = base.value.replace(/\/$/, '')
  const path = route.path
  return path.startsWith(`${b}/money`) || path === `${b}/money`
})
</script>

<template>
  <div class="project-theme-root" :class="{ 'project-theme': accentVars }" :style="accentVars">
    <DefaultLayout>
      <template #nav-bar-title-after>
        <span>{{ navTitle }}</span>
      </template>
      <template v-if="isMoneyHome" #home-hero-info-before>
        <img
          class="money-hero-logo"
          :src="`${base}money-icon.webp`"
          alt="money"
          width="52"
          height="52"
        />
      </template>
      <template v-if="isMoneyHome" #home-hero-after>
        <TerminalHighlight />
      </template>
      <template v-if="isMoneyHome" #home-features-before>
        <MoneyIntroVideo />
      </template>
      <template v-if="isMoneyHome" #home-features-after>
        <MoneyQuickStart />
        <MoneyDocsCards />
      </template>
    </DefaultLayout>
  </div>
</template>
