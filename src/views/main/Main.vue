<template>
  <div>
    <h2>main：{{ countStore.counter }}--{{ countStore.doubleCounter }}</h2>
    <button @click="changeCounter">修改</button>
  </div>
</template>

<script lang="ts" setup>
import useCounterStore from "@/store/counter"

const countStore = useCounterStore()

function changeCounter() {
  countStore.changeCounterAction(1000)
}
</script>

<style lang="less" scoped></style>
