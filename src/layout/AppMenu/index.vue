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
    <el-sub-menu index="/product">
      <template #title>
        <el-icon><Location /></el-icon>
        <span>商品</span>
      </template>
      <el-menu-item index="/product/prodcut_list">
        商品列表
      </el-menu-item>
      <el-menu-item index="/product/add_product">
        添加商品
      </el-menu-item>
      <el-menu-item index="/product/product_attr">
        商品规格
      </el-menu-item>
      <el-menu-item index="/product/product_classify">
        商品分类
      </el-menu-item>
      <el-menu-item index="/product/product_reply">
        商品评论
      </el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="/order">
      <template #title>
        <el-icon><Location /></el-icon>
        <span>订单</span>
      </template>
      <el-menu-item index="/order/order_list">
        订单列表
      </el-menu-item>
      <el-menu-item index="/order/order_offline">
        离线订购
      </el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="/permission">
      <template #title>
        <el-icon><Location /></el-icon>
        <span>权限</span>
      </template>
      <el-menu-item index="/permission/permission_admin">
        账号管理
      </el-menu-item>
      <el-menu-item index="/permission/permission_role">
        角色管理
      </el-menu-item>
      <el-menu-item index="/permission/permission_rule">
        规则管理
      </el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script setup lang='ts'>
import { Menu, Location } from '@element-plus/icons-vue'
</script>

<style lang="scss" scoped>
  .el-menu {
    border-right: none;
  }
</style>
