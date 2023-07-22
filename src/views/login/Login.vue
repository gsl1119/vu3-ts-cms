<template>
  <div class="login">
    <LoginPanel></LoginPanel>
  </div>
</template>

<script lang="ts" setup>
// import hyRequest from "../../service"
// hyRequest
//   .get({
//     url: "/home/multidata"
//   })
//   .then((res) => {
//     console.log(res)
//   })
import LoginPanel from "./c-cpns/login-pannel.vue"
</script>

<style lang="less" scoped>
.login {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: url("../../assets/img/login-bg.svg");
}
</style>
