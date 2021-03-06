---
sidebarDepth: 0
---

# api 回文格式

在 <a href="https://github.com/simon9124/iview-dynamicRouter/blob/master/src/mock/role.js" target="_blank">@/mock/role.js</a> 里配置了默认的路由模拟数据回文格式：

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
    showLevel: '1',
  },
]
```

### API

| key       | description  | use                                       | type      | mark                    |
| --------- | ------------ | ----------------------------------------- | --------- | ----------------------- |
| id        | 标识         | 子路由 parentId 根据父路由的 id 进行挂载  | `String`  | 必填，不可重复          |
| name      | 名称         | 生成路由的 name                           | `String`  | 必填，不可重复          |
| title     | 展示名       | 生成路由的 meta.title                     | `String`  | 必填                    |
| url       | url 地址     | 数据处理后，生成路由的 meta.href 或 path  | `String`  | 必填，不可重复          |
| path      | 前端组件地址 | 数据处理后，生成路由的 component          | `String`  | 必填 [1]                |
| sort      | 路由排序     | 当前层级的路由/子路由排序                 | `Number`  | 必填                    |
| parentId  | 父级 id      | 子路由 parentId 根据父路由的 id 进行挂载  | `String`  | 必填，根路由必须为 root |
| ico       | icon 图标    | 生成路由的 meta.icon，仅限 iview          | `String`  | 非必填，根路由不可为空  |
| isOutSide | 是否外链     | 该路由是否为外链，可选值为 `true` `false` | `Boolean` | 必填                    |
| showLevel | 路由层级     | 更具路由层级\*，渲染路由和左侧菜单        | `String`  | 必填 [2]                |

::: tip [1] 前端组件地址
此项较为关键，不同路由差异较大，详见<a :href="$withBase('/document/router/example')">示例</a>
:::
::: tip [2] 路由层级
<a :href="$withBase('/document/router')">详细的路由和菜单层级</a>，可自行配置并修改相关代码
:::
