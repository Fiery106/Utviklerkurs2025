import { createRouter, createWebHistory } from "vue-router"

import Home from "@/views/Home.vue"
import Student from "@/views/Student.vue"
import Business from "@/views/Business.vue"
import Nav from "@/views/Nav.vue"
import Error from "@/views/Error.vue"

const routes = [
    {
        path: "/",
        name: "hjem",
        component: Home
    },
    {
        path: "/deltaker",
        name: "deltaker",
        component: Student
    },
    {
        path: "/bedrift",
        name: "bedrift",
        component: Business
    
    },
    {
        path: "/nav",
        name: "nav",
        component: Nav
    },
    {
        path: "/404",
        name: "error",
        component: Error
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router