---
sidebarDepth: 0
---

# 总结

- 封装了 `菜单数据处理` 方法，将 **原本不应挂载在根菜单** 的数据，重新挂载到相应位置
- `vuex` 的 `mutations` 追加 `setMenuList` 方法，修改 state.menuList，生成左侧菜单；`getters` 的 `menuList` 实现方式改造
- 完成了 `用户登录` 和 `刷新页面` 的 `动态路由挂载` 和 `动态菜单渲染` 全过程，可监听相关数据

## 成果

- `用户登录` 后，`动态路由挂载` 并 `动态渲染左侧菜单`

<img style="width:100%" :src="$withBase('/assets/菜单改造_成果1.png')">

- `用户登录` 后 `刷新页面`，`动态路由不变`，`动态菜单重新根据 localStorage 数据渲染`

<img style="width:100%" :src="$withBase('/assets/菜单改造_成果2.png')">

- 解决 `子菜单` 下的 `大屏路由挂载`

<img style="width:100%" :src="$withBase('/assets/菜单改造_成果3.png')">
