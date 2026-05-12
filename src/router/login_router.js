const Innlogging = () => import("@/views/InnloggingView.vue")
const Register = () => import("@/views/RegisterView.vue")

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