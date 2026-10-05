import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme-without-fonts'
import '@fontsource-variable/geist'
import '@fontsource-variable/geist-mono'
import HubLayout from './HubLayout.vue'
import Layout from './Layout.vue'
import ProjectGuideLink from './components/ProjectGuideLink.vue'
import './custom.css'
import './money.css'
import './project-theme.css'

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.component('Hub', HubLayout)
    app.component('ProjectGuideLink', ProjectGuideLink)
  },
} satisfies Theme
