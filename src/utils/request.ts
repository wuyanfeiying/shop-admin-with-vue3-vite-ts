/*
 * @Date: 2023-08-06 19:22:18
 * @LastEditors: wuyanfeiying
 */
import axios from 'axios'

const request = axios.create({
  baseURL: 'http://yapi.fed.lagounews.com/'
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

export default request
