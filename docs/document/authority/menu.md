<!-- ---
sidebarDepth: 0
--- -->

# 菜单管理

包含对菜单的增、删、改、查：
<img class="img-margin-top" :src="$withBase('/assets/菜单管理_界面.png')">

## 功能总览

菜单管理是权限管理的核心部分，对任意菜单进行增删改查的同时，包含丰富的功能：

- 可新建任意 `模块菜单` 或 `页面菜单` 或 `外链`，新建后不可更改类型
- 可选择任意 `上级`，上级根据 `模块菜单` 自动生成
- 可选择任意 `层级`，详见 <a :href="$withBase('/document/router/')">路由层级</a>
- 可配置任意 `name` 、`url` 、`展现名` 、`组件路径` 、`图标`
- 可对菜单进行任意 `排序`

<img class="img-margin-top" :src="$withBase('/assets/菜单管理_选择上级.png')">
<img :src="$withBase('/assets/菜单管理_选择层级.png')">
<img :src="$withBase('/assets/菜单管理_选择图标.png')">

## API

菜单的数据回文格式较为复杂，不同类型的菜单配置细节有差异，详见 <a :href="$withBase('/document/router/api.html')">api 回文格式</a> 和 <a :href="$withBase('/document/router/example.html')">示例</a>
