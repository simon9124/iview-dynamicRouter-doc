# iView-DynamicRouter

<a href="https://github.com/iview/iview-admin/tree/template" target="_blank"><img src="https://img.shields.io/badge/iview--admin-template-brightgreen"></a>

<a href="https://github.com/simon9124/iview-dynamicRouter" target="_blank">iView-DynamicRouter</a> 基于 <a href="https://github.com/iview/iview-admin/tree/template" target="_blank">iview-admin(branch:template)</a>，由“后端动态提供路由数据，经前端处理后生成动态路由和菜单”的【后端动态路由模板】，内置“权限管理”业务模型，可任意调整左侧菜单栏、修改其相关权限、监听当前路由和菜单，是一套更安全、更智能的后台管理系统模板。

该文档为 **配置文档**，如果您想快速使用，专注于该文档 并 **配置好相关数据回文** 即可运行 ~ 如果想和我一起，从 **iview-admin** 的原始框架一步步实现 **iView-DynamicRouter**，请看 <a :href="$withBase('/develop/axios/')" target="_blank">**开发指南 →**</a>

::: tip Mock Data
为方便开发和演示，当前项目由 <a href="http://mockjs.com/" target="_blank">mockjs</a> 模拟接口并返回模拟路由数据
:::

## 功能介绍

这里总结相比 iview-admin 原架构追加的新功能：

```bash
- 动态路由数据
  - 路由改造（静态路由+动态路由）
  - 路由数据处理
  - 手动添加路由
  - 路由清空
  - 路由监听

- 动态菜单渲染
  - 菜单数据处理（大屏路由在二级/多级菜单）
  - 菜单监听

- 动态模拟数据mockData
  - 用户列表、角色列表、路由列表、路由层级

- 权限管理
  - 用户管理（增删改查、用户1对多绑定角色）
  - 角色管理（增删改查、角色1对多绑定菜单）
  - 菜单管理（增删改查、修改层级、修改上级目录）
  - 纯前端也可控制路由权限
```

## 目录结构

整体目录结构 iview-admin 原架构相同，部分内容有改动：

```bash
- config  开发相关配置
- public  打包所需静态资源
- src
  - api  AJAX请求   -> 追加：动态获取路由方法
  - assets  项目静态资源
  - icons  自定义图标资源
  - images  图片资源
  - components  业务组件
  - config  项目运行配置
  - directive  自定义指令
  - libs  封装工具函数   -> 追加：若干路由数据处理函数
  - locale  多语言文件
  - mock  mock模拟数据   -> 追加：路由列表、路由层级、角色列表 等数据
  - router  路由配置   -> 有较多改动，路由改造
  - store  Vuex配置   -> 有较多改动，菜单渲染改造
  - view  页面文件   -> 追加：template.vue 和 screent.vue 页面模板
  - tests  测试相关
```

## 安装使用

```bash
# 克隆项目
git clone https://github.com/simon9124/iview-dynamicRouter

# 进入项目目录
cd vue-element-admin

# 安装依赖
npm install

# 本地开发 启动项目
npm run dev
```

启动完成后，在控制台可监听【当前路由】和【左侧菜单】：

<img :src="$withBase('/assets/控制台查看.png')">

权限管理 - 菜单管理，可任意新增/更新菜单、修改层级、修改上级目录：

<img :src="$withBase('/assets/截图预览_菜单管理.png')">

权限管理 - 角色管理，可任意新增/更新角色、修改角色关联的菜单：

<img :src="$withBase('/assets/截图预览_角色管理.png')">

权限管理 - 用户管理，可任意新增/更新用户、修改用户关联的角色：

<img :src="$withBase('/assets/截图预览_用户管理.png')">

实现路由权限控制：

<img :src="$withBase('/assets/截图预览_路由权限控制.png')">
