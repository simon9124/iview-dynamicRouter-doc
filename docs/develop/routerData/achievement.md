---
sidebarDepth: 0
---

# 总结

- `vuex` 中追加 `getRouters` 方法，获取 `动态路由数据`，并进行 `数据处理`
- 封装了几个 `数据处理` 的相关方法
- 改造了 `用户登录` ，登录后监听 `处理后的路由数据` 并存入 `localStorage`
- 改造了 `用户登出` ，登出时清空 `localStorage` 中的 `路由数据`

## 成果

- `用户登录` 后，从 `api` 获取 `处理后的路由数据`

<img style="width:100%" :src="$withBase('/assets/路由数据处理_成果1.png')">

- `登录后刷新页面` 后，从 `localStorage` 获取 `处理后的路由数据`

<img style="width:100%" :src="$withBase('/assets/路由数据处理_成果2.png')">

- `用户登录`、`用户登出` 时，在 `localStorage` 中监听 `dynamicRouter-template` 的变化，`localStorage` 中 `component` 存储格式为 `String`，是**未转化成前端组件的字符串**

<img style="width:100%" :src="$withBase('/assets/路由数据处理_成果3.png')">
