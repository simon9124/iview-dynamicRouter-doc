<!-- ---
sidebarDepth: 0
--- -->

# 用户管理

包含对用户的增、删、改、查，并维护 `用户-角色` 关系：
<img class="img-margin-top" :src="$withBase('/assets/用户管理_界面.png')">
<img :src="$withBase('/assets/用户管理_编辑.png')">

## 回文格式

在 `@/mock/role.js` 里设置了默认的数据回文格式：

```javascript
const userList = [
  {
    user_id: '1',
    name: 'goku',
    displayName: '孙悟空',
    phone: '13888888881',
    access: ['super_admin', 'visitor'],
  },
  {
    user_id: '2',
    name: 'trunks',
    displayName: '特兰克斯',
    phone: '13888888882',
    access: ['visitor'],
  },
]
```

## API

| key         | description | use                | type     | mark           |
| ----------- | ----------- | ------------------ | -------- | -------------- |
| user_id     | 用户 id     | 主键               | `String` | 必填，不可重复 |
| name        | 用户名称    | 用户登录名         | `String` | 必填，不可重复 |
| displayName | 用户中文名  |                    | `String` | 必填           |
| phone       | 用户电话    |                    | `String` | 必填           |
| access      | 用户角色    | 对应角色 name 字段 | `Array`  | 必填，1 对多   |
