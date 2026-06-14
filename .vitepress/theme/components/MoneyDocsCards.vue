<script setup lang="ts">
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue'

const docs = [
  { path: '/money/docs/GETTING_STARTED', name: 'docs/GETTING_STARTED.md', title: 'Getting started', desc: 'Install, setup, demo mode, and provider pricing.' },
  { path: '/money/docs/PRD', name: 'docs/PRD.md', title: 'Product requirements', desc: 'Why money exists, what it commits to, and what it is not.' },
  { path: '/money/docs/ARCHITECTURE', name: 'docs/ARCHITECTURE.md', title: 'Architecture', desc: 'Module boundaries, data flow, and contract design.' },
  { path: '/money/docs/SCHEMA', name: 'docs/SCHEMA.md', title: 'Database schema', desc: 'Canonical tables for institutions, items, accounts, transactions.' },
  { path: '/money/docs/CONFIG', name: 'docs/CONFIG.md', title: 'Configuration', desc: 'Config loading, env files, secrets, and resolution rules.' },
  { path: '/money/docs/ROADMAP', name: 'docs/ROADMAP.md', title: 'Roadmap', desc: 'Phased development, current focus, and deferred work.' },
]
</script>

<template>
  <div>
    <p class="money-section-label">Documentation</p>
    <div class="money-docs-grid">
      <VPLink v-for="doc in docs" :key="doc.path" class="money-doc-card" :href="doc.path">
        <span class="money-doc-card-name">{{ doc.name }}</span>
        <span class="money-doc-card-title">{{ doc.title }}</span>
        <span class="money-doc-card-desc">{{ doc.desc }}</span>
        <span class="money-doc-card-arrow">Open →</span>
      </VPLink>
    </div>
  </div>
</template>
