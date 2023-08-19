<!--
 * @Date: 2023-08-18 12:40:58
 * @LastEditors: wuyanfeiying
-->
<template>
  <el-autocomplete
    class="inline-input"
    prefix-icon="el-icon-search"
    placeholder="请输入内容"
    value-key="menu_name"
  >
    <template #default="{ item }">
      <router-link
        :to="item.menu_path"
        custom
      >
        <el-link
          class="menu-link"
          :underline="false"
        >
          <span
            class="link-text"
          >--</span>
        </el-link>
      </router-link>
    </template>
  </el-autocomplete>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
.is-disabled {
  color: #c0c4cc;
  cursor: not-allowed;
}

.menu-link, .link-text {
  display: block;
}
</style>
