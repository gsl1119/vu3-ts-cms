<template>
  <div class="main-menu">
    <div class="logo">
      <img class="img" src="@/assets/img/logo.svg" />
      <h2 class="title">后台管理系统</h2>
    </div>
    <div class="menu">
      <el-menu
        default-active="1"
        active-text-color="#fff"
        :collapse="isFold"
        text-color="#b7bdc3"
        background-color="#001529"
      >
        <!-- 遍历整个菜单 -->
        <template v-for="item in userMenus" :key="item.id">
          <el-sub-menu :index="item.id + ''">
            <template #title>
              <el-icon>
                <component :is="item.icon.split('-icon-')[1]"></component>
              </el-icon>
              <span>{{ item.name }}</span>
            </template>

            <template v-for="subitem in item.children" :key="subitem.id">
              <el-menu-item
                :index="subitem.id + ''"
                @click="handleItemClick(subitem)"
              >
                {{ subitem.name }}
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template>
      </el-menu>
    </div>
  </div>
</template>

<script setup lang="ts">
import useLoginStore from "@/store/login/login"
import { useRouter } from "vue-router"

// 0.定义props
defineProps({
  isFold: {
    type: Boolean,
    defualt: true
  }
})

// 1.动态获取菜单
const loginStore = useLoginStore()
const userMenus = loginStore.userMenus

// 监听点击
const router = useRouter()
function handleItemClick(subitem: any) {
  const url = subitem.url
  router.push(url)
}
</script>

<style lang="less" scoped>
.main-menu {
  height: 100%;
  background-color: #001529;
}

.logo {
  display: flex;
  height: 28px;
  padding: 12px 10px 8px 10px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;

  .img {
    height: 100%;
    margin: 0 10px;
  }

  .title {
    font-size: 16px;
    font-weight: 700;
    color: white;
    white-space: nowrap;
  }
}

.el-menu {
  border-right: none;
  user-select: none;

  .el-sub-menu {
    .el-menu-item {
      padding-left: 50px !important;
      background-color: #0c2135;
    }
    .el-menu-item:hover {
      color: #fff;
    }
    .el-menu-item.is-active {
      background-color: #0a60db;
    }
  }
}
</style>
