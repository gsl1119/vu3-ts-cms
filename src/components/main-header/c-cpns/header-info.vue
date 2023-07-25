<template>
  <div class="header-info">
    <div class="operation">
      <span>
        <el-icon><Message /></el-icon>
      </span>
      <span>
        <span class="dot"></span>
        <el-icon><ChatDotRound /></el-icon>
      </span>
      <span>
        <el-icon><Search /></el-icon>
      </span>
    </div>

    <div class="info">
      <el-dropdown>
        <span class="userInfo">
          <el-avatar
            :size="30"
            class="avater"
            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
          />
          <span class="name">coderwhy</span>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="handleExitClick">
              <el-icon><CircleClose /></el-icon>
              <span>退出系统</span>
            </el-dropdown-item>
            <el-dropdown-item divided>
              <el-icon><InfoFilled /></el-icon>
              <span>个人信息</span>
            </el-dropdown-item>
            <el-dropdown-item divided>
              <el-icon><Unlock /></el-icon>
              <span>修改密码</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>
<script setup lang="ts">
import {
  CircleClose,
  InfoFilled,
  Unlock,
  type ChatDotRound,
  type Message,
  type Search
} from '@element-plus/icons-vue'

import { useRouter } from 'vue-router'
import { localCache } from '@/utils/cache'

const router = useRouter()
function handleExitClick() {
  localCache.removeCache('token')
  localCache.removeCache('userInfo')
  localCache.removeCache('userMenus')
  router.push('/login')
}
</script>

<style lang="less" scoped>
.header-info {
  display: flex;
  align-items: center;
  justify-content: center;
}
.userInfo {
  display: flex;
  align-items: center;
  cursor: pointer;
  .name {
    margin-left: 5px;
  }
}

.info {
  :global(.el-dropdown-menu_item) {
    line-height: 36px !important;
    padding: 6px 22px;
  }
}
.operation {
  display: inline-flex;
  margin-right: 20px;

  span {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 35px;

    &:hover {
      background-color: #f2f2f2;
    }
    i {
      font-size: 20px;
    }
    .dot {
      position: absolute;
      top: 3px;
      right: 3px;
      z-index: 10;
      width: 6px;
      height: 6px;
      background: red;
      border-radius: 100%;
    }
  }
}
</style>
