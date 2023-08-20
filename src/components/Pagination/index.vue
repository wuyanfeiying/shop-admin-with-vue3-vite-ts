<!--
 * @Date: 2023-08-19 14:09:26
 * @LastEditors: wuyanfeiying
-->
<template>
  <el-pagination
    :current-page="props.page"
    :page-size="props.limit"
    background
    layout="total, sizes, prev, pager, next, jumper"
    :total="listCount"
    :page-sizes="[10, 20, 30, 40, 50, 100]"
    @current-change="handleCurrentChange"
    @size-change="handleSizeChange"
  />
</template>

<script lang="ts" setup>
// import { PropType } from 'vue'

const props = defineProps({
  page: { // 页码
    type: Number,
    default: 1
  },
  limit: { // 每页大小
    type: Number,
    default: 10
  },
  listCount: {
    type: Number,
    default: 0
  },
  loadList: {
    type: Function,
    default: () => {}
  }
  // 如何给对象指定类型的例子
  // obj: {
  //   type: Object as PropType<{a: string, b : number}>,
  //   required: true
  // }
})

// interface PropsType {
//   page: number
//   limit: number
//   listCOunt: number
//   loadList: () => void
// }

// const props = withDefaults(defineProps<PropsType>(), {
//   page: 1,
//   limit: 10,
//   listCount: 0,
//   loadList: () => {}
// })
// const props = defineProps<PropsType>()

// const emit = defineEmits(['update:page', 'update:limit'])
// 给emit加TS类型
interface EmitType {
  (e: 'update:page', page: number): void
  (e: 'update:limit', limit: number): void
}
const emit = defineEmits<EmitType>()

const handleCurrentChange = (page: number) => {
  emit('update:page', page)
  props.loadList()
}

const handleSizeChange = (size: number) => {
  emit('update:page', 1)
  emit('update:limit', size)
  props.loadList()
}
</script>

<style lang="scss" scoped>
.el-pagination {
  display: flex;
  justify-content: flex-end;
}
</style>
