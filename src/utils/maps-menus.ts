import type { RouteRecordRaw } from "vue-router"

export function loadLocalRoutes(userMenus: any[]) {
  const localRoutes: RouteRecordRaw[] = []
  const files: Record<string, any> = import.meta.glob(
    "../router/main/**/*.ts",
    { eager: true }
  )
  for (const key in files) {
    const module = files[key]
    localRoutes.push(module.default)
  }
  return localRoutes
}

export function mapMenusToRoutes(userMenus: any[]) {
  const localRoutes = loadLocalRoutes(userMenus)

  const routes: RouteRecordRaw[] = []
  for (const menu of userMenus) {
    for (const submenu of menu.children) {
      const route = localRoutes.find((item) => item.path === submenu.url)
      if (route) {
        routes.push(route)
      }
    }
  }
  return routes
}
