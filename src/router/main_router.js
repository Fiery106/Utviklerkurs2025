const Hjem = () => import("@/views/hjemmesidene/_HjemView.vue")
const Deltaker = () => import("@/views/hjemmesidene/DeltakerView.vue")
const Bedrift = () => import("@/views/hjemmesidene/BedriftView.vue")
const Nav = () => import("@/views/hjemmesidene/NavView.vue")

const Feil = () => import("@/views/FeilView.vue")
// const Test = () => import("@/views/TestView.vue")

const Leaflet = () => import("@/components/Leaflet.vue")

export default [
    {
        path: "/",
        name: "hjem",
        component: Hjem
    },
    {
        path: '/kart',
        name: "kart",
        component: Leaflet
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
        path: "/:pathMatch(.*)",
        name: "feil",
        component: Feil
    },

    // {
    //     path: "/test",
    //     name: "test",
    //     component: Test
    // }
]