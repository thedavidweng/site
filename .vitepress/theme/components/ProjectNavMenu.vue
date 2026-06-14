<script setup lang="ts">
import { useData, useRoute } from 'vitepress'
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue'
import VPNavBarMenuGroup from 'vitepress/dist/client/theme-default/components/VPNavBarMenuGroup.vue'
import VPNavScreenMenuGroup from 'vitepress/dist/client/theme-default/components/VPNavScreenMenuGroup.vue'
import { isActive } from 'vitepress/dist/client/shared.js'
import { isHubPath, projects, resolveProject } from '../../projects'

defineProps<{
  screenMenu?: boolean
}>()

const route = useRoute()
const { page, site } = useData()

const base = site.value.base
const currentProject = resolveProject(route.path, base)
const onHub = isHubPath(route.path, base)

type NavLink = {
  text: string
  link: string
  activeMatch?: string
  target?: string
  rel?: string
}

const toolMenuItems: NavLink[] = projects.map((project) => ({
  text: project.name,
  link: project.overview,
}))

const toolsDropdown = {
  text: 'Tools',
  items: toolMenuItems,
}

const hubLinks: NavLink[] = [
  {
    text: 'Homebrew Tap',
    link: 'https://github.com/thedavidweng/homebrew-tap',
    target: '_blank',
    rel: 'noopener',
  },
]

const projectLinks: NavLink[] = currentProject
  ? [
      {
        text: 'Overview',
        link: currentProject.overview,
        activeMatch: `^/${currentProject.slug}$`,
      },
      {
        text: 'Guide',
        link: currentProject.docsEntry,
        activeMatch: `^/${currentProject.slug}/(?:docs|COMMANDS|JSON_SCHEMA)`,
      },
      {
        text: 'GitHub',
        link: currentProject.github,
        target: '_blank',
        rel: 'noopener',
      },
    ]
  : []

function linkIsActive(item: NavLink) {
  if (!item.activeMatch) return false
  return isActive(page.value.relativePath, item.activeMatch, true)
}
</script>

<template>
  <nav
    v-if="onHub || projectLinks.length"
    :class="screenMenu ? 'ProjectNavMenu screen' : 'ProjectNavMenu desktop'"
  >
    <template v-if="onHub">
      <!-- Desktop: official VitePress dropdown -->
      <VPNavBarMenuGroup v-if="!screenMenu" :item="toolsDropdown" />

      <!-- Mobile: official VitePress screen menu group -->
      <VPNavScreenMenuGroup v-if="screenMenu" text="Tools" :items="toolMenuItems" />

      <VPLink
        v-for="item in hubLinks"
        :key="item.link"
        :class="screenMenu ? 'screen-link' : 'desktop-link'"
        :href="item.link"
        :target="item.target"
        :rel="item.rel"
      >
        <span>{{ item.text }}</span>
      </VPLink>
    </template>

    <template v-else>
      <VPLink
        v-for="item in projectLinks"
        :key="item.link"
        :class="[
          screenMenu ? 'screen-link' : 'desktop-link',
          { active: linkIsActive(item) },
        ]"
        :href="item.link"
        :target="item.target"
        :rel="item.rel"
      >
        <span>{{ item.text }}</span>
      </VPLink>
    </template>
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
