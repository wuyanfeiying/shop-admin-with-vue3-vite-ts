/*
 * @Date: 2023-08-12 15:51:07
 * @LastEditors: wuyanfeiying
 * @desc: 商品相关 路由
 */

import { RouteRecordRaw, RouterView } from 'vue-router'

const routes: RouteRecordRaw = {
  path: 'product',
  name: 'product',
  component: RouterView, // 占位 引入 router-view
  meta: {
    title: '商品',
    requiresAuth: true
  },
  children: [
    {
      path: 'prodcut_list',
      name: 'prodcut_list',
      component: () => import('@/views/product/list/index.vue'),
      meta: {
        title: '商品列表'
      }
    },
    {
      path: 'add_product',
      name: 'add_product',
      component: () => import('@/views/product/add/index.vue'),
      meta: {
        title: '添加商品'
      }
    },
    {
      path: 'product_classify',
      name: 'product_classify',
      component: () => import('@/views/product/classify/index.vue'),
      meta: {
        title: '商品分类'
      }
    },
    {
      path: 'product_attr',
      name: 'product_attr',
      component: () => import('@/views/product/attr/index.vue'),
      meta: {
        title: '商品规格'
      }
    },
    {
      path: 'product_reply',
      name: 'product_reply',
      component: () => import('@/views/product/reply/index.vue'),
      meta: {
        title: '商品评论'
      }
    }
  ]
}

export default routes
