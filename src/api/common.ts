/*
 * @Date: 2023-08-06 19:31:17
 * @LastEditors: wuyanfeiying
 * @desc: 公共基础接口封装
 */
import request from '@/utils/request'
import { ILoginInfo } from './types/common'

export const getLoginInfo = () => {
  return request<ILoginInfo>({
    method: 'GET',
    url: '/api/admin/login/info'
  })
}
