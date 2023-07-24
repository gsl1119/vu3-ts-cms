<template>
  <div class="main">
    <el-container class="container">
      <el-aside width="200px"><MainMenu></MainMenu> </el-aside>
      <el-container>
        <el-header> <MainHeader></MainHeader> </el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
    <!-- <h2>main：{{ countStore.counter }}--{{ countStore.doubleCounter }}</h2>
    <button @click="handleExitClick">退出登录</button> -->
  </div>
</template>

<script lang="ts" setup>
import useCounterStore from "@/store/counter"
import { localCache } from "@/utils/cache"
import { useRouter } from "vue-router"
import MainMenu from "@/components/main-menu/main-menu.vue"
import MainHeader from "@/components/main-header/main-header.vue"
const countStore = useCounterStore()

function changeCounter() {
  countStore.changeCounterAction(1000)
}
const router = useRouter()
const handleExitClick = () => {
  localCache.removeCache("login/token")
  router.push("/login")
}
</script>

<style lang="less" scoped>
.main {
  height: 100%;
  .container {
    height: 100%;
  }
}
</style>
