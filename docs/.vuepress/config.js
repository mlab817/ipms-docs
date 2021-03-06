const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Investment Programming & Management System',

  host: 'localhost',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,
  // dest: 'public',
  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { href: 'https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;523;600;700;800&display=swap', rel: 'stylesheet', type: 'text/css' } ],
    ['script', { src: 'https://code.iconify.design/1/1.0.6/iconify.min.js', type: 'text/javascript' } ]
  ],

  extraWatchFiles: ["**/*.md", "**/*.vue"],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    logo: '/app-logo-128x128.png',
    repo: 'mlab817/ipms-docs',
    repoLabel: 'Contribute',
    editLinks: true,
    docsDir: 'docs',
    docsRepo: 'mlab817/ipms-docs',
    docsBranch: 'master',
    lastUpdated: 'Last Updated',
    editLinkText: 'Edit this page on GitHub',
    smoothScroll: true,
    nav: [
      {
        text: 'Guide',
        link: '/guide/',
      },
      {
        text: 'App',
        link: 'https://da-ipms2020.web.app',
      }
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'Guide',
          collapsable: false,
          children: [
            '',
            'features',
            'getting-started',
            'installation',
            'user-interface',
            'dashboard',
            'profile',
            'roles',
            'settings',
            'policies',
            'report-issues'
          ]
        },
        {
          title: 'Projects',
          collapsable: true,
          children: [
            'add-project',
            'processing-status',
            'project-menu',
            'project-profile',
            'data-requirements',
            'download-projects'
          ]
        },
        {
          title: 'Admin',
          collapsable: true,
          children: [
            'admin-login',
            'operating-units',
            'users'
          ]
        },
        {
          title: 'Ways Forward',
          collapsable: true,
          children: [
            'future-plans'
          ]
        }
      ]
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
