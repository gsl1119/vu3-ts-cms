<template>
  <div class="app">
    <!-- <h1>App</h1>
    <div>App</div>
    <router-link to="/main">主要</router-link>
    <router-link to="/login">登录</router-link> -->
    <router-view></router-view>

    <!-- <el-row class="mb-4">
      <el-button>Default</el-button>
      <el-button type="primary">Primary</el-button>
      <el-button type="success">Success</el-button>
      <el-button type="info">Info</el-button>
      <el-button type="warning">Warning</el-button>
      <el-button type="danger">Danger</el-button>
    </el-row> -->
  </div>
</template>

<script setup lang="ts">
interface IKun {
  name: string
}
const ikun: IKun = { name: "kobe" }
console.log("ikun", ikun)
</script>
<style lang="less" scoped>
.app {
  width: 100vw;
  height: 100vh;
  // background-color: skyblue;
}
</style>
