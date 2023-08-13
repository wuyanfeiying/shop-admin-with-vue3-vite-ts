/*
 * @Date: 2023-08-06 15:26:14
 * @LastEditors: wuyanfeiying
 * @desc: https://vuex.vuejs.org/zh/guide/typescript-support.html
 */
import { createStore, Store, useStore as baseUseStore } from 'vuex'
import { InjectionKey } from 'vue'

// 为 store state 声明类型
export interface State {
  isCollapse: Boolean
}

// 定义 injection key
export const key: InjectionKey<Store<State>> = Symbol('store')

// 创建一个新的 store 实例
export const store = createStore<State>({
  state () {
    return {
      isCollapse: false
    }
  },
  mutations: {
    setIsCollapse (state, payload) {
      state.isCollapse = payload
    }
  }
})

// 定义自己的 `useStore` 组合式函数
export function useStore () {
  return baseUseStore(key)
}
