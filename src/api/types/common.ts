/*
 * @Date: 2023-08-09 06:25:52
 * @LastEditors: wuyanfeiying
 */
export interface ILoginInfo {
  logo_square: string
  logo_rectangle: string
  login_logo: string
  slide: string[]
}

export interface IMenu {
  path: string
  title: string
  icon: string
  header: string
  is_header: number
  children?: IMenu[]
}
// 登录接口 数据类型
export interface ILoginResponse {
  token: string
  expires_time: number
  menus: IMenu[]
}
