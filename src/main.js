import { createApp } from 'vue'
import MainApp from '@/MainApp.vue'
// import KursApp from '@/KursApp.vue'

// Globale komponenter
import Button from '@/components/global/Button.vue'
import Icon from '@/components/global/Icon.vue'
//import Functions from '@/compostables/functions.js'        ??

// Generell styling + Tailwind
import '@/styles.css'

// Leaflet
// import Leaflet from 'leaflet'

// Router bindelse
import MainRouter from '@/router'
// import KursRouter from '@/router/kursportal_router.js'  

// Font Awesome imports
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome' 

// Import ikon pakker
import { faUser, faBuilding, faPeopleGroup, faArrowRight, faPhone, faEnvelope, faArrowUpRightFromSquare, faLink, faSun, faMoon, faSearch, faAddressCard, faBars, faCircleXmark, faEllipsisVertical, faDownload, faArrowRightToBracket, faHouseChimney } from '@fortawesome/free-solid-svg-icons'
import { faPenToSquare, faSquarePlus, faTrashCan, faMessage, faCopyright, } from '@fortawesome/free-regular-svg-icons'
import { faHtml5, faCss, faJs, faReact, faAngular, faBootstrap, faFacebook, faSquareInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons'

// Legg til ikoner i biblioteket
library.add(  
    faUser, faBuilding, faPeopleGroup, faArrowRight, faPhone, faEnvelope, faArrowUpRightFromSquare, faLink, faSun, faMoon, faSearch, faAddressCard, faBars, faCircleXmark, faEllipsisVertical, faDownload, faArrowRightToBracket, faHouseChimney, //SOLID
    faPenToSquare, faSquarePlus, faTrashCan, faMessage, faCopyright,  //REGULAR
    faHtml5, faCss, faJs, faReact, faAngular, faBootstrap, //CODE
    faFacebook, faSquareInstagram, faLinkedin, faYoutube //SOCIALS
)

// Register alt globalt
const app1 = createApp(MainApp)
// const app2 = createApp(KursApp)

app1.component('FontAwesomeIcon', FontAwesomeIcon)
app1.component('Button', Button)
app1.component('Icon', Icon)
app1.use(MainRouter)
// app1.use(Leaflet)
app1.mount('#main-app')

// app2.component('FontAwesomeIcon', FontAwesomeIcon)
// app2.component('Button', Button)
// app2.component('Icon', Icon)
// app2.use(KursRouter)
// app2.mount('#kurs-app')