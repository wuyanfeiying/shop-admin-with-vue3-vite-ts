/*
 * @Date: 2023-08-12 15:51:07
 * @LastEditors: wuyanfeiying
 * @desc: 商品相关 路由
 */

import { RouteRecordRaw, RouterView } from 'vue-router'

const routes: RouteRecordRaw = {
  path: '/product',
  name: 'product',
  component: RouterView, // 占位 引入 router-view
  children: [
    {
      path: 'prodcut_list',
      name: 'prodcut_list',
      component: () => import('@/views/product/list/index.vue')
    },
    {
      path: 'prodcut_classify',
      name: 'prodcut_classify',
      component: () => import('@/views/product/classify/index.vue')
    },
    {
      path: 'prodcut_attr',
      name: 'prodcut_attr',
      component: () => import('@/views/product/attr/index.vue')
    },
    {
      path: 'prodcut_reply',
      name: 'prodcut_reply',
      component: () => import('@/views/product/reply/index.vue')
    }
  ]
}

export default routes
