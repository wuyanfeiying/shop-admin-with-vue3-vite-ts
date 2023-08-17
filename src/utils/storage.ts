/*
 * @Date: 2023-08-17 09:19:18
 * @LastEditors: wuyanfeiying
 * @desc: 封装本地存储工具模块
 */
export const getItem = <T>(key:string) => {
  const data = window.localStorage.getItem(key)
  if (!data) return null
  try {
    return JSON.parse(data) as T
  } catch (error) {
    return null
  }
}

export const setItem = (key: string, value: object | string | null) => {
  if (typeof value === 'object') {
    value = JSON.stringify(value)
  }
  window.localStorage.setItem(key, value)
}

export const removeItem = (key: string) => {
  window.localStorage.removeItem(key)
}
