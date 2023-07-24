<template>
  <div class="login-panel">
    <h1 class="title">后台管理系统</h1>
    <!--   -->
    <div class="tabs">
      <el-tabs type="border-card" stretch v-model="activeName">
        <el-tab-pane label="账号登录" name="account">
          <template #label>
            <div class="label">
              <el-icon><UserFilled /></el-icon>
              <span class="text">账号登陆</span>
            </div>
          </template>
          <pane-account ref="accountRef"></pane-account>
        </el-tab-pane>
        <el-tab-pane label="手机登录" name="phone">
          <template #label>
            <div class="label">
              <el-icon><Iphone /></el-icon>
              <span class="text">手机登陆</span>
            </div>
          </template>
          <pane-phone> </pane-phone>
        </el-tab-pane>
      </el-tabs>
    </div>
    <div class="control">
      <el-checkbox v-model="isRenPwd" label="记住密码" size="large" />
      <el-link type="primary">忘记密码</el-link>
    </div>
    <el-button
      class="login-btn"
      type="primary"
      size="large"
      @click="handleLoginClick"
      >立即登录</el-button
    >
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue"
import paneAccount from "./pane-account.vue"
import panePhone from "./pane-phone.vue"
import { localCache } from "@/utils/cache"

const isRenPwd = ref<boolean>(localCache.getCache("isRenPwd") ?? false)
const activeName = ref<string>("account")
const accountRef = ref<InstanceType<typeof paneAccount>>()

watch(isRenPwd, (newVal) => {
  localCache.setCache("isRenPwd", newVal)
})

const handleLoginClick = () => {
  if (activeName.value === "account") {
    accountRef.value?.loginAction(isRenPwd.value)
  } else {
    console.log("phone")
  }
}
</script>

<style lang="less" scoped>
.login-panel {
  width: 300px;
  margin-bottom: 150px;

  .title {
    text-align: center;
    margin-bottom: 15px;
  }

  .control {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
  }
  .label {
    display: flex;
    align-items: center;
    justify-content: center;

    .text {
      margin-left: 15px;
    }
  }
  .login-btn {
    margin-top: 10px;
    width: 100%;
  }
}
</style>
