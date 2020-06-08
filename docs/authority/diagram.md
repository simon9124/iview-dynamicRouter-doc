---
sidebarDepth: 0
---

# 逻辑关系

基础的权限管理，包含 <a :href="$withBase('/authority/user.html')">用户管理</a> 、<a :href="$withBase('/authority/role.html')">角色管理</a> 、<a :href="$withBase('/authority/menu.html')">菜单管理</a> 3 部分：

- `user`和`role` 1 对多，`role`和`menu` 1 对多
- 在 <a :href="$withBase('/authority/user.html')">用户管理</a> 界面维护 `用户-角色` 关系
- 在 <a :href="$withBase('/authority/role.html')">角色管理</a> 界面维护 `角色-菜单` 关系

<img class="img-margin-top" :src="$withBase('/assets/权限管理_关系图.png')">
