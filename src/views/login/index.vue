<!--
 * @Date: 2023-08-06 14:38:03
 * @LastEditors: wuyanfeiying
-->
<template>
  <h1>Login</h1>
</template>

<script setup lang='ts'>
import { getLoginInfo } from '@/api/common'
import { onMounted } from 'vue'

onMounted(() => {
  getLoginInfo().then(res => {
    console.log(res)
  })
})
</script>
