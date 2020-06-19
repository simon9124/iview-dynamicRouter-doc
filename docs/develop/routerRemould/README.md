# 路由改造

<a :href="$withBase('/develop/routerData/')">路由数据处理</a>、`路由改造`、<a :href="$withBase('/develop/menuRender/')">菜单渲染</a> 是整个开发步骤的核心部分。`路由改造` 时，需要开发者理清其完整的思路，`手动添加相关路由` 并适时 `初始化路由表`:

<img class="img-margin-top" :src="$withBase('/assets/路由改造.png')">

:::tip 调试
在 `路由改造` 中，我们将对 `路由表` 及 `路由挂载` 进行改造，开发过程中会产生众多临时 bug，需要不断调试

<a :href="$withBase('/develop/routerRemould/debug.html')">标准的调试过程 →</a>
:::

- libs > <a :href="$withBase('/develop/routerRemould/#libs-router-util-js')">router-util.js</a> / <a href="https://github.com/simon9124/iview-dynamicRouter/blob/master/src/store/module/app.js" target="_blank">完整代码 →</a>
- router > <a :href="$withBase('/develop/routerRemould/#router-routers-js')">routers.js</a> / <a href="https://github.com/simon9124/iview-dynamicRouter/blob/master/src/router/routers.js" target="_blank">完整代码 →</a>
- router > <a :href="$withBase('/develop/routerRemould/#router-index-js')">index.js</a> / <a href="https://github.com/simon9124/iview-dynamicRouter/blob/master/src/router/index.js" target="_blank">完整代码 →</a>
- store > module > <a :href="$withBase('/develop/routerRemould/#store-module-app-js')">app.js</a> / <a href="https://github.com/simon9124/iview-dynamicRouter/blob/master/src/store/module/app.js" target="_blank">完整代码 →</a>
- view > login > <a :href="$withBase('/develop/routerRemould/#view-login-login-vue')">login.vue</a> / <a href="https://github.com/simon9124/iview-dynamicRouter/blob/master/src/view/login/login.vue" target="_blank">完整代码 →</a>

## libs > router-util.js

#### 函数 `dynamicRouterAdd`：加载路由菜单，从 localStorage 拿到路由，在创建路由时使用

```javascript
import { localRead } from '@/libs/util'

// 加载路由菜单，从localStorage拿到路由，在创建路由时使用
export const dynamicRouterAdd = (from) => {
  let data = localRead('dynamicRouter-template')
  let dynamicRouter = data !== '' ? filterAsyncRouter(JSON.parse(data)) : []
  // console.log(`动态路由数据：${from}`, dynamicRouter);
  return dynamicRouter
}
```

## router > routers.js

:::tip 保存副本并退出登录
`routers.js` 路由表改动较大，建议先保存副本到 `routersOrg.js`，以便 `对比路由表变化` 或随时 `恢复原始路由表`，同时建议暂时 `退出系统`，根据后续指南 `适时再登录` 进行调试
:::

#### 整体改造：`静态路由` + `动态路由`

```javascript
import Main from '@/components/main'
import { dynamicRouterAdd } from '@/libs/router-util' // 引入动态路由

// 静态路由
export const constantRouter = [
  {
    path: '/login',
    name: 'login',
    meta: { title: 'Login - 登录', hideInMenu: true },
    component: () => import('@/view/login/login.vue'),
  },
  {
    path: '/',
    name: '_home',
    redirect: '/home',
    component: Main,
    meta: { hideInMenu: true, notCache: true },
    children: [
      {
        path: '/home',
        name: 'home',
        meta: {
          hideInMenu: true,
          title: '首页',
          notCache: true,
          icon: 'md-home',
        },
        component: () => import('@/view/single-page/home'),
      },
    ],
  },
  {
    path: '/401',
    name: 'error_401',
    meta: { hideInMenu: true },
    component: () => import('@/view/error-page/401.vue'),
  },
  {
    path: '/500',
    name: 'error_500',
    meta: { hideInMenu: true },
    component: () => import('@/view/error-page/500.vue'),
  },
  {
    path: '*',
    name: 'error_404',
    meta: { hideInMenu: true },
    component: () => import('@/view/error-page/404.vue'),
  },
]

// 动态路由
export const appRouter = [...dynamicRouterAdd('router.js')]

export const routes = [...constantRouter, ...appRouter]

// 所有上面定义的路由都要写在下面输出
export default routes
```

<a href="https://github.com/simon9124/iview-dynamicRouter/blob/master/src/router/routers.js" target="_blank">`routers.js` 完整代码 →</a>

## router > index.js

#### `routes` 改为花括号导入

```javascript
import {
  routes, // 总路由表
  constantRouter, // 静态路由表
} from './routers'
```

#### 函数 `refreshRoute`：初始化路由表刷新

```javascript
export const refreshRoute = () => {
  const routes = [...constantRouter]
  // 新路由实例matcer，赋值给旧路由实例的matcher，（相当于replaceRouter）
  router.matcher = new Router({ routes }).matcher
}
```

:::tip 重置路由
`vue-router` 没有提供 `remove routes` 方法，因此有 2 种方法清空动态路由：

- 法一：`location.reload()` 刷新页面，页面会闪，暂时不用
- 法二：`router.matcher` 重置 `matcher`，也是我这里用到的办法

:::

## store > module > app.js

#### 1.暂时隐藏 `左侧菜单`，注掉 `getters` 中的 `menuList` 及相关依赖

