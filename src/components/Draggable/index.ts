/*
 * @Date: 2023-08-19 15:09:34
 * @LastEditors: wuyanfeiying
 */
import { App } from 'vue'
import Component from './index.vue'

export default {
  install (app: App) {
    app.component('AppDraggable', Component)
  }
}
