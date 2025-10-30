import { createApp } from 'vue'
import App from './App.vue'

// Generell styling + Tailwind
import "@/styles.css"

// Router bindelse
import router from "./router"

// Font Awesome imports
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome' 

// Import ikon pakker
import { faDatabase, faUser, faPeopleGroup, faArrowRight, faPhone, faArrowUpRightFromSquare, faBars } from '@fortawesome/free-solid-svg-icons'
import { faBuilding, faCopyright, faEnvelope, faMoon, faSun } from '@fortawesome/free-regular-svg-icons'
import { faHtml5, faCss, faJs, faReact, faAngular, faBootstrap, faFacebook, faSquareInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons'

// Legg til ikoner i biblioteket
library.add(  
    faDatabase, faUser, faPeopleGroup, faArrowRight, faPhone, faArrowUpRightFromSquare, faBars, //SOLID
    faBuilding, faCopyright, faEnvelope, faMoon, faSun, //REGULAR
    faHtml5, faCss, faJs, faReact, faAngular, faBootstrap, //CODE
    faFacebook, faSquareInstagram, faLinkedin, faYoutube //SOCIALS
)

// Register alt globalt
const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)
app.mount('#app')