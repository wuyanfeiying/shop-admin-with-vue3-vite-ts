<!--
 * @Date: 2023-08-20 15:42:39
 * @LastEditors: wuyanfeiying
-->
<template>
  <el-dialog
    ref="dialog"
    :title="props.adminId ? '编辑管理员' : '添加管理员'"
    :close-on-click-modal="false"
    :close-on-press-escape="false"
    @closed="emit('update:admin-id', null)"
  >
    <main>container</main>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="handleCancel">Cancel</el-button>
        <el-button type="primary"> Confirm </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup lang='ts'>
import { IElDialog } from '@/types/element-plus'
import { ref, type PropType } from 'vue'

const props = defineProps({
  adminId: { // 编辑的管理员Id
    type: Number as PropType<number | null>,
    default: null
  }
})

interface EmitsType {
    (e: 'update:admin-id', value: number | null): void
}

const emit = defineEmits<EmitsType>()

const dialog = ref<IElDialog | null>(null)

const handleCancel = () => {
  if (dialog.value) {
    dialog.value.visible = false
  }
}
</script>

<style>

</style>
