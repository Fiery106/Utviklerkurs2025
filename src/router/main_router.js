import Hjem from "@/views/hjemmesidene/_HjemView.vue"
import Deltaker from "@/views/hjemmesidene/DeltakerView.vue"
import Bedrift from "@/views/hjemmesidene/BedriftView.vue"
import Nav from "@/views/hjemmesidene/NavView.vue"

import Feil from "@/views/FeilView.vue"
import Test from "@/views/TestView.vue"

import Robots from "/public/robots.txt"
import Leaflet from "@/components/Leaflet.vue"

export default [
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
        path: "/:pathMatch(.*)",
        name: "feil",
        component: Feil
    },

    {
        path: "/test",
        name: "test",
        component: Test
    },

    {
        path: '/kart',
        name: "kart",
        component: Leaflet
    },

    {
        path: '/robots.txt',
        name: 'robots',
        component: Robots
    }
]