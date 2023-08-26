/*
 * @Date: 2023-08-26 13:34:41
 * @LastEditors: wuyanfeiying
 */
import { App } from 'vue'
import Component from './index.vue'

export default {
  install (app: App) {
    app.component('AppTextEditor', Component)
  }
}
