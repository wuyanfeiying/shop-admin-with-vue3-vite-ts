<!--
 * @Date: 2023-08-13 15:13:04
 * @LastEditors: wuyanfeiying
-->
<template>
  <el-icon @click="handleCollapse">
    <Expand v-if="collapseIcon" /><Fold v-else />
  </el-icon>
</template>

<script setup lang='ts'>
import { Expand, Fold } from '@element-plus/icons-vue'
import { useStore } from '../../store'
import { computed } from 'vue'

const store = useStore()
const collapseIcon = computed(() => {
  return store.state.isCollapse
})
const handleCollapse = () => {
  store.commit('setIsCollapse', !collapseIcon.value)
}
</script>

<style>

</style>
