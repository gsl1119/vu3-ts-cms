import { createApp } from "vue"
import App from "./App.vue"
import "normalize.css"
import "./assets/css/index.less"
import router from "./router"
import pinia from "./store"

import registerIcons from "./global/register-icons"
// 1.全局注册element-plus：方便简洁
// import ElementPlus from "element-plus"
import "element-plus/dist/index.css"

// 按需引入：

const app = createApp(App)
// app.use(ElementPlus)
app.use(registerIcons)
app.use(router)
app.use(pinia)
app.use(registerIcons)
app.mount("#app")
