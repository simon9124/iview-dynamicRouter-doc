# 菜单渲染

<a :href="$withBase('/develop/routerData/')">路由数据处理</a>、<a :href="$withBase('/develop/routerRemould/')">路由改造</a>、`菜单渲染` 是整个开发步骤的核心部分。在前两个步骤已经完备的基础上，`菜单管理` 就没那么复杂了，目的也很单纯 —— 根据动态路由，渲染动态菜单

:::tip 菜单 VS 路由
既然 `iview-admin` 已经封装好了，菜单难道不就是路由？

<a :href="$withBase('/develop/menuRender/menuVSRouter.html')">是，但又不完全是 →</a>
:::

<img class="img-margin-top" :src="$withBase('/assets/菜单渲染.png')">

- store > module > <a :href="$withBase('/develop/menuRender/#store-module-app-js')">app.js</a> / <a href="https://github.com/simon9124/iview-dynamicRouter/blob/master/src/store/module/app.js" target="_blank">完整代码 →</a>
- store > <a :href="$withBase('/develop/menuRender/#libs-router-util-js')">router-util.js</a> / <a href="https://github.com/simon9124/iview-dynamicRouter/blob/master/src/libs/router-util.js" target="_blank">完整代码 →</a>
- router > <a :href="$withBase('/develop/menuRender/#router-index-js')">index.js</a> / <a href="https://github.com/simon9124/iview-dynamicRouter/blob/master/src/router/index.js" target="_blank">完整代码 →</a>

## store > module > app.js

#### 1.`state` 追加 `menuList`，`mutations` 追加 `setMenuList`，修改 `state.menuList`

```javascript
state: {
  ...
  menuList: [] // 菜单数据
},
```

```javascript
setMenuList(state, data) {
  state.menuList = getMenuByRouter(data.menuList, data.access);
}
```

#### 2.`getters` 改造 `menuList`，从 `state.menuList` 中渲染动态菜单

```javascript
menuList: (state, getters, rootState) =>
  //   getMenuByRouter(routers, rootState.user.access),
  state.menuList, // 改造：动态菜单渲染
```

#### 3.`actions` 的 `addRouterData` 调用 `setMenuList` 渲染动态菜单

```javascript
// 动态添加路由数据 -> 首次登录挂载路由
addRouterData({ commit, rootState }, routes) {
  router.addRoutes(routes); // 动态添加路由
  routerUpdateHandle(routes, router); // 手动添加路由数据
  console.log("动态添加路由：", routes);
  var menuList = JSON.parse(JSON.stringify(routes)); // 菜单数据未处理前，看看渲染后的动态菜单
  commit("setMenuList", {
    menuList: menuList,
    access: rootState.user.access
  });
},
```

还是老办法~`退出登录` -> `刷新页面` -> `用户登录`，测！

<img style="width:100%" :src="$withBase('/assets/菜单改造_菜单处理前.png')">

:::tip 确实，还需要对菜单数据进行处理
控制台的 `动态路由数据` 已经处理好，没毛病 ~

菜单数据暂时与路由相同（未经处理），配置的 `二级大屏` 和 `三级大屏` 本应是子菜单（`parentId` 不是 `root` 而是与父菜单的 `id` 相同），不应该出现在根菜单的位置，也再次验证了 <a :href="$withBase('/develop/menuRender/menuVSRouter.html')">**菜单和路由不完全一样，需要对菜单数据进行处理**</a>
:::

#### 4.`actions` 的 `addRouterData`调用 `menuListHanding` 方法做 `菜单数据处理`

```javascript
import { menuListHanding } from '@/libs/router-util' // 遍历菜单数据，将"原本不应挂载在根菜单"的数据，重新挂载到相应位置
```

<a :href="$withBase('/develop/menuRender/#libs-router-util-js')">`menuListHanding` 方法 →</a>

```javascript
// 动态添加路由数据 -> 首次登录挂载路由
addRouterData({ commit, rootState }, routes) {
  /* 1.动态添加路由（不会立刻刷新，需要手动往router.options.routes里添加数据） */
  router.addRoutes(routes); // 动态添加路由
  routerUpdateHandle(routes, router); // 手动添加路由数据
  /* 2.处理菜单数据 */
  var menuList = JSON.parse(JSON.stringify(routes));
  menuList = menuListHanding(menuList); // 将"原本不应挂载在根菜单"的数据，重新挂载到相应位置
  console.log("动态添加路由：", routes);
  console.log("左侧动态菜单：", menuList);
  /* 3.提交到 setMenuList，修改state.menuList */
  commit("setMenuList", {
    menuList: menuList,
    access: rootState.user.access
  });
},
```

`退出登录` -> `刷新页面` -> `用户登录`，再再再~再测！

<img style="width:100%" :src="$withBase('/assets/菜单改造_菜单处理后.png')">

:::tip 恭喜！菜单处理成功
`动态添加路由`、`左侧动态菜单`，二者不同，又都已处理好：

- 共用同 1 组数据，即 `接口回文数据`
- 实现 `不同种类的路由挂载`
- 实现 `二级/多级大屏` 在 `子菜单渲染`

一路跟到这里的伙伴辛苦呀，我们一起把 `动态路由` 和 `动态菜单` 做好啦 ~ 开心吧 :grinning:  
`登录后刷新一下页面` 试试？:scream:
:::

## libs > router-util.js

#### 函数 `menuListHanding`：遍历菜单数据，将 `原本不应挂载在根菜单` 的数据，`重新挂载` 到相应位置

```javascript
import Vue from 'vue'

// @函数：遍历菜单数据，将"原本不应挂载在根菜单"的数据，重新挂载到相应位置
export const menuListHanding = (menuList) => {
  // 1.copy一份menuList，以便递归函数用
  const menuListOrg = JSON.parse(JSON.stringify(menuList))
  // 2.递归函数：比对menuList和menuListOrg，挂载数据到menuList
  const handleData = (list, listOrg) => {
    list.forEach((menu, i) => {
      listOrg.forEach((data) => {
        // 有meta里有parentId且parentId与另一个meta里的id相同 -> copy并删除parentId键 -> 将copy塞入meta
        if (
          data.meta.parentId !== undefined &&
          menu.meta.id === data.meta.parentId
        ) {
          var dataCopy = JSON.parse(JSON.stringify(data))
          Vue.delete(dataCopy.meta, 'parentId')
          menu.children.push(dataCopy)
        }
      })
      // 连同新挂载的数据一起根据sort排序，不可忽略否则新挂载到菜单的数据顺序有误
      menu.children.sort(arraySort('sort', 'desc'))
      handleData(menu.children, listOrg)
    })
  }
  handleData(menuList, menuListOrg)
  // 3.最外层菜单做筛选
  menuList = menuList.filter((menu) => {
    return !menu.meta.notInMenu === true
  })
  // console.log(menuList);
  return menuList
}
```

<a href="https://github.com/simon9124/iview-dynamicRouter/blob/master/src/libs/router-util.js#LC215" target="_blank">`router-util.js` 完整代码 →</a>

## router > index.js

#### `刷新页面` 时调用 `vuex` 中的`getRouters`，解决刷新页面时左侧菜单的渲染问题：

```javascript
router.beforeEach((to, from, next) => {
  ...
  } else if (token && to.name === LOGIN_PAGE_NAME) {
    next({ name: homeName }) // 已登录且要跳转的页面是登录页 -> 跳转到homeName页
  } else {
    // 剩余情况：已登录且要跳转的页面不是登录页
    if (store.state.user.hasGetInfo) {
      turnTo(to, store.state.user.access, next)
    } else {
      store
        .dispatch('getUserInfo').then((user) => {
          store.dispatch('getRouters').then((res) => { // 同 getUserInfo 方法，每次刷新页面都会重新调用
            turnTo(to, user.access, next)
          })
        })
        .catch(() => {...})
    }
  }
})
```

- 同时，还需在 `store > module > app.js` 更新 `getRouters` 方法，`刷新页面` 时 **路由不发生改变，无需调用接口**，从 **localStorage 获取数据，进行处理后，渲染到左侧菜单** 即可

```javascript
// 获取动态路由数据
getRouters({ dispatch, commit, rootState }, routes) {
  return new Promise((resolve, reject) => {
    var gotRouter = []; // 设置动态路由
    if (localRead("dynamicRouter-template") === "") {
      /* localStorage里dynamicRouter值为空 -> 没有路由数据 -> 获取路由数据 */
      ...
    } else {
      /* 有路由数据 -> 直接从localStorage里面获取 */
      console.log("获取路由：从localStorage");
      /* 1.动态路由数据 */
      gotRouter = filterAsyncRouter(
        JSON.parse(localRead("dynamicRouter-template"))
      ); // 过滤路由，路由组件转换
      console.log("动态路由数据：", gotRouter);
      /* 2.处理菜单数据 */
      var menuList = JSON.parse(JSON.stringify(gotRouter));
      menuList = menuListHanding(menuList); // 将"原本不应挂载在根菜单"的数据，重新挂载到相应位置
      console.log("左侧动态菜单：", menuList);
      /* 3.提交到 setMenuList，修改state.menuList */
      commit("setMenuList", {
        menuList: menuList,
        access: rootState.user.access
      });
      resolve();
    }
  });
}
```
