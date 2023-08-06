/*
 * @Date: 2023-08-06 19:31:17
 * @LastEditors: wuyanfeiying
 * @desc: 公共基础接口封装
 */
import request from '@/utils/request'

export const getLoginInfo = () => {
  return request({
    method: 'GET',
    url: '/login/info'
  })
}
