import { createRouter, createWebHistory } from "vue-router"

import Home from "@/views/HomeView.vue"
import Student from "@/views/StudentView.vue"
import Company from "@/views/CompanyView.vue"
import Nav from "@/views/NavView.vue"
import Login from "@/views/LoginView.vue"
import Portal from "@/views/PortalView.vue"
import Error from "@/views/ErrorView.vue"

const routes = [
    {
        path: "/",
        name: "hjem",
        component: Home,
        alias: "/hjem",
    },
    {
        path: "/deltaker",
        name: "deltaker",
        component: Student,
        alias: "/deltaker",
    },
    {
        path: "/bedrift",
        name: "bedrift",
        component: Company,
        alias: "/bedrift",
    
    },
    {
        path: "/nav",
        name: "nav",
        component: Nav,
        alias: "/nav",
    },

    {
        path: "/login",
        name: "login",
        component: Login,
        alias: "/login"
    },
    {
        path: "/kursportal",
        name: "kursportal",
        component: Portal,
        alias: "/kursportal"
    },

    {
        path: "/:pathMatch(.*)",
        name: "feil",
        component: Error,
        alias: "/:pathMatch"
    },
]

const router = createRouter({
    history: createWebHistory(), routes
})

export default router