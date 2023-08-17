<!--
 * @Date: 2023-08-17 09:31:46
 * @LastEditors: wuyanfeiying
-->
<template>
  <el-dropdown trigger="click">
    <span class="el-dropdown-link">
      {{ $store.state.user?.account }}<el-icon class="el-icon--right"><ArrowDown /></el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>个人中心</el-dropdown-item>
        <el-dropdown-item>
          退出登录
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang='ts'>
import { ArrowDown } from '@element-plus/icons-vue'
</script>

<style>

</style>
