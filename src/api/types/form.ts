/*
 * @Date: 2023-08-19 13:24:03
 * @LastEditors: wuyanfeiying
 */
import { FormItemRule } from 'element-plus/lib/components/form/src/types'

export interface ISelectOptions {
  label: string
  value: number
}

export interface IFormRule {
  title: string
  field: string
  props?: Record<string, any>
  type: string
  validate?: FormItemRule[]
  value: string
  options?: ISelectOptions[]
}

export interface IFormData {
  action: string
  info: string
  method: string
  status: boolean
  title: string
  rules: IFormRule[]
}
