/*
 * @Date: 2023-07-31 20:17:42
 * @LastEditors: wuyanfeiying
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    eslintPlugin({
      // 配置文件
      cache: false // 禁用 eslint 缓存
    })
  ]
})
