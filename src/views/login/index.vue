<!--
 * @Date: 2023-08-06 14:38:03
 * @LastEditors: wuyanfeiying
-->
<template>
  <h1>Login</h1>
</template>

<script setup lang='ts'>
import type { ILoginInfo } from '@/api/types/common'
import { getLoginInfo } from '@/api/common'
import { onMounted, ref } from 'vue'

const list = ref<ILoginInfo['slide']>([])

onMounted(() => {
  getLoginInfo().then(data => {
    list.value = data.slide
    console.log(list.value)
  })
})
</script>
