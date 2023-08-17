/*
 * @Date: 2023-08-06 19:31:17
 * @LastEditors: wuyanfeiying
 * @desc: 公共基础接口封装
 */
import request from '@/utils/request'
import { ILoginInfo, ILoginResponse } from './types/common'

export const getLoginInfo = () => {
  return request<ILoginInfo>({
    method: 'GET',
    url: '/api/admin/login/info'
  })
}

// 获取图片验证码
export const getCaptcha = () => {
  return request<Blob>({
    method: 'GET',
    url: import.meta.env.VITE_API_BASEURL + '/api/admin/captcha_pro',
    params: {
      stamp: Date.now()
    },
    responseType: 'blob' // 请求获取图片数据
  })
}

// 登录
export const login = (data: {
  account: string,
  pwd: string,
  imgcode: string
}) => {
  return request<ILoginResponse>({
    method: 'POST',
    url: '/api/admin/login',
    data
  })
}
