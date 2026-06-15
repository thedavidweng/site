<script setup lang="ts">
import { computed, onMounted, watch, nextTick } from 'vue'
import { useRoute, useData, useRouter, withBase } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
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

const defaultTitle = 'Apps'

function updateTitle() {
  const titleLink = document.querySelector('.VPNavBarTitle > a.title') as HTMLAnchorElement | null
  const titleText = document.querySelector('.VPNavBarTitle .title-text')

  if (currentProject.value) {
    if (titleLink) titleLink.href = withBase(currentProject.value.overview)
    if (titleText) titleText.textContent = currentProject.value.name
  } else {
    if (titleLink) titleLink.href = withBase('/')
    if (titleText) titleText.textContent = defaultTitle
  }
}

onMounted(() => {
  nextTick(updateTitle)
  watch(() => route.path, () => nextTick(updateTitle))
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
  <DefaultLayout>
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
</template>
