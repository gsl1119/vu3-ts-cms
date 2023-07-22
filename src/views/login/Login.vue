<template>
  <div class="login">
    <h2>login111</h2>
  </div>
</template>

<script lang="ts" setup>
import hyRequest from "../../service"
hyRequest
  .get({
    url: "/home/multidata"
  })
  .then((res) => {
    console.log(res)
  })
</script>

<style lang="less" scoped>
.login {
  color: red;
}
</style>
