/*
 * @Date: 2023-08-19 14:02:54
 * @LastEditors: wuyanfeiying
 */

import { App } from 'vue'
import Component from './index.vue'

export default {
  install (app: App) {
    app.component('PageContainer', Component)
  }
}
