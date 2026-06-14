<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import TerminalHighlight from './components/TerminalHighlight.vue'
import MoneyIntroVideo from './components/MoneyIntroVideo.vue'
import MoneyQuickStart from './components/MoneyQuickStart.vue'
import MoneyDocsCards from './components/MoneyDocsCards.vue'

const { Layout: DefaultLayout } = DefaultTheme
const route = useRoute()
const { frontmatter, site } = useData()

const isMoneyHome = computed(() => {
  if (frontmatter.value.layout !== 'home') return false
  const base = site.value.base.replace(/\/$/, '')
  const path = route.path.replace(/\/$/, '') || '/'
  const normalized = path.startsWith(base) ? path.slice(base.length).replace(/\/$/, '') || '/' : path
  return normalized === '/money'
})

const isMoneyRoute = computed(() => {
  const base = site.value.base.replace(/\/$/, '')
  const path = route.path
  return path.startsWith(`${base}/money`) || path === `${base}/money`
})
</script>

<template>
  <DefaultLayout>
    <template v-if="isMoneyHome" #home-hero-info-before>
      <img
        class="money-hero-logo"
        :src="`${site.base}money/Golden-Toad-logo.webp`"
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
    <template v-if="isMoneyRoute && !isMoneyHome" #nav-bar-title-after>
      <img
        :src="`${site.base}money/Golden-Toad-logo.webp`"
        alt=""
        width="22"
        height="22"
        style="margin-left: 0.35rem; border-radius: 6px; vertical-align: middle;"
      />
    </template>
  </DefaultLayout>
</template>
