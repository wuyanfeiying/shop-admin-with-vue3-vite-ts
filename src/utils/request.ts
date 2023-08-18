/*
 * @Date: 2023-08-06 19:22:18
 * @LastEditors: wuyanfeiying
 */
import router from '@/router/index'
import { store } from '@/store/index'
import axios, { AxiosRequestConfig } from 'axios'
import { ElMessage, ElMessageBox } from 'element-plus'

const request = axios.create({
  baseURL: import.meta.env.VITE_API_BASEURL
})

// 请求拦截器
request.interceptors.request.use(function (config) {
  // 统一设置用户身份 token
  const user = store.state.user
  if (user && user.token) {
    config.headers.Authorization = `Bearer ${user.token}`
  }
  return config
}, function (error) {
  return Promise.reject(error)
})

// 控制登录过期的锁
let isRefreshing = false
// 响应拦截器
request.interceptors.response.use(function (response) {
  const status = response.data.status

  // 正确的情况
  if (!status || status === 200) {
    return response
  }

  // 错误的情况
  if (status === 410000) {
    if (isRefreshing) return Promise.reject(response)
    isRefreshing = true
    ElMessageBox.confirm('您的登录信息已过期，您可以停留在此页面或确认后重新登录', '登录过期', {
      confirmButtonText: '确认',
      cancelButtonText: '取消'
    }).then(() => {
      // 清除本地的过期状态
      store.commit('setUser', null)
      // 跳转到登录页面
      router.push({
        name: 'login',
        query: {
          redirect: router.currentRoute.value.fullPath
        }
      })
    }).finally(() => {
      isRefreshing = false
    })
    // 在内部消化掉异常
    return Promise.reject(response)
  }

  // 其他情况
  ElMessage.error(response.data.msg || '请求失败，请稍后重试')
  // 手动返回一个 promise 异常
  return Promise.reject(response)
}, function (error) {
  return Promise.reject(error)
})

export default async <T = any> (config:AxiosRequestConfig) => {
  const res = await request(config)
  return (res.data.data || res.data) as T
}
