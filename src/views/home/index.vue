<!--
 * @Date: 2023-08-06 14:37:48
 * @LastEditors: wuyanfeiying
-->
<template>
  <h1>Home</h1>
  <img src="@/assets/vue.svg">
  <el-button>测试</el-button>
  <el-date-picker
    v-model="value1"
    type="datetime"
    placeholder="Select date and time"
  />
</template>

<script setup lang='ts'>
import User from '@/api/user'
console.log('🚀 ~ file: index.vue:11 ~ User:', User)
const value1 = ''
</script>

<style lang="scss" scoped>
// @import '@/styles/variables.scss';

  h1 {
    color: $color;
  }
</style>
