<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue'
import { resolveProject } from '../projects'
import TerminalHighlight from './components/TerminalHighlight.vue'
import MoneyIntroVideo from './components/MoneyIntroVideo.vue'
import MoneyQuickStart from './components/MoneyQuickStart.vue'
import MoneyDocsCards from './components/MoneyDocsCards.vue'

const { Layout: DefaultLayout } = DefaultTheme
const route = useRoute()
const { frontmatter, site } = useData()

const base = computed(() => site.value.base)
const currentProject = computed(() => resolveProject(route.path, base.value))

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
    <!-- Project title: replaces default "Apps" title on project pages -->
    <template v-if="currentProject" #nav-bar-title-before>
      <VPLink class="project-nav-title" :href="currentProject.overview">
        {{ currentProject.name }}
      </VPLink>
    </template>

    <template v-if="isMoneyHome" #home-hero-info-before>
      <img
        class="money-hero-logo"
        :src="`${base}money/Golden-Toad-logo.webp`"
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

<style>
/* Hide default site title when project-specific title is present */
.project-nav-title + .VPNavBarTitle {
  display: none;
}
</style>

<style scoped>
.project-nav-title {
  display: flex;
  align-items: center;
  gap: 12px;
  height: var(--vp-nav-height);
  font-size: 16px;
  font-weight: 600;
  color: var(--vp-c-text-1);
  text-decoration: none;
  transition: opacity 0.25s;
}

.project-nav-title:hover {
  opacity: 0.7;
}
</style>
