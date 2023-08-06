<!--
 * @Date: 2023-07-31 20:17:42
 * @LastEditors: wuyanfeiying
-->
<script setup lang="ts"></script>

<template>
  <!-- 路由的渲染出口 -->
  <router-view />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
