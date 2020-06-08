<!-- ---
sidebarDepth: 0
--- -->

# 角色管理

包含对角色的增、删、改、查，并维护 `角色-菜单` 关系：
<img class="img-margin-top" :src="$withBase('/assets/角色管理_界面.png')">
<img :src="$withBase('/assets/角色管理_编辑.png')">
<img :src="$withBase('/assets/角色管理_关联菜单.png')">

## 回文格式

在 `@/mock/role.js` 里设置了默认的数据回文格式：

```javascript
const userList = [
  {
    name: 'super_admin',
    title: '超级管理员',
    menus: [
      'doc',
      'control',
      'multilevel',
      'level_2_1',
      'level_2_2',
      'level_2_2_1',
      'screen2',
      'level_2_2_2',
      'level_2_3',
      'screen',
      'github',
      'singleMenu',
      'authority',
      'userManage',
      'roleManage',
      'menuManage',
    ],
    id: '1',
    description: '超级管理员，默认拥有全部功能，不可删除',
  },
  {
    name: 'visitor',
    title: '访客',
    menus: [
      'control',
      'multilevel',
      'level_2_1',
      'level_2_2',
      'level_2_2_1',
      'level_2_2_2',
      'level_2_3',
      'screen',
      'singleMenu',
    ],
    id: '2',
    description: '访客，拥有部分功能，可删除',
  },
]
```

## API

| key         | description | use              | type     | mark             |
| ----------- | ----------- | ---------------- | -------- | ---------------- |
| id          | 角色 id     | 主键             | `String` | 必填，不可重复   |
| name        | 角色标识    |                  | `String` | 必填，不可重复   |
| title       | 角色中文名  |                  | `String` | 必填             |
| menus       | 角色菜单    | 对应菜单 id 字段 | `Array`  | 可以为空，1 对多 |
| description | 角色描述    |                  | `String` |                  |
