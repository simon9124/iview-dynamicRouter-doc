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
      { text: '使用文档', link: '/document/guide/' },
      { text: '开发指南', link: '/develop/axios/' },
      {
        text: 'GitHub',
        link: 'https://github.com/simon9124/iview-dynamicRouter',
      },
    ], // 导航栏
    sidebar: {
      '/document/': [
        {
          title: '基础信息',
          collapsable: false,
          children: [
            ['/document/guide/', '简介'],
            ['/document/guide/thanks', '感谢支持'],
          ],
        },
        {
          title: '路由配置',
          collapsable: false,
          children: [
            ['/document/router/', '路由层级'],
            ['/document/router/api', 'api回文格式'],
            ['/document/router/example', '示例'],
          ],
        },
        {
          title: '权限管理',
          collapsable: false,
          children: [
            ['/document/authority/diagram', '逻辑关系'],
            ['/document/authority/user', '用户管理'],
            ['/document/authority/role', '角色管理'],
            ['/document/authority/menu', '菜单管理'],
          ],
        },
      ],
      '/develop/': ['/develop/axios/', '/develop/mockData/'],
    }, // 侧边栏
    // lastUpdated: '上次更新',
  },
}
