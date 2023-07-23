import { defineStore } from "pinia"
import { accountLoginRequest } from "@/service/login/login"
import type { IAccount } from "@/types"
import { localCache } from "@/utils/cache"

const LOGIN_TOKEN = "login/token"
const useLoginStore = defineStore("login", {
  state: () => ({
    id: "",
    token: localCache.getCache(LOGIN_TOKEN) ?? "",
    name: ""
  }),
  actions: {
    async loginAccountAction(account: IAccount) {
      const res = await accountLoginRequest(account)
      this.id = res.data.id
      this.name = res.data.name
      this.token = res.data.token
      // 保存
      localCache.setCache(LOGIN_TOKEN, this.token)
    }
  }
})

export default useLoginStore
