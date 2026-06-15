<script setup lang="ts">
import { useData, useRoute } from 'vitepress'
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue'
import VPNavBarMenuGroup from 'vitepress/dist/client/theme-default/components/VPNavBarMenuGroup.vue'
import VPNavScreenMenuGroup from 'vitepress/dist/client/theme-default/components/VPNavScreenMenuGroup.vue'
import { isActive } from 'vitepress/dist/client/shared.js'
import { projects, resolveProject } from '../../projects'

defineProps<{
  screenMenu?: boolean
}>()

const route = useRoute()
const { page, site } = useData()

const base = site.value.base
const currentProject = resolveProject(route.path, base)

type NavLink = {
  text: string
  link: string
  activeMatch?: string
}

const toolMenuItems: NavLink[] = projects.map((project) => ({
  text: project.name,
  link: project.overview,
}))

const toolsDropdown = {
  text: 'Tools',
  items: toolMenuItems,
}

const guideLink: NavLink | null = currentProject
  ? {
      text: 'Guide',
      link: currentProject.docsEntry,
      activeMatch: `^/${currentProject.slug}/(?:docs|COMMANDS|JSON_SCHEMA)`,
    }
  : null

function linkIsActive(item: NavLink) {
  if (!item.activeMatch) return false
  return isActive(page.value.relativePath, item.activeMatch, true)
}
</script>

<template>
  <nav :class="screenMenu ? 'ProjectNavMenu screen' : 'ProjectNavMenu desktop'">
    <!-- Guide link (project pages only) -->
    <VPLink
      v-if="guideLink"
      :class="[
        screenMenu ? 'screen-link' : 'desktop-link',
        { active: linkIsActive(guideLink) },
      ]"
      :href="guideLink.link"
    >
      <span>{{ guideLink.text }}</span>
    </VPLink>

    <!-- Tools dropdown: always visible -->
    <VPNavBarMenuGroup v-if="!screenMenu" :item="toolsDropdown" />
    <VPNavScreenMenuGroup v-if="screenMenu" text="Tools" :items="toolMenuItems" />
  </nav>
</template>

<style scoped>
.ProjectNavMenu.desktop {
  display: none;
}

@media (min-width: 768px) {
  .ProjectNavMenu.desktop {
    display: flex;
    align-items: center;
  }
}

.ProjectNavMenu.screen {
  display: block;
  margin-bottom: 8px;
}

.desktop-link {
  display: flex;
  align-items: center;
  padding: 0 12px;
  line-height: var(--vp-nav-height);
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-text-1);
  transition: color 0.25s;
}

.desktop-link.active,
.desktop-link:hover,
.screen-link:hover {
  color: var(--vp-c-brand-1);
}

.screen-link {
  display: block;
  border-bottom: 1px solid var(--vp-c-divider);
  padding: 12px 0 11px;
  line-height: 24px;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-text-1);
}
</style>
