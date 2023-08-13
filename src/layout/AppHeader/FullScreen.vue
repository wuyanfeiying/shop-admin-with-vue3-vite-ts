<!--
 * @Date: 2023-08-13 16:21:53
 * @LastEditors: wuyanfeiying
-->
<template>
  <el-icon @click="toggleFullScreen">
    <FullScreen />
  </el-icon>
</template>

<script setup lang='ts'>
import { FullScreen } from '@element-plus/icons-vue'
const toggleFullScreen = () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen()
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen()
    }
  }
}
</script>

<style>

</style>
