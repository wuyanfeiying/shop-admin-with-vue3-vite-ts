/*
 * @Date: 2023-08-06 14:34:44
 * @LastEditors: wuyanfeiying
 */
import nprogress from 'nprogress'
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import AppLayout from '@/layout/AppLayout.vue'
import mediaRoutes from './modules/media'
import orderRoutes from './modules/order'
import permissionRoutes from './modules/permission'
import productRoutes from './modules/product'

import 'nprogress/nprogress.css'
import { store } from '@/store'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: AppLayout,
    children: [
      {
        path: '', // 默认子路由
        name: 'home',
        component: () => import('../views/home/index.vue'),
        meta: {
          title: '首页',
          requiresAuth: true
        }
      },
      mediaRoutes,
      orderRoutes,
      permissionRoutes,
      productRoutes
    ]
  },

  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/index.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(), // 路由模式
  // 路由规则
  routes
})

router.beforeEach((to) => {
  nprogress.start() // 开始加载进度条

  if (to.meta.requiresAuth && !store.state.user) {
    // 此路由需要授权，请检查是否已登录
    // 如果没有，则重定向到登录页面
    return {
      path: '/login',
      // 保存我们所在的位置，以便以后再来
      query: { redirect: to.fullPath }
    }
  }
})

router.afterEach(() => {
  nprogress.done() // 结束进度条
})
export default router
