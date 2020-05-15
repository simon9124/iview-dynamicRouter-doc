module.exports = {
  base: '/iview-dynamicRouter-doc/',
  title: 'iView DynamicRouter',
  description: '基于 iview-admin 的后端动态生成路由模板',
  head: [['link', { rel: 'icon', href: `/favicon.ico` }]],
  dest: './docs/.vuepress/dist',
  ga: '',
  evergreen: true,
  themeConfig: {
    // docsDir: 'docs', // 如果你的文档不在仓库的根部
    nav: [
      { text: '首页', link: '/' },
      { text: '文档', link: '/guide/' },
      {
        text: 'GitHub',
        link: 'https://github.com/simon9124/iview-dynamicRouter',
      },
    ], // 头部导航
    sidebar: [
      {
        title: '基础信息',
        collapsable: false,
        children: [
          ['guide/', '简介'],
          ['guide/thanks', '感谢支持'],
        ],
      },
      {
        title: '路由配置',
        collapsable: false,
        children: [
          ['router/', '路由层级'],
          ['router/api', 'api回文格式'],
          ['router/example', '示例'],
        ],
      },
    ],
    lastUpdated: '上次更新',
  },
}
