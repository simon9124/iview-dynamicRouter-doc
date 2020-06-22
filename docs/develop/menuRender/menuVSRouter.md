# 菜单 VS 路由

既然 `iview-admin` 已经封装好了，菜单难道不就是路由？

—— 是，但又不完全是，特别当你的菜单有更多定制化需求时，如：

- 二级/多级菜单下的大屏
- 二级/多级菜单下的外链

<img style="width:600px" :src="$withBase('/assets/菜单改造_大屏路由.png')">

大屏路由如上图配置方法，而子菜单配置如下图：

<img style="width:600px" :src="$withBase('/assets/菜单改造_二级菜单路由.png')">

显然~当前情况是无法满足 `二级/多级菜单下的大屏路由` 的，`外链` 同理。因此需要我们对 `处理好的路由数据` 再处理，转换成 `菜单数据`