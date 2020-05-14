---
sidebarDepth: 0
---

# api 回文格式

在 `@/mock/role.js` 里设置了默认的路由模拟数据回文格式：

```javascript
const menuList = [
  {
    id: 'doc',
    name: 'doc',
    title: '文档',
    url: 'https://simon9124.github.io/iview-dynamicRouter-doc/',
    path: '',
    sort: 28,
    parentId: 'root',
    ico: 'ios-book',
    isOutSide: true,
    showLevel: 1,
  },
]
```

### API

| key       | description  | use                                       | type      | mark              |
| --------- | ------------ | ----------------------------------------- | --------- | ----------------- |
| id        | 标识         | 子路由 parentId 根据父路由的 id 进行挂载  | `String`  |
| name      | 名称         | 生成路由的 name                           | `String`  |
| title     | 展示名       | 生成路由的 meta.title                     | `String`  |
| url       | url 地址     | 数据处理后，生成路由的 meta.href 或 path  | `String`  |
| path      | 前端组件地址 | 数据处理后，生成路由的 component          | `String`  |
| sort      | 路由排序     | 当前路由进行排序                          | `Number`  | 后端排序可忽略    |
| parentId  | 父级 id      | 子路由 parentId 根据父路由的 id 进行挂载  | `String`  | 根路由必须为 root |
| ico       | icon 图标    | 生成路由的 meta.icon，仅限 iview          | `String`  | 根路由不可为空    |
| isOutSide | 是否外链     | 该路由是否为外链，可选值为 `true` `false` | `Boolean` |
| showLevel | 路由层级     | 更具路由层级\*，渲染路由和左侧菜单        | `Number`  |

::: tip 路由层级
<a :href="$withBase('/router')">详细的路由和菜单层级</a>，可自行配置并修改相关代码
:::
