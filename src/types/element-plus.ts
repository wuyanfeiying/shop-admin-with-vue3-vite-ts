/*
 * @Date: 2023-08-16 12:49:43
 * @LastEditors: wuyanfeiying
 * @desc: elementUI plus 组件的 type
 */
import { ElForm } from 'element-plus'
import { FormItemRule } from 'element-plus/lib/components/form/src/types'

export type IElForm = InstanceType<typeof ElForm>
export type IFormItemRule = Record<string, FormItemRule[]>
