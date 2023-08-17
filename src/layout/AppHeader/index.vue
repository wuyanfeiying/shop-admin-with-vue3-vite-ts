<!--
 * @Date: 2023-08-13 15:09:02
 * @LastEditors: wuyanfeiying
-->
<template>
  <el-space size="large">
    <ToggleSidebar />
    <Breadcrumb />
  </el-space>
  <el-space size="large">
    <FullScreen />
    <UserInfo />
  </el-space>
</template>

<script setup lang='ts'>
import ToggleSidebar from './ToggleSidebar.vue'
import Breadcrumb from './Breadcrumb.vue'
import FullScreen from './FullScreen.vue'
import UserInfo from './UserInfo.vue'

</script>

<style lang="scss" scoped>
i {
  font-size: 19px;
  cursor: pointer;
}
</style>
