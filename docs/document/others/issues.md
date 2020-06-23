# 常见问题

:::tip
确保非下列问题时，欢迎反馈到 issues，或加我微信(power_simon)交流问题
:::

## 登录失败

确保**用户名-密码**无误后，在控制台查看报错信息，优先检查**前端组件路径正确与否**

> ，前端组件路径错误会导致组件挂载失败，从而影响登录，需清空动态路由：
>
> - 打开浏览器 F12
> - Application > Local Storage > 清空 dynamicRouter-template
> - Application > Cookies > 清空 token-dynamicRouter
> - 刷新页面，此时应回到登录页，路由表已重新初始化，即可重新尝试登录

若后台接口回文格式有误，在**数据库删除错误数据**即可

<a :href="$withBase('/document/router/example.html')">路由 api 配置示例 →</a>

## 没有菜单栏

如果已经登录成功，优先检查**该用户对应的角色是否绑定了菜单**，并打开控制台，查看**动态路由和动态菜单与实际是否一致**

## mockData 联调失败

重启服务再试试，不然就是配置问题

## 使用 sass 报错

错误：Modele build failed: TypeError: this.getResolve is not a function...

<img :src="$withBase('/assets/使用sass报错.png')">

错误原因：sass-loader 版本过高导致编译错误

解决办法：将 sass-loader 版本调至 7.3.1

- 1.方法一
  删除文件 node_modules；
  将文件 package.json 中的 sass-loader 版本改为 7.3.1
  运行 npm install 重新安装项目依赖
  安装项目依赖 ：npm install
  启动项目：npm run dev

- 2.方法二
  卸载 sass-loader：npm uninstall sass-loader
  安装 sass-loader：npm install sass-loader@7.3.1 --save-dev
  启动项目：npm run dev
