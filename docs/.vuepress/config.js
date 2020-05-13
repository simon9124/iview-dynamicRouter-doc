module.exports = {
  title: 'iView DynamicRouter',
  description: '基于 iview-admin 的后端动态生成路由模板',
  head: [['link', { rel: 'icon' }]],
  dest: './docs/.vuepress/dist',
  ga: '',
  evergreen: true,
  themeConfig: {
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
    ],
    lastUpdated: '上次更新',
  },
}