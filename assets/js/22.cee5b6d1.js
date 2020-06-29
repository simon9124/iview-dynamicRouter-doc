(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{196:function(t,s,a){"use strict";a.r(s);var e=a(6),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"iview-dynamicrouter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#iview-dynamicrouter"}},[t._v("#")]),t._v(" iView-DynamicRouter")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/iview/iview-admin/tree/template",target:"_blank"}},[a("img",{attrs:{src:"https://img.shields.io/badge/iview--admin-template-brightgreen"}})])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/simon9124/iview-dynamicRouter",target:"_blank"}},[t._v("iView-DynamicRouter")]),t._v(" 基于 "),a("a",{attrs:{href:"https://github.com/iview/iview-admin/tree/template",target:"_blank"}},[t._v("iview-admin(branch:template)")]),t._v("，由“后端动态提供路由数据，经前端处理后生成动态路由和菜单”的【后端动态路由模板】，内置“权限管理”业务模型，可任意调整左侧菜单栏、修改其相关权限、监听当前路由和菜单，是一套更安全、更智能的后台管理系统模板。")]),t._v(" "),a("p",[t._v("该文档为 "),a("strong",[t._v("配置文档")]),t._v("，如果您想快速使用，专注于该文档 并 "),a("strong",[t._v("配置好相关数据回文")]),t._v(" 即可运行 ~ 如果想和我一起，从 "),a("strong",[t._v("iview-admin")]),t._v(" 的原始框架一步步实现 "),a("strong",[t._v("iView-DynamicRouter")]),t._v("，请看 "),a("a",{attrs:{href:t.$withBase("/develop/axios/"),target:"_blank"}},[a("strong",[t._v("开发指南 →")])])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("Mock Data")]),t._v(" "),a("p",[t._v("为方便开发和演示，当前项目由 "),a("a",{attrs:{href:"http://mockjs.com/",target:"_blank"}},[t._v("mockjs")]),t._v(" 模拟接口并返回模拟路由数据")])]),t._v(" "),a("h2",{attrs:{id:"功能特点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#功能特点"}},[t._v("#")]),t._v(" 功能特点")]),t._v(" "),a("p",[t._v("登录后，"),a("strong",[t._v("不同权限")]),t._v("的用户监听到不同的"),a("strong",[t._v("动态路由")]),t._v("和"),a("strong",[t._v("动态菜单")]),t._v("：")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/assets/gif_登录后在控制台监听.gif")}}),t._v(" "),a("p",[t._v("菜单自由"),a("strong",[t._v("选择上级")]),t._v("、自由"),a("strong",[t._v("增删改")]),t._v("：")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/assets/gif_新增菜单&修改菜单上级.gif")}}),t._v(" "),a("p",[t._v("自由"),a("strong",[t._v("选择菜单的层级")]),t._v("，大屏路由亦可在子菜单挂载：")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/assets/gif_自由选择菜单的层级.gif")}}),t._v(" "),a("p",[t._v("修改“角色-菜单”关联，"),a("strong",[t._v("控制菜单权限")]),t._v("：")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/assets/gif_修改角色-菜单关联.gif")}}),t._v(" "),a("p",[t._v("功能汇总：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("- 动态路由数据\n  - 路由改造（静态路由+动态路由）\n  - 路由数据处理\n  - 手动添加路由\n  - 路由清空\n  - 路由监听\n\n- 动态菜单渲染\n  - 菜单数据处理（大屏路由在二级/多级菜单）\n  - 菜单监听\n\n- 动态模拟数据mockData\n  - 用户列表、角色列表、路由列表、路由层级\n\n- 权限管理\n  - 用户管理（增删改查、用户1对多绑定角色）\n  - 角色管理（增删改查、角色1对多绑定菜单）\n  - 菜单管理（增删改查、修改层级、修改上级目录）\n  - 纯前端也可控制路由权限\n")])])]),a("h2",{attrs:{id:"目录结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#目录结构"}},[t._v("#")]),t._v(" 目录结构")]),t._v(" "),a("p",[t._v("整体目录结构 iview-admin 原架构相同，部分内容有改动：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("- config  开发相关配置\n- public  打包所需静态资源\n- src\n  - api  AJAX请求   -"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" 追加：动态获取路由方法\n  - assets  项目静态资源\n  - icons  自定义图标资源\n  - images  图片资源\n  - components  业务组件\n  - config  项目运行配置\n  - directive  自定义指令\n  - libs  封装工具函数   -"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" 追加：若干路由数据处理函数\n  - locale  多语言文件\n  - mock  mock模拟数据   -"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" 追加：路由列表、路由层级、角色列表 等数据\n  - router  路由配置   -"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" 有较多改动，路由改造\n  - store  Vuex配置   -"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" 有较多改动，菜单渲染改造\n  - view  页面文件   -"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" 追加：template.vue 和 screent.vue 页面模板\n  - tests  测试相关\n")])])]),a("h2",{attrs:{id:"安装使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装使用"}},[t._v("#")]),t._v(" 安装使用")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 克隆项目")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/simon9124/iview-dynamicRouter\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 进入项目目录")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" vue-element-admin\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 安装依赖")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 本地开发 启动项目")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run dev\n")])])]),a("p",[t._v("启动完成后，在控制台可监听【当前路由】和【左侧菜单】：")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/assets/控制台查看.png")}}),t._v(" "),a("p",[t._v("权限管理 - 菜单管理，可任意新增/更新菜单、修改层级、修改上级目录：")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/assets/截图预览_菜单管理.png")}}),t._v(" "),a("p",[t._v("权限管理 - 角色管理，可任意新增/更新角色、修改角色关联的菜单：")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/assets/截图预览_角色管理.png")}}),t._v(" "),a("p",[t._v("权限管理 - 用户管理，可任意新增/更新用户、修改用户关联的角色：")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/assets/截图预览_用户管理.png")}}),t._v(" "),a("p",[t._v("实现路由权限控制：")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/assets/截图预览_路由权限控制.png")}})])}),[],!1,null,null,null);s.default=n.exports}}]);