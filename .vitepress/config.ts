import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'CLI Tools',
  description: 'Agent-friendly CLI tools for modern workflows',
  base: '/docs/',

  themeConfig: {
    nav: [
      { text: 'Home', link: '/docs/' },
      {
        text: 'Tools',
        items: [
          { text: 'canvas-cli', link: '/docs/canvas-cli/' },
          { text: 'zenodo-cli', link: '/docs/zenodo-cli/' },
          { text: 'monarchmoney-cli', link: '/docs/monarchmoney-cli/' },
          { text: 'flickr-cli', link: '/docs/flickr-cli/' },
          { text: 'money', link: '/docs/money/' },
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
