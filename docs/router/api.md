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

| key      | description  | use                                      | type     | mark                |
| -------- | ------------ | ---------------------------------------- | -------- | ------------------- |
| id       | 标识         | 子路由 parentId 根据父路由的 id 进行挂载 | `String` |
| name     | 名称         | 生成路由的 name                          | `String` |
| title    | 展示名       | 生成路由的 meta.title                    | `String` |
| url      | url 地址     | 数据处理后，生成路由的 meta.href 或 path | `String` |
| path     | 前端组件地址 | 数据处理后，生成路由的 component         | `String` |
| sort     | 路由排序     | 当前路由进行排序（后端排序则忽略）       | `Number` |
| parentId | 父级 id      | 子路由 parentId 根据父路由的 id 进行挂载 | `String` | 根路由需设置为 root |
