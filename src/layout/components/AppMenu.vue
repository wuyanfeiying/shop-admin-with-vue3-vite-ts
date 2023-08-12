<!--
 * @Date: 2023-08-12 14:33:34
 * @LastEditors: wuyanfeiying
 * @desc: 左侧菜单
-->
<template>
  <el-menu
    active-text-color="#ffd04b"
    background-color="#304156"
    class="el-menu-vertical-demo"
    default-active="2"
    text-color="#fff"
    router
  >
    <el-menu-item index="/">
      <el-icon><Menu /></el-icon>
      <span>首页</span>
    </el-menu-item>
    <el-menu-item index="2">
      <el-icon><Menu /></el-icon>
      <span>商品列表</span>
    </el-menu-item>
    <el-menu-item
      index="3"
      disabled
    >
      <el-icon><Menu /></el-icon>
      <span>Navigator Three</span>
    </el-menu-item>
    <el-menu-item index="4">
      <el-icon><Menu /></el-icon>
      <span>Navigator Four</span>
    </el-menu-item>
  </el-menu>
</template>

<script setup lang='ts'>
import { Menu } from '@element-plus/icons-vue'
</script>

<style lang="scss" scoped>
  .el-menu {
    border-right: none;
  }
</style>
