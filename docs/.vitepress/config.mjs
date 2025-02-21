import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "WuUI",
  description: "一个基于Element-ui进行二次封装的UI组件库",
  base: process.env.NODE_ENV === 'production' ? '/docs/' : '/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '组件库', link: '/UI' },
      { text: 'API', link: '/API' },
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: '组件库', link: '/UI' },
          { text: 'API', link: '/API' },
          { text: 'ceshi', link: '/ceshi' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/fruge365?tab=repositories' }
    ]
  }
})
