/*
 * @Date: 2023-08-19 15:01:52
 * @LastEditors: wuyanfeiying
 */
import { App } from 'vue'
import Component from './index.vue'

export default {
  install (app: App) {
    app.component('AppCard', Component)
  }
}
