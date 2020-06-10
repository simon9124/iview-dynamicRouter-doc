# mockData

追加模拟数据，并注册相关事件：

- mock > <a :href="$withBase('/develop/mockData/#mock-role-js')">role.js</a> / <a href="https://github.com/simon9124/iview-dynamicRouter/blob/master/src/mock/role.js" target="_blank">完整代码 →</a>
- mock > <a :href="$withBase('/develop/mockData/#mock-data-js')">data.js</a> / <a href="https://github.com/simon9124/iview-dynamicRouter/blob/master/src/mock/data.js" target="_blank">完整代码 →</a>
- mock > <a :href="$withBase('/develop/mockData/#mock-index-js')">index.js</a> / <a href="https://github.com/simon9124/iview-dynamicRouter/blob/master/src/mock/index.js" target="_blank">完整代码 →</a>
- api > <a :href="$withBase('/develop/mockData/#api-data-js')">data.js</a> / <a href="https://github.com/simon9124/iview-dynamicRouter/blob/master/src/api/data.js" target="_blank">完整代码 →</a>

## mock > role.js

#### 1.追加 `角色列表`：

```javascript
// 角色列表
const roleList = [
  {
    name: 'super_admin',
    title: '超级管理员',
    menus: ['doc','control'...],
    id: '1',
    description: '超级管理员，默认拥有全部功能，不可删除',
  },
  {
    name: 'visitor',
    title: '访客',
    menus: ['control','multilevel'...],
    id: '2',
    description: '访客，拥有部分功能，可删除',
  },
]

export { roleList }
```

<a :href="$withBase('/document/authority/role.html#回文格式')">角色列表配置 api →</a>

#### 2.追加 `路由层级`：

```javascript
// 路由层级
const menuLevel = [
  {
    label: '菜单显示该页面选项，页面不含菜单栏',
    value: '1',
  },
  {
    label: '菜单显示该页面选项，页面含菜单栏',
    value: '2',
  },
  {
    label: '菜单隐藏该页面选项，页面不含菜单栏',
    value: '3',
  },
]

export { menuLevel }
```

#### 3.追加 `路由列表`：

```javascript
// 路由列表
const menuList = [
  {
    id: "doc",
    name: "doc",
    title: "文档",
    url: "https://simon9124.github.io/iview-dynamicRouter-doc/",
    path: "outSidePath",
    sort: 28,
    parentId: "root",
    ico: "ios-book",
    isOutSide: true,
    showLevel: "1",
    description: "在线文档"
  },
  {
    id: "control",
    name: "control",
    title: "驾驶舱",
    url: "control",
    path: "screen",
    sort: 26,
    parentId: "root",
    ico: "md-laptop",
    isOutSide: false,
    showLevel: "1",
    description: "一级大屏"
  },
  ...
];

export { menuList }
```

<a :href="$withBase('/document/router/api.html')">路由列表配置 api →</a>

<a href="https://github.com/simon9124/iview-dynamicRouter/blob/master/src/mock/role.js" target="_blank">`role.js` 完整代码 →</a>

## mock > data.js

#### 1.导入 `userList` 、`roleList`、`menuList` ：

```javascript
import {
  userList, // 用户列表
  roleList, // 角色列表
  menuList, // 菜单列表
} from './role'
```

#### 2.相关事件和数据回文 ：

```javascript
// 获取用户列表
export const getUserList = (req) => {
  return { status: 200, message: '成功！', data: userList }
}

// 获取角色列表
export const getRoleList = (req) => {
  return { status: 200, message: '成功！', data: roleList }
}

// 获取菜单列表
export const getAllMenus = (req) => {
  return { status: 200, message: '成功！', data: menuList }
}
```

<a href="https://github.com/simon9124/iview-dynamicRouter/blob/master/src/mock/data.js" target="_blank">`data.js` 完整代码 →</a>

## mock > index.js

#### 注册相关事件 ：

```javascript
import { getUserList, getRoleList, getAllMenus } from "./data";
...
Mock.mock(/\/get_user_list/, getUserList);
Mock.mock(/\/get_role_list/, getRoleList);
Mock.mock(/\/get_all_menus/, getAllMenus);
...
export default Mock;
```

<a href="https://github.com/simon9124/iview-dynamicRouter/blob/master/src/mock/index.js" target="_blank">`index.js` 完整代码 →</a>

## api > data.js

#### 相关接口：

```javascript
// 获取用户数据
export const getUserList = () => {
  return axios.request({ url: 'get_user_list', method: 'get' })
}

// 获取角色数据
export const getRoleList = () => {
  return axios.request({ url: 'get_role_list', method: 'get' })
}

// 获取菜单数据
export const getAllMenus = (token) => {
  return axios.request({ url: 'get_all_menus', method: 'get' })
}
```

<a href="https://github.com/simon9124/iview-dynamicRouter/blob/master/src/api/data.js" target="_blank">`data.js` 完整代码 →</a>
