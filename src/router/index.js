import { createRouter, createWebHistory } from "vue-router"

import Home from "@/views/HomeView.vue"
import Student from "@/views/StudentView.vue"
import Company from "@/views/CompanyView.vue"
import Nav from "@/views/NavView.vue"
import Portal from "@/views/PortalView.vue"
import Login from "@/views/LoginView.vue"
import Error from "@/views/ErrorView.vue"

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
        path: "/login",
        name: "login",
        component: () => import("@/views/PortalView.vue"),
    },
    {
        path: "/kursportal",
        name: "kursportal",
        component: () => import("@/views/PortalView.vue"),
    },

    {
        path: "/:pathMatch(.*)",
        name: "feil",
        component: () => import("@/views/ErrorView.vue"),
    },
]

const router = createRouter({
    history: createWebHistory(), routes
})

export default router