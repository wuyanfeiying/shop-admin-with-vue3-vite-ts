/*
 * @Date: 2023-08-01 19:43:56
 * @LastEditors: wuyanfeiying
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import { store, key } from './store'
import elementPlus from './plugins/element-plus'

// 加载全局样式
import './styles/index.scss'
const app = createApp(App)
app.use(router)
app.use(store, key)
app.use(elementPlus)

// 自动注册全局组件
const modules = import.meta.glob('./components/**/index.ts')

for (const path in modules) {
  // 根据路径导入组件
  const component = await import(path)

  // 注册组件
  app.use(component.default)
}
app.mount('#app')
