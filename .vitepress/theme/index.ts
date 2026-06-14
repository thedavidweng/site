import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import HubLayout from './HubLayout.vue'
import ProjectNavMenu from './components/ProjectNavMenu.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('Hub', HubLayout)
    app.component('ProjectNavMenu', ProjectNavMenu)
  },
} satisfies Theme
