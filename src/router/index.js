import { createRouter, createWebhistory } from "vue-router"
import Home from "@/view/Home.vue"

const router = createRouter({
    history: createWebhistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "hjem",
            component: Home
        }
    ]
})

export default router