import { defineStore } from "pinia"
import {
  accountLoginRequest,
  getUserInfoById,
  getUserMenusByRoleId
} from "@/service/login/login"
import type { IAccount } from "@/types"
import { localCache } from "@/utils/cache"
import router from "@/router"

interface ILoginState {
  token: string
  userInfo: any
  userMenus: any
}

const LOGIN_TOKEN = "login/token"
const useLoginStore = defineStore("login", {
  state: (): ILoginState => ({
    token: localCache.getCache(LOGIN_TOKEN) ?? "",
    userInfo: {},
    userMenus: []
  }),
  actions: {
    async loginAccountAction(account: IAccount) {
      const res = await accountLoginRequest(account)
      const id = res.data.id
      this.token = res.data.token
      // 保存
      localCache.setCache(LOGIN_TOKEN, this.token)

      const userInfoRes = await getUserInfoById(id)
      this.userInfo = userInfoRes.data

      const userMenuRes = await getUserMenusByRoleId(this.userInfo.role.id)
      this.userMenus = userMenuRes.data

      // 跳转
      router.push("/main")
    }
  }
})

export default useLoginStore
