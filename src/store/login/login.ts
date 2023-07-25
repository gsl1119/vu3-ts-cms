import { defineStore } from "pinia"
import {
  accountLoginRequest,
  getUserInfoById,
  getUserMenusByRoleId
} from "@/service/login/login"
import type { IAccount } from "@/types"
import { localCache } from "@/utils/cache"
import router from "@/router"
import type { RouteRecordRaw } from "vue-router"
import { mapMenusToRoutes } from "@/utils/maps-menus"

interface ILoginState {
  token: string
  userInfo: any
  userMenus: any
}

const LOGIN_TOKEN = "login/token"
const useLoginStore = defineStore("login", {
  state: (): ILoginState => ({
    token: "",
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
      localCache.setCache("userInfo", userInfoRes.data)
      localCache.setCache("userMenus", userMenuRes.data)

      const routes = mapMenusToRoutes(userMenuRes.data)

      routes.forEach((route) => router.addRoute("main", route))
      // 跳转
      router.push("/main")
    },
    loadLocalCacheAction() {
      const token = localCache.getCache(LOGIN_TOKEN)
      const userInfo = localCache.getCache("userInfo")
      const userMenus = localCache.getCache("userMenus")
      if (token && userInfo && userMenus) {
        this.token = token
        this.userInfo = userInfo
        this.userMenus = userMenus

        const routes = mapMenusToRoutes(userMenus)
        routes.forEach((route) => router.addRoute("main", route))
      }
    }
  }
})

export default useLoginStore
