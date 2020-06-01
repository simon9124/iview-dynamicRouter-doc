# 示例

根据 <a :href="$withBase('/router')">3 种路由层级</a>，提供 4 个完整的路由配置示例：

## main 组件内，父包含多个子

- `showLevel` 为 `2`，`isOutSide` 为 `false`
- 父路由与子路由分开存储
- 父路由的 `path` 为 `Main（根菜单）` 或 `parentView（非根菜单）`
- 父路由的 `ico` 不能为空（无论是否为根菜单）
- 子路由的 `parenrId` 与父路由的 `id` 相同

```javascript
const menuList = [
  {
    id: 'multilevel', // 父路由id与子路由parentId相同
    name: 'multilevel',
    title: '多级菜单',
    url: 'multilevel',
    path: 'Main', // 如果是根菜单，父路由前端组件必须是Main
    sort: 24,
    parentId: 'root', // 如果是根菜单，父路由parentId必须是root
    ico: 'md-menu', // 父路由ico不能为空
    isOutSide: false,
    showLevel: '2',
  },
  {
    id: 'level_2_1',
    name: 'level_2_1',
    title: '二级-1',
    url: 'level_2_1',
    path: 'template',
    sort: 10, // 子路由sort仅负责子路由排序
    parentId: 'multilevel', // 子路由parentId与父路由id相同
    ico: 'md-funnel',
    isOutSide: false,
    showLevel: '2',
  },
  {
    id: 'level_2_3',
    name: 'level_2_3',
    title: '二级-3',
    url: 'level_2_3',
    path: 'template',
    sort: 6, // 子路由sort仅负责子路由排序
    parentId: 'multilevel', // 子路由parentId与父路由id相同
    ico: 'md-funnel',
    isOutSide: false,
    showLevel: '2',
  },
]
```

::: tip 根菜单 vs 非根菜单
根菜单没有父级菜单，非根菜单有父级菜单，非根菜单与其父、子路由构成 `父子孙 3 级路由`。

如图：`多级菜单` 即为 `根菜单` ，`二级-2` 即为 `非根菜单`
<img class="img-margin-top" :src="$withBase('/assets/根菜单&非根菜单.png')">
:::

## main 组件内，父包含 1 个子

- `showLevel` 为 `2`，`isOutSide` 为 `false`
- 父路由与子路由合并为 1 条数据存储，以便菜单管理时新增和更新
- 父路由的 `name` `url` 均与子路由合并，用 `/` 连接

```javascript
const menuList = [
  {
    id: 'singleMenu',
    name: 'single/menu', // 父路由name/子路由name，数据处理时拆分
    title: '单极菜单',
    url: 'single/menu', // 父路由url/子路由url，数据处理时拆分
    path: 'template',
    sort: 22,
    parentId: 'root',
    ico: 'md-document',
    isOutSide: false,
    showLevel: '2',
  },
]
```

## 非 main 组件内，单独页面

- `showLevel` 为 `1` 或 `3`，`isOutSide` 为 `false`
- `showLevel:1` - 菜单显示该页面选项
- `showLevel:3` - 菜单隐藏该页面选项

```javascript
const menuList = [
  {
    id: 'control',
    name: 'control',
    title: '驾驶舱',
    url: 'control',
    path: 'screen',
    sort: 26,
    parentId: 'root',
    ico: 'md-laptop',
    isOutSide: false,
    showLevel: '1',
  },
]
```

::: tip 作为子路由的单独页面
parentId 不是 root——即作为子路由时，仍可作为非 main 组件内的单独页面，并且出现在左侧菜单中。其方法与<a :href="$withBase('/router/example.html#main-组件内，父包含多个子')">父子路由</a>相同，只需将 parentId 配置为父级路由的 id 即可。
:::

## 外链，新页面打开

- `isOutSide` 为 `true`
- `showLevel` 任意不影响配置，外链默认都会在菜单栏显示，且在新页面打开
- `path` 任意但不能为空，否则会影响父级路由的重定向，建议设置为一个常量

```javascript
const menuList = [
  {
    id: 'doc',
    name: 'doc',
    title: '文档',
    url: 'https://simon9124.github.io/iview-dynamicRouter-doc/', // url为外链链接
    path: 'outSidePath', // path值任意但不能为空，否则影响父级路由的重定向 ->设置为任意常量
    sort: 28,
    parentId: 'root',
    ico: 'ios-book',
    isOutSide: true, // isOutSide必须是true
    showLevel: '1',
  },
]
```

::: tip 作为子路由的外链
同<a :href="$withBase('/router/example.html#非-main-组件内，单独页面')">单独页面</a>，parentId 不是 root——即作为子路由时，仍可作为外链，并且出现在左侧菜单中。其方法与<a :href="$withBase('/router/example.html#main-组件内，父包含多个子')">父子路由</a>相同，只需将 parentId 配置为父级路由的 id 即可。

作为子路由且显示在菜单栏的【单独页面】和【外链】:
<img class="img-margin-top" :src="$withBase('/assets/作为子路由且显示在菜单栏的【单独页面】和【外链】.png')">
:::
