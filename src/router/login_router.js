import Innlogging from "@/views/InnloggingView.vue"
import Register from "@/views/RegisterView.vue"

export default [
    {
        path: "/innlogging",
        name: "innlogging",
        component: Innlogging
    },
    {
        path: "/register",
        name: "register",
        component: Register
    }
]