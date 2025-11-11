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
        alias: "/hjem"
    },
    {
        path: "/deltaker",
        name: "deltaker",
        component: Student
    },
    {
        path: "/bedrift",
        name: "bedrift",
        component: Company
    
    },
    {
        path: "/nav",
        name: "nav",
        component: Nav
    },
    {
        path: "/:pathMatch(.*)",
        name: "feil",
        component: Error,
        alias: "/:pathMatch"
    },
    {
        path: "/:pathMatch(.*)",
        name: "login",
        component: Login,
        alias: "/:pathMatch"
    },
    {
        path: "/:pathMatch(.*)",
        name: "kursportal",
        component: Portal,
        alias: "/:pathMatch"
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router