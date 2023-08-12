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
  children: [
    {
      path: 'order_list',
      name: 'order_list',
      component: () => import('@/views/order/list/index.vue')
    },
    {
      path: 'order_offline',
      name: 'order_offline',
      component: () => import('@/views/order/offline/index.vue')
    }
  ]
}

export default routes
