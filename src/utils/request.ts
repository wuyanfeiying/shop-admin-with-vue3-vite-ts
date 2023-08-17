/*
 * @Date: 2023-08-06 19:22:18
 * @LastEditors: wuyanfeiying
 */
import { store } from '@/store'
import axios, { AxiosRequestConfig } from 'axios'
import { ElMessage } from 'element-plus'

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

// 响应拦截器
request.interceptors.response.use(function (response) {
  // 统一处理接口响应错误，比如 token过期无效、服务器异常等
  if (response.data.status && response.data.status !== 200) {
    ElMessage.error(response.data.msg || '请求失败，请稍后重试')
    // 手动返回一个 promise 异常
    return Promise.reject(response.data)
  }
  return response
}, function (error) {
  return Promise.reject(error)
})

export default async <T = any> (config:AxiosRequestConfig) => {
  const res = await request(config)
  return (res.data.data || res.data) as T
}
