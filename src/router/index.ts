/*
 * @Date: 2023-08-06 14:34:44
 * @LastEditors: wuyanfeiying
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import AppLayout from '@/layout/AppLayout.vue'
import mediaRoutes from './modules/media'
import orderRoutes from './modules/order'
import permissionRoutes from './modules/permission'
import productRoutes from './modules/product'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: AppLayout,
    children: [
      {
        path: '', // 默认子路由
        name: 'home',
        component: () => import('../views/home/index.vue')
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

export default router
