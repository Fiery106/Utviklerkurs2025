import Kursportal from "@/views/kursportal/_KursportalView.vue"
import AllPost from "@/views/kursportal/AllePostView.vue"
import ShowPost from "@/views/kursportal/VisPostView.vue"
import NewPost from "@/views/kursportal/NyPostView.vue"
import EditPost from "@/views/kursportal/RedigerPostView.vue"

export default [    
    {
        path: "/kursportal",
        name: "kursportal",
        component: Kursportal
    },
    {
        path: '/kursportal/post',
        name: "post",
        component: AllPost
    },
    // {
    //     path: '/kursportal/diskusjoner',
    //     name: "diskusjoner",
    //     component: AllDisc
    // },
    // {
    //     path: '/kursportal/kontakt',
    //     name: "contact",
    //     component: ShowContact
    // },
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
    }
]