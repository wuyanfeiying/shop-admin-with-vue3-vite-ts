<!--
 * @Date: 2023-08-06 14:37:48
 * @LastEditors: wuyanfeiying
-->
<template>
  <h1>Home</h1>
  {{ count }}
  <h1> {{ $store.state.count }}</h1>
</template>

<script setup lang='ts'>
import { useStore } from '../../store'
const store = useStore()
const count = store.state.count
console.log(store.state.count)

</script>
