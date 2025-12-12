import { createRouter, createWebHistory } from "vue-router"

import Feil from "@/views/ErrorView.vue"

const routes = [
    {
        path: "/",
        name: "hjem",
        component: () => import("@/views/HomeView.vue"),
    },

    {
        path: "/deltaker",
        name: "deltaker",
        component: () => import("@/views/StudentView.vue"),
    },
    {
        path: "/bedrift",
        name: "bedrift",
        component: () => import("@/views/CompanyView.vue"),
    },
    {
        path: "/nav",
        name: "nav",
        component: () => import("@/views/NavView.vue"),
    },

    {
        path: "/innlogging",
        name: "innlogging",
        component: () => import("@/views/LoginView.vue"),
    },
    {
        path: "/register",
        name: "register",
        component: () => import("@/views/RegisterView.vue")
    },


    {
        path: "/kursportal",
        name: "kursportal",
        component: () => import("@/views/PortalView.vue"),
    },

    {
        path: "/:pathMatch(.*)",
        name: "feil",
        component: Feil,
    },
]


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL), routes
})

export default router