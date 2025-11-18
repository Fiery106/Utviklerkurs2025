import { createApp } from 'vue'
import Header from '@/apps/HeaderApp.vue'
import Main from '@/apps/MainApp.vue'
import Footer from '@/apps/FooterApp.vue'

// Generell styling + Tailwind
import "@/styles.css"

// Router bindelse
import router from "@/router"

// Font Awesome imports
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome' 

// Import ikon pakker
import { faDatabase, faUser, faBuilding, faPeopleGroup, faArrowRight, faPhone, faArrowUpRightFromSquare, faBars, faEnvelope, faLink } from '@fortawesome/free-solid-svg-icons'
import { faCopyright, faMoon, faSun } from '@fortawesome/free-regular-svg-icons'
import { faHtml5, faCss, faJs, faReact, faAngular, faBootstrap, faFacebook, faSquareInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons'

// Legg til ikoner i biblioteket
library.add(  
    faDatabase, faUser, faBuilding, faPeopleGroup, faArrowRight, faPhone, faArrowUpRightFromSquare, faBars, faEnvelope, faLink, //SOLID
    faCopyright, faMoon, faSun, //REGULAR
    faHtml5, faCss, faJs, faReact, faAngular, faBootstrap, //CODE
    faFacebook, faSquareInstagram, faLinkedin, faYoutube //SOCIALS
)

// Register alt globalt
const header_app = createApp(Header)
const main_app = createApp(Main)
const footer_app = createApp(Footer)

const apps = [
    header_app, main_app, footer_app
]

for (let i = 0; i < apps.length; i++) {
    apps[i].component('font-awesome-icon', FontAwesomeIcon)
    apps[i].use(router)
    apps[i].mount('#app' + (i + 1))
}