<!--
 * @Date: 2023-08-12 14:05:34
 * @LastEditors: wuyanfeiying
 * @desc: 项目布局组件
-->
<template>
  <div class="common-layout">
    <el-container>
      <el-aside
        class="el-aside"
        width="200px"
      >
        <AppMenu />
      </el-aside>

      <el-container class="el-container">
        <el-header class="el-header">
          header
        </el-header>
        <el-main class="el-main">
          <RouterView />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang='ts'>
import AppMenu from './components/AppMenu.vue'
</script>

<style lang="scss" scoped>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
  }
  .el-aside {
    background-color: #304156;
    color: #333;
  }
  .el-main {
    background-color: #E9EEF3;
    color: #333;
  }
  .el-container {
    height: 100vh;
  }
</style>
