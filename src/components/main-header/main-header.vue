<template>
  <div class="main-header">
    <div class="menu-icon" @click="handleMenuIconClick">
      <!-- <el-icon><Fold /></el-icon> -->
      <el-icon>
        <component :is="isFold ? 'Expand' : 'Fold'"></component>
      </el-icon>
    </div>

    <div class="content">
      <div class="breakctumb">面包屑</div>
      <div class="info">
        <header-info></header-info>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import HeaderInfo from "./c-cpns/header-info.vue"

// 0.内部定义事件
const emit = defineEmits(["foldChange"])

const isFold = ref(false)
function handleMenuIconClick() {
  // 1.内部改变状态
  isFold.value = !isFold.value

  // 2.将事件和状态传递给父组件
  emit("foldChange", isFold.value)
}
</script>

<style lang="less" scoped>
.main-header {
  display: flex;
  align-items: center;
  flex: 1;
  height: 100%;
  .menu-icon {
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    padding: 0 18px;
  }
}
</style>
