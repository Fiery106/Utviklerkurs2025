import { createRouter, createWebHistory } from "vue-router"

import Hjem from "@/views/hjemmesidene/_HjemView.vue"
import Deltaker from "@/views/hjemmesidene/DeltakerView.vue"
import Bedrift from "@/views/hjemmesidene/BedriftView.vue"
import Nav from "@/views/hjemmesidene/NavView.vue"

import Innlogging from "@/views/InnloggingView.vue"
import Register from "@/views/RegisterView.vue"

import Kursportal from "@/views/kursportal/_KursportalView.vue"
import AllPost from "@/views/kursportal/AllPostView.vue"
import ShowPost from "@/views/kursportal/PostView.vue"
import NewPost from "@/views/kursportal/NewPostView.vue"
import EditPost from "@/views/kursportal/EditPostView.vue"

import Feil from "@/views/FeilView.vue"
import Test from "@/views/TestView.vue"

const routes = [
    {
        path: "/",
        name: "hjem",
        component: Hjem
    },

    {
        path: "/deltaker",
        name: "deltaker",
        component: Deltaker
    },
    {
        path: "/bedrift",
        name: "bedrift",
        component: Bedrift
    },
    {
        path: "/nav",
        name: "nav",
        component: Nav
    },

    
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

    {
        path: "/test",
        name: "test",
        component: Test
    },
]


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL), routes
})

export default router