# 路由改造

<a :href="$withBase('/develop/routerData/')">路由数据处理</a>、`路由改造`、`菜单处理` 是整个开发步骤的核心部分。`路由改造` 时，需要开发者理清其完整的思路，`手动添加相关路由` 并适时 `初始化路由表`:

<img class="img-margin-top" :src="$withBase('/assets/路由改造.png')">

- libs > <a :href="$withBase('/develop/routerRemould/#libs-router-util-js')">router-util.js</a> / <a href="https://github.com/simon9124/iview-dynamicRouter/blob/master/src/store/module/app.js" target="_blank">完整代码 →</a>

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
