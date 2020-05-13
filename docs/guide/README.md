# iView-DynamicRouter

<a href="https://github.com/iview/iview-admin/tree/template" target="_blank"><img src="https://img.shields.io/badge/iview--admin-template-brightgreen"></a>

<a href="https://github.com/simon9124/iview-dynamicRouter" target="_blank">iView-DynamicRouter</a> 基于 <a href="https://github.com/iview/iview-admin/tree/template" target="_blank">iview-admin(branch:template)</a>，不同的是由后端获取路由表数据，数据经处理后生成动态路由和菜单的【后端动态路由模板】，为后台管理系统增加安全保障。

::: tip Mock Data
为方便开发和演示，当前项目由 <a href="http://mockjs.com/" target="_blank">mockjs</a> 模拟接口并返回模拟路由数据
:::

## 目录结构

整体目录结构与原 iview-admin 相同，部分内容有改动：

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
  - router  路由配置   -> 有较多改动
  - store  Vuex配置   -> 有较多改动
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

<img src="/assets/控制台查看.png">
