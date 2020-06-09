# axios 改造

对 axios 进行改造，使其更符合后端的回文格式：

- libs > <a :href="$withBase('/develop/axios/#axios-js')">axios.js</a> / <a href="https://github.com/simon9124/iview-dynamicRouter/blob/master/src/libs/axios.js" target="_blank">完整代码 →</a>
- mock > role.js
- mock > login.js
- store > user.js
- view > login.vue

## axios.js

#### 1.导入 `getToken` 和 `Message` 两个方法：

```javascript
import { getToken } from './util' // 追加：获取token
import { Message } from 'iview' // 追加：全局提示消息
```

#### 2.请求拦截：将 `token` 放入请求头

```javascript
instance.interceptors.request.use(
  (config) => {
    // 追加：如果响应含有token，则让每个请求携带token，将token放入请求头的Authorization
    getToken() && (config.headers.Authorization = 'Bearer ' + getToken())
    // 添加全局的loading...
    if (!Object.keys(this.queue).length) {
      // Spin.show() // 不建议开启，因为界面不友好
    }
    this.queue[url] = true
    return config
  },
  (error) => {...}
)
```

#### 3.响应拦截：根据 `res.status` 提示全局消息

```javascript
instance.interceptors.response.use(
  (res) => {
    // 追加：根据 res.status 弹出全局消息
    switch (res.status) {
      case 200: // 200 -> 服务器连接正确
        if (res.data.status !== true && res.data.status !== 200) {
          // 全局提示5秒的错误讯息
          Message.error({ content: res.data.message, duration: 5 })
        }
        break
      case 500: // 500 -> 服务器错误
        console.log(res.status.message)
        Message.error({
          content: '服务器异常，请联系技术人员',
          duration: 5,
        })
        break
    }
    this.destroy(url)
    const { data, status } = res
    return { data, status }
  },
  (error) => {...}
)
```

<a href="https://github.com/simon9124/iview-dynamicRouter/blob/master/src/libs/axios.js" target="_blank">`axios.js` 完整代码 →</a>

## role.js

#### 用更符合后端回文规范的 `userList` 代替原有的 `USER_MAP`：

```javascript
// 用户列表
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

export { userList }
```

## login.js

#### 1.导入 `store` 和 `userList`：

```javascript
import store from '@/store' // 追加：store
import { userList } from './role' // 追加：mockData用户列表
```

#### 2.根据 `userList` 生成 `USER_MAP`：

```javascript
// 改造：USER_MAP
const getUserMap = (userList) => {
  const USER_MAP = {}
  userList.forEach((user) => {
    USER_MAP[user.name] = user
  })
  return USER_MAP
}
```

#### 3.`login` 模拟接口改造：

```javascript
// 用户登录
export const login = (req) => {
  req = JSON.parse(req.body)
  const USER_MAP = getUserMap(userList)
  if (USER_MAP[req.userName] !== undefined) {
    // 用户名存在，返回200
    return {
      status: 200,
      message: '成功！',
      data: USER_MAP[req.userName].name,
    }
  } else {
    // 用户名不存在，返回500
    return { status: 500, message: '用户名或密码错误！', data: null }
  }
}
```

#### 4.`getUserInfo` 模拟接口改造：

```javascript
// 获取用户信息
export const getUserInfo = (req) => {
  const USER_MAP = getUserMap(userList)
  if (store.state.user.token !== undefined) {
    // 如果token存在，返回200
    return {
      status: 200,
      message: '成功！',
      data: USER_MAP[store.state.user.token],
    }
  }
}
```

## user.js

## login.vue
