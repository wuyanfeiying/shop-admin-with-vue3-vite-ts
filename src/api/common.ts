/*
 * @Date: 2023-08-06 19:31:17
 * @LastEditors: wuyanfeiying
 * @desc: 公共基础接口封装
 */
import request from '@/utils/request'
interface ResponseData<T = any> {
  status: number,
  msg: string,
  data: T
}

export const getLoginInfo = () => {
  return request.get<ResponseData<{
      logo_square: string,
      logo_rectangle: string,
      login_logo: string,
      slide: string[]
  }>>('/login/info')
}
