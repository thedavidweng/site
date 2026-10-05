<script setup lang="ts">
import { computed } from 'vue'
import { useData, useRoute } from 'vitepress'
import { VPLink } from 'vitepress/theme-without-fonts'
import { resolveProject, stripBase } from '../../projects'

const props = defineProps<{
  /** Set by the default theme inside the mobile nav screen. */
  screenMenu?: boolean
  /** Set by VitePress 2 inside dropdown panels such as the `⋯` overflow menu. */
  menu?: boolean
}>()

const route = useRoute()
const { site } = useData()

const currentProject = computed(() => resolveProject(route.path, site.value.base))

const isGuideActive = computed(() => {
  const project = currentProject.value
  if (!project) return false
  return new RegExp(`^/${project.slug}/(?:docs|COMMANDS|JSON_SCHEMA)`).test(
    stripBase(route.path, site.value.base),
  )
})

const inList = computed(() => props.screenMenu || props.menu)
</script>

<template>
  <VPLink
    v-if="currentProject && inList"
    :class="['guide-list-link', { active: isGuideActive }]"
    :href="currentProject.docsEntry"
  >
    Guide
  </VPLink>
  <!-- VitePress 2 wraps nav items in a stretched <li>, so the pill is centred by this wrapper. -->
  <span v-else-if="currentProject" class="guide-bar-item">
    <VPLink :class="['guide-btn', { active: isGuideActive }]" :href="currentProject.docsEntry">
      Guide
    </VPLink>
  </span>
</template>

<style scoped>
.guide-bar-item {
  display: flex;
  align-items: center;
  height: var(--vp-nav-height);
}

.guide-btn {
  display: inline-flex;
  align-items: center;
  padding: 0 14px;
  margin-right: 4px;
  height: 30px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 15px;
  font-size: 13px;
  font-weight: 500;
  color: var(--vp-c-text-2);
  transition: border-color 0.25s, color 0.25s;
}

.guide-btn.active,
.guide-btn:hover {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
}

.guide-list-link {
  display: block;
  border-bottom: 1px solid var(--vp-c-divider);
  padding: 12px 0 11px;
  line-height: 24px;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-text-1);
}

.guide-list-link.active {
  color: var(--vp-c-brand-1);
}
</style>
