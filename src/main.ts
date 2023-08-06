/*
 * @Date: 2023-08-01 19:43:56
 * @LastEditors: wuyanfeiying
 */
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { store, key } from './store'
import './styles/index.scss'

createApp(App)
  .use(router)
  .use(store, key)
  .mount('#app')
