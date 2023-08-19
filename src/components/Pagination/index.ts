/*
 * @Date: 2023-08-19 14:09:08
 * @LastEditors: wuyanfeiying
 */
import { App } from 'vue'
import Component from './index.vue'

export default {
  install (app: App) {
    app.component('AppPagination', Component)
  }
}
