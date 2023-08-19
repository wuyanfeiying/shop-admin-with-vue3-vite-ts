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
      >
        <AppMenu />
      </el-aside>
      <el-container class="el-container">
        <el-header class="el-header">
          <AppHeader />
        </el-header>
        <el-main class="el-main">
          <RouterView />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang='ts'>
import AppMenu from './AppMenu/index.vue'
import AppHeader from './AppHeader/index.vue'
</script>

<style lang="scss" scoped>
  .el-header {
    background-color: #fff;
    color: #333;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .el-aside {
    background-color: #304156;
    color: #333;
    width: auto;
  }
  .el-main {
    background-color: #E9EEF3;
    color: #333;
  }
  .el-container {
    height: 100vh;
  }
  .el-menu:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>
