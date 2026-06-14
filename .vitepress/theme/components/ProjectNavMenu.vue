<script setup lang="ts">
import { useData, useRoute } from 'vitepress'
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue'
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

type NavGroup = {
  text: string
  items: NavLink[]
}

const toolMenuItems: NavLink[] = projects.map((project) => ({
  text: project.name,
  link: project.overview,
}))

const hubLinks: Array<NavLink | NavGroup> = [
  { text: 'Tools', items: toolMenuItems },
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

const links = onHub ? hubLinks : projectLinks

function linkIsActive(item: NavLink) {
  if (!item.activeMatch) return false
  return isActive(page.value.relativePath, item.activeMatch, true)
}
</script>

<template>
  <nav
    v-if="links.length"
    :class="screenMenu ? 'ProjectNavMenu screen' : 'ProjectNavMenu desktop'"
    :aria-labelledby="screenMenu ? undefined : 'project-nav-aria-label'"
  >
    <span v-if="!screenMenu" id="project-nav-aria-label" class="visually-hidden">
      Main Navigation
    </span>

    <template v-for="item in links" :key="item.text">
      <details v-if="'items' in item" class="menu-group" :open="screenMenu">
        <summary>{{ item.text }}</summary>
        <VPLink
          v-for="child in item.items"
          :key="child.link"
          class="screen-link"
          :href="child.link"
        >
          <span>{{ child.text }}</span>
        </VPLink>
      </details>

      <VPLink
        v-else
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

.menu-group {
  border-bottom: 1px solid var(--vp-c-divider);
}

.menu-group summary {
  padding: 12px 0 8px;
  font-size: 14px;
  font-weight: 700;
  color: var(--vp-c-text-1);
  cursor: pointer;
  list-style: none;
}

.menu-group summary::-webkit-details-marker {
  display: none;
}

.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
</style>
