/*
 * @Date: 2023-07-31 20:17:42
 * @LastEditors: wuyanfeiying
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint'
import vueJsx from '@vitejs/plugin-vue-jsx'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  // 项目的目标浏览器兼容性配置
  // 可选值："chrome"、"edge"、"firefox"、"safari"、"ios"、"android"等
  // 更多配置选项请参考：https://vitejs.dev/config/#target
  build: {
    target: ['edge90', 'chrome90', 'firefox90', 'safari15']
  },
  plugins: [
    vue(),
    eslintPlugin({
      // 配置选项
      cache: false // 禁用 eslint 缓存
    }),
    vueJsx({
      // 配置选项
    })
  ],
  resolve: {
    alias: {
      // 绝对路径
      '@': path.join(__dirname, 'src')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/styles/variables.scss";'
      }
    }
  }
  // server: {
  //   proxy: {
  //     // 选项写法
  //     '/api': {
  //       // /api/admin => http://yapi.fed.lagounews.com/api/admin/login
  //       target: 'https://shop.fed.lagounews.com/api/admin', // 代理的目标地址
  //       changeOrigin: true
  //     }
  //   }
  // }
})
