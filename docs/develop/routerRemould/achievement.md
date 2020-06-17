---
sidebarDepth: 0
---

# 总结

- 将路由表分为 `静态路由` 和 `动态路由`
- `vuex` 中追加 `addRouterData` 方法，动态添加路由数据；在 `getRouters` 方法中调用 `addRouterData`
- 封装了 `加载路由菜单`、`手动添加路由`、`初始化路由表刷新` 等方法，适时调用
- `用户登录` 后的路由即采用 `动态路由`，暂时隐藏左侧菜单栏

## 成果

- `用户登录` 已采用 `静态路由 + 动态路由` 的方式，可监听 `添加动态路由后` 的路由数据，并暂时隐藏了左侧菜单栏

<img style="width:100%" :src="$withBase('/assets/路由改造_成果1.png')">

- `用户登录` 后，可以 `在地址栏输入配置好的路由地址` 并 `查看相应页面`

<img style="width:100%" :src="$withBase('/assets/路由改造_路由添加成功1.png')">
<img style="width:100%" :src="$withBase('/assets/路由改造_路由添加成功2.png')">
<img style="width:100%" :src="$withBase('/assets/路由改造_路由添加成功3.png')">
