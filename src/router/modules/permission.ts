/*
 * @Date: 2023-08-12 15:51:07
 * @LastEditors: wuyanfeiying
 * @desc: 权限相关 路由
 */

import { RouteRecordRaw, RouterView } from 'vue-router'

const routes: RouteRecordRaw = {
  path: 'permission',
  name: 'permission',
  component: RouterView, // 占位 引入 router-view
  meta: {
    title: '权限'
  },
  children: [
    {
      path: 'permission_admin',
      name: 'permission_admin',
      component: () => import('@/views/permission/admin/index.vue'),
      meta: {
        title: '账号管理'
      }
    },
    {
      path: 'permission_role',
      name: 'permission_role',
      component: () => import('@/views/permission/role/index.vue'),
      meta: {
        title: '角色管理'
      }
    },
    {
      path: 'permission_rule',
      name: 'permission_rule',
      component: () => import('@/views/permission/rule/index.vue'),
      meta: {
        title: '规则管理'
      }
    }
  ]
}

export default routes
