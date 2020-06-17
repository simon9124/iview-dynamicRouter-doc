# 调试

在 `路由改造` 中，我们将对 `路由表` 及 `路由挂载` 进行改造，开发过程中会产生众多临时 bug，需要我们不断调试，以下为标准的调试过程，可解决绝大多数临时 bug 并 `重置路由`：

- 1. 打开浏览器 `F12`
- 2. Application > Local Storage > 清空 `dynamicRouter-template`
- 3. Application > Cookies > 清空 `token-dynamicRouter`
- 4. 刷新页面，此时应回到登录页，路由表已重新初始化，即可重新调试代码
