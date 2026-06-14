import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import HubLayout from './HubLayout.vue'
import Layout from './Layout.vue'
import ProjectNavMenu from './components/ProjectNavMenu.vue'
import './custom.css'
import './money.css'

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.component('Hub', HubLayout)
    app.component('ProjectNavMenu', ProjectNavMenu)
  },
} satisfies Theme
