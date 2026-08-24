const Innlogging = () => import("@/views/innlogging/InnloggingView.vue")
const Register = () => import("@/views/innlogging/RegisterView.vue")

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