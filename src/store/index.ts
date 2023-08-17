/*
 * @Date: 2023-08-06 15:26:14
 * @LastEditors: wuyanfeiying
 * @desc: https://vuex.vuejs.org/zh/guide/typescript-support.html
 */
import { createStore, Store, useStore as baseUseStore } from 'vuex'
import { InjectionKey } from 'vue'
import { getItem, setItem } from '@/utils/storage'
import { USER } from '@/utils/constants'
import { IUserInfo } from '@/api/types/common'

const state = {
  isCollapse: false,
  user: getItem<IUserInfo>(USER)
}
// 为 store state 声明类型
// 根据 state的值，推导出类型
export type State = typeof state

// 定义 injection key
export const key: InjectionKey<Store<State>> = Symbol('store')

// 创建一个新的 store 实例
export const store = createStore<State>({
  state,
  mutations: {
    setIsCollapse (state, payload) {
      state.isCollapse = payload
    },

    setUser (state, payload) {
      console.log('🚀 ~ file: index.ts:32 ~ setUser ~ state, payload:', state, payload)
      state.user = payload
      setItem(USER, state.user)
    }
  }
})

// 定义自己的 `useStore` 组合式函数
export function useStore () {
  return baseUseStore(key)
}
