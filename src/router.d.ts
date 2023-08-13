// typings.d.ts or router.ts
import 'vue-router'

// 自定义路由中元信息的接口
declare module 'vue-router' {
  // eslint-disable-next-line no-unused-vars
  interface RouteMeta {
    title: String
  }
}
