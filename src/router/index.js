import { createRouter, createWebHistory } from "vue-router"
import main_router from '@/router/main_router.js'
import login_router from '@/router/login_router.js'
import kurs_router from '@/router/kurs_router.js'

const base = []
const routes = base.concat(main_router, login_router, kurs_router)

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL), routes
})

export default router