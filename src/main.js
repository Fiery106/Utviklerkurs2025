import { createApp } from 'vue'
import App from '@/App.vue'

// Globale komponenter
import Button from '@/components/global/Button.vue'
import Icon from '@/components/global/Icon.vue'
//import Functions from "@/compostables/functions.js"        ??

// Generell styling + Tailwind
import "@/styles.css"

// Router bindelse
import router from "@/router"

// Font Awesome imports
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome' 

// Import ikon pakker
import { faDatabase, faUser, faBuilding, faPeopleGroup, faArrowRight, faPhone, faArrowUpRightFromSquare, faBars, faEnvelope, faLink, faDownload, faCircleXmark, faSearch, faAddressCard, faEllipsisVertical, faMoon, faSun, faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons'
import { faMessage, faTrashCan, faPenToSquare, faSquarePlus, faCopyright, } from '@fortawesome/free-regular-svg-icons'
import { faHtml5, faCss, faJs, faReact, faAngular, faBootstrap, faFacebook, faSquareInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons'

// Legg til ikoner i biblioteket
library.add(  
    faDatabase, faUser, faBuilding, faPeopleGroup, faArrowRight, faPhone, faArrowUpRightFromSquare, faBars, faEnvelope, faLink, faDownload, faCircleXmark, faSearch, faAddressCard, faEllipsisVertical, faMoon, faSun, faArrowRightToBracket, //SOLID
    faMessage, faTrashCan, faPenToSquare, faSquarePlus, faCopyright,  //REGULAR
    faHtml5, faCss, faJs, faReact, faAngular, faBootstrap, //CODE
    faFacebook, faSquareInstagram, faLinkedin, faYoutube //SOCIALS
)

// Register alt globalt
const app = createApp(App)

app.component("FontAwesomeIcon", FontAwesomeIcon)
app.component("Button", Button)
app.component("Icon", Icon)
app.use(router)
app.mount('#app')