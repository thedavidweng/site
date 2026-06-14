import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'CLI Tools',
  description: 'Agent-friendly CLI tools for modern workflows',
  base: '/site/',

  themeConfig: {
    nav: [
      { text: 'Home', link: '/site/' },
      {
        text: 'Tools',
        items: [
          { text: 'canvas-cli', link: '/site/canvas-cli/' },
          { text: 'zenodo-cli', link: '/site/zenodo-cli/' },
          { text: 'monarchmoney-cli', link: '/site/monarchmoney-cli/' },
          { text: 'flickr-cli', link: '/site/flickr-cli/' },
          { text: 'money', link: '/site/money/' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/thedavidweng' }
    ],

    footer: {
      message: 'Built with VitePress',
      copyright: '© 2025 David Weng'
    }
  }
})