```javascript
// import routers from "@/router/routers";
...
getters: {
  // menuList: (state, getters, rootState) =>
  //   getMenuByRouter(routers, rootState.user.access),
  errorCount: state => state.errorList.length
},
```

#### 2.`getRouters` 方法的 `getAllMenus` 执行 `resolve`，并监听此时的路由数据

```javascript
getAllMenus(rootState.user.token).then((res) => {
  ...
  console.log('转换成组件后的路由数据：', gotRouter)
  console.log('当前路由：', router) // 监听当前路由
  resolve(gotRouter) // 执行 resolve
})
```

此时 `刷新页面` 确保路由表只保留 `静态路由`（若未登出则登出后刷新），看看 `用户登录` 后的页面：

<img style="width:100%" :src="$withBase('/assets/路由改造_未添加路由.png')">

:::tip 此时的页面
此时登录后的页面有如下几点需要我们处理：

- 1.左侧菜单在第一步已隐藏，`菜单改造` 见后续
- 2.路由表为初始的 `静态路由`，需要往路由表添加之前 `处理好的动态路由` 数据

:::

#### 3.`actions` 追加 `addRouterData`，添加动态路由：

```javascript
// 动态添加路由数据
addRouterData({ commit, rootState }, routes) {
  // 动态添加路由
  router.addRoutes(routes);
  console.log("添加动态路由后：", router);
},
// 获取动态路由数据
getRouters({ dispatch, commit, rootState }, routes) {
  return new Promise((resolve, reject) => {
    var gotRouter = []; // 设置动态路由
    if (localRead("dynamicRouter-template") === "") {
      /* localStorage里dynamicRouter值为空 -> 没有路由数据 -> 获取路由数据 */
      console.log("获取路由：从api");
      try {
        getAllMenus(rootState.user.token)
          .then(res => {
            ...
            console.log("转换成组件后的路由数据：", gotRouter);
            dispatch("addRouterData", gotRouter).then(res => {
              resolve(gotRouter);
            });
          })
          .catch(err => { ... });
      } catch (error) { ... }
    } else {
      /* 有路由数据 -> 直接从localStorage里面获取 */
      ...
    }
  });
}
```

`退出登录` -> `刷新页面` -> `用户登录`，再测：

<img style="width:100%" :src="$withBase('/assets/路由改造_添加路由.png')">

::: warning 路由没有添加？
`router` 的路由并 `不是响应式` 的，使用 `router.addRoutes` 添加的路由 `不会添加到路由缓存` 里面 :rage:，所以 `只能读取到初始路由`。这里我的办法是 `手动往 router.options.routes 添加` 要添加的路由
:::

#### 4.`addRouterData` 方法中，`手动往 router.options.routes 添加` 动态路由

```javascript
import { routerUpdateHandle } from '@/libs/router-util'
```

```javascript
// 动态添加路由数据 -> 首次登录挂载路由
addRouterData({ commit, rootState }, routes) {
  // 动态添加路由 - 真正添加路由（不会立刻刷新，需要手动往router.options.routes里添加数据）
  router.addRoutes(routes);
  routerUpdateHandle(routes, router); // 手动添加路由数据
  console.log("添加动态路由后：", router);
},
```

- `router-util.js` 追加 `routerUpdateHandle` 方法：

```javascript
// @函数: 遍历routes路由数据，手动往router.options.routes里添加数据
export const routerUpdateHandle = (routes, router) => {
  // 遍历routes
  routes.forEach((_route) => {
    /* 手动往router.options.routes里添加数据 */
    // 1.最外层有没添加的直接添加
    if (
      !router.options.routes.some(
        (_router) => _router.meta.id === _route.meta.id
      )
    ) {
      router.options.routes.push(_route)
    }
    // 2.内层路由递归添加
    const routerChildAddHandle = (array1, child2) => {
      // 遍历array1
      array1.forEach((child1) => {
        // 找到path一致的数据
        if (child1.meta.id === child2.meta.id) {
          // 遍历child2.children
          child2.children.forEach((_child2) => {
            // 比对child1.children -> 有没添加的直接添加
            if (
              !child1.children.some(
                (_child1) => _child1.meta.id === _child2.meta.id
              )
            ) {
              child1.children.push(_child2)
            }
            // 递归
            routerChildAddHandle(child1.children, _child2)
          })
        }
      })
    }
    routerChildAddHandle(router.options.routes, _route)
  })
}
```

老样子~`退出登录` -> `刷新页面` -> `用户登录`，测！

<img style="width:100%" :src="$withBase('/assets/路由改造_手动添加路由.png')">

::: tip 路由添加成功
`动态路由添加` 成功啦 :grin:，尽管 `左侧菜单暂时隐藏` 着（还需改造），但已经可以 `在地址栏输入配置好的路由地址` 并 `查看相应页面` 啦：

<img style="width:100%" :src="$withBase('/assets/路由改造_路由添加成功1.png')">
<img style="width:100%" :src="$withBase('/assets/路由改造_路由添加成功2.png')">
:::

## view > login > login.vue

#### 引入 `router > index.js` 里的 `refreshRoute` 方法，在初始化数据时 `重置路由`、清空 `localStorage` 中的 `dynamicRouter-template` 数据

```javascript
import { refreshRoute } from '@/router' // 路由初始化，清空动态路由
```

```javascript
created() {
  localStorage.setItem("dynamicRouter-template", []); // 清空路由缓存数据
  refreshRoute(); // 路由重置
}
```
