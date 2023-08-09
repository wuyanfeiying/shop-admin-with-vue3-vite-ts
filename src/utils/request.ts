/*
 * @Date: 2023-08-06 19:22:18
 * @LastEditors: wuyanfeiying
 */
import axios, { AxiosRequestConfig } from 'axios'

const request = axios.create({
  baseURL: import.meta.env.VITE_API_BASEURL
})

// 请求拦截器
request.interceptors.request.use(function (config) {
  // 统一设置用户身份 token
  return config
}, function (error) {
  return Promise.reject(error)
})

// 响应拦截器
request.interceptors.response.use(function (response) {
  // 统一处理接口响应错误，比如 token过期无效、服务器异常等
  return response
}, function (error) {
  return Promise.reject(error)
})

export default async <T = any> (config:AxiosRequestConfig) => {
  const res = await request(config)
  return res.data.data as T
}
