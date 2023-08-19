<!--
 * @Date: 2023-08-17 09:31:46
 * @LastEditors: wuyanfeiying
-->
<template>
  <el-dropdown
    class="ly-dropdown"
    trigger="click"
  >
    <span class="el-dropdown-link">
      {{ $store.state.user?.account }}<el-icon class="el-icon--right"><ArrowDown /></el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>个人中心</el-dropdown-item>
        <el-dropdown-item @click="handleLogin">
          退出登录
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang='ts'>
import { ArrowDown } from '@element-plus/icons-vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import { logout } from '@/api/common'
import { useRouter } from 'vue-router'
import { useStore } from '@/store'

const router = useRouter()
const store = useStore()

const handleLogin = () => {
  // 退出提示
  ElMessageBox.confirm('确认退出吗？', '退出提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  }).then(async () => {
    await logout()

    // 清除用户数据
    store.commit('setUser', null)

    ElMessage({
      type: 'success',
      message: '退出成功!'
    })

    router.push({ name: 'login' })
  }).catch(() => {
    ElMessage({
      type: 'info',
      message: '已取消退出'
    })
  })
}
</script>

<style lang="scss" scoped>
  .ly-dropdown:hover {
    cursor: pointer;
    color: $brandColor;
  }
</style>
