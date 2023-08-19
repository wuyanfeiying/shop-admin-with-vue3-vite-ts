/*
 * @Date: 2023-08-19 15:03:02
 * @LastEditors: wuyanfeiying
 */
import { App } from 'vue'
import Component from './index.vue'

export default {
  install (app: App) {
    app.component('AppDialogForm', Component)
  }
}
