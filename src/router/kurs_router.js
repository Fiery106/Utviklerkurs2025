const Kursportal = () => import("@/views/kursportal/_KursportalView.vue")
const AllPost = () => import("@/views/kursportal/AllePostView.vue")
const ShowPost = () => import("@/views/kursportal/VisPostView.vue")
const NewPost = () => import("@/views/kursportal/NyPostView.vue")
const EditPost = () => import("@/views/kursportal/RedigerPostView.vue")

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