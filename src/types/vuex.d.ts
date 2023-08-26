/*
 * @Date: 2023-08-06 15:51:14
 * @LastEditors: wuyanfeiying
 * @desc: https://vuex.vuejs.org/zh/guide/typescript-support.html
 */
// eslint-disable-next-line no-unused-vars
import { ComponentCustomProperties } from 'vue'
import { Store } from 'vuex'
import { State } from './store/index'

declare module '@vue/runtime-core' {
  // 为 `this.$store` 提供类型声明
  // eslint-disable-next-line no-unused-vars
  interface ComponentCustomProperties {
    $store: Store<State>
  }
}
