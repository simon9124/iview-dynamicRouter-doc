# axios 改造

对 axios 进行改造，使其更符合后端的回文格式：

- libs > <a :href="$withBase('/develop/axios/#axios-js')">axios.js</a> / <a href="https://github.com/simon9124/iview-dynamicRouter/blob/master/src/libs/axios.js" target="_blank">完整代码 →</a>
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

## login.js

## user.js

## login.vue
