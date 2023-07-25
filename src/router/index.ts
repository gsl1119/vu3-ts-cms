import { localCache } from "@/utils/cache"
import { createRouter, createWebHashHistory } from "vue-router"

const router = createRouter({
  history: createWebHashHistory(),
  // 映射关系：path=>component
  routes: [
    {
      path: "/",
      redirect: "/main"
    },
    {
      path: "/login",
      component: () => import("../views/login/Login.vue")
    },
    {
      path: "/main",
      name: "main",
      component: () => import("../views/main/Main.vue")
    },
    {
      path: "/:pathMatch(.*)",
      component: () => import("../views/notfound/NotFound.vue")
    }
  ]
})

// 导航守卫
router.beforeEach((to, from) => {
  const token = localCache.getCache("login/token")
  if (to.path === "/main" && !token) {
    return "/login"
  }
})
export default router
