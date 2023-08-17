/*
 * @Date: 2023-08-12 15:51:07
 * @LastEditors: wuyanfeiying
 * @desc: 订单相关 路由
 */

import { RouteRecordRaw, RouterView } from 'vue-router'

const routes: RouteRecordRaw = {
  path: 'order',
  name: 'order',
  component: RouterView, // 占位 引入 router-view
  meta: {
    title: '订单',
    requiresAuth: true
  },
  children: [
    {
      path: 'order_list',
      name: 'order_list',
      component: () => import('@/views/order/list/index.vue'),
      meta: {
        title: '订单列表'
      }
    },
    {
      path: 'order_offline',
      name: 'order_offline',
      component: () => import('@/views/order/offline/index.vue'),
      meta: {
        title: '离线订购'
      }
    }
  ]
}

export default routes
