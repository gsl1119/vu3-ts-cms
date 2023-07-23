<template>
  <el-form
    :model="account"
    label-width="60px"
    size="large"
    :rules="accountRules"
    ref="formRef"
  >
    <el-form-item label="账号" prop="name">
      <el-input v-model="account.name" />
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input v-model="account.password" />
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue"
import { ElMessage } from "element-plus"
import type { FormRules, ElForm } from "element-plus"
import { accountLoginRequest } from "@/service/login/login"

import type { IAccount } from "@/types"
import useLoginStore from "@/store/login/login"
const account = reactive<IAccount>({
  name: "",
  password: ""
})

const accountRules: FormRules = {
  name: [
    { required: true, message: "必须输入账号信息", trigger: "blur" },
    { min: 6, max: 20, message: "必须6~20位的数字", trigger: "change" }
  ],
  password: [
    { required: true, message: "必须输入密码", trigger: "blur" },
    {
      // pattern: /^[a-z0-9]{3,}$/,
      message: "必须是3位以上数字和字母组成",
      trigger: "change"
    }
  ]
}

const formRef = ref<InstanceType<typeof ElForm>>()
function loginAction() {
  formRef.value?.validate(async (valid) => {
    if (valid) {
      useLoginStore().loginAccountAction(account)
    } else {
      ElMessage.error("请检查输入的内容")
    }
  })
}

defineExpose({
  loginAction
})
</script>

<style></style>
