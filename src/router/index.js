import { createRouter, createWebHistory } from "vue-router"

import Hjem from "@/views/_HjemView.vue"
import Kursportal from "@/views/_KursportalView.vue"
import Innlogging from "@/views/InnloggingView.vue"
import Register from "@/views/RegisterView.vue"

import Deltaker from "@/views/DeltakerView.vue"
import Bedrift from "@/views/BedriftView.vue"
import Nav from "@/views/NavView.vue"

import Feil from "@/views/FeilView.vue"
import Test from "@/views/TestView.vue"

const routes = [
    {
        path: "/",
        name: "hjem",
        component: Hjem,
    },

    {
        path: "/deltaker",
        name: "deltaker",
        component: Deltaker,
    },
    {
        path: "/bedrift",
        name: "bedrift",
        component: Bedrift,
    },
    {
        path: "/nav",
        name: "nav",
        component: Nav,
    },

    {
        path: "/innlogging",
        name: "innlogging",
        component: Innlogging,
    },
    {
        path: "/register",
        name: "register",
        component: Register,
    },


    {
        path: "/kursportal",
        name: "kursportal",
        component: Kursportal,
    },

    {
        path: "/:pathMatch(.*)",
        name: "feil",
        component: Feil,
    },

    {
        path: "/test",
        name: "test",
        component: Test,
    },
]


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL), routes
})

export default router