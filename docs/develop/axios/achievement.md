---
sidebarDepth: 0
---

# 总结

- 改造了 axios 的 `请求拦截` ，将 `token` 放入请求头
- 改造了 axios 的 `响应拦截` ，根据回文 `提示全局信息`
- 优化了 `userList` 模拟数据及相关模拟接口，便于在 `登录` 和 `用户管理`中使用
- 优化了 `mockjs` 模拟接口方式的用户登录过程

## 页面效果

- 登录效果不变，优化登录过程，登录成功才调用 `getUserInfo` 接口
- 登录失败时，页面给出相应提示

<img class="img-margin-top" :src="$withBase('/assets/axios_登录失败.png')">
