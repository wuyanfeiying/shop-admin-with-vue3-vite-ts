/*
 * @Date: 2023-08-12 11:29:24
 * @LastEditors: wuyanfeiying
 * @desc: element plus 第三方UI组件
 */

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import { App } from 'vue'

export default {
  install (app:App) {
    app.use(ElementPlus, { size: 'small', zIndex: 2000, locale: zhCn })
  }
}
