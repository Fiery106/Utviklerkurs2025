import { createRouter, createWebHistory } from "vue-router"

import Innlogging from "@/views/InnloggingView.vue"
import Register from "@/views/RegisterView.vue"

import Kursportal from "@/views/kursportal/_KursportalView.vue"
import AllPost from "@/views/kursportal/AllePostView.vue"
import ShowPost from "@/views/kursportal/VisPostView.vue"
import NewPost from "@/views/kursportal/NyPostView.vue"
import EditPost from "@/views/kursportal/RedigerPostView.vue"

import Feil from "@/views/FeilView.vue"

const routes = [
    {
        path: "/innlogging",
        name: "innlogging",
        component: Innlogging
    },
    {
        path: "/register",
        name: "register",
        component: Register
    },


    {
        path: "/kursportal",
        name: "kursportal",
        component: Kursportal
    },
    {
        path: '/kursportal/post/alle',
        name: "post",
        component: AllPost
    },
    {
        path: '/kursportal/post/v/:title/:id',
        name: "vis_post",
        component: ShowPost
    },
    {
        path: '/kursportal/post/ny',
        name: "ny_post",
        component: NewPost
    },
    {
        path: '/kursportal/post/r/:title/:id',
        name: "endre_post",
        component: EditPost
    },


    {
        path: "/:pathMatch(.*)",
        name: "feil",
        component: Feil
    },
]


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL), routes
})

export default router