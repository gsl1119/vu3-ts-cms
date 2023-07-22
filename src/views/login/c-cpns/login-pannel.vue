<template>
  <div class="login-panel">
    <h1 class="title">后台管理系统</h1>
    <div class="tabs">tabs</div>
    <div class="control">
      <el-checkbox v-molde="isRenPwd" label="记住密码" />
      <span>忘记密码</span>
    </div>
    <div class="login-btn">login-btntestr</div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
const isRenPwd = ref<boolean>(false)
</script>

<style></style>
