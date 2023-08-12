/*
 * @Date: 2023-08-12 16:25:02
 * @LastEditors: wuyanfeiying
 * @desc: 媒体相关 路由
 */

import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw = {
  path: 'media',
  name: 'media',
  component: () => import('@/views/media/index.vue')
}

export default routes
