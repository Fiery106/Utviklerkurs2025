import { createApp } from 'vue'
import App from './App.vue'

// Generell styling + Tailwind
import "@/assets/styles.css"

// Router
import router from "./router"

// Font Awesome imports
import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

// Import ikon pakker
import { faDatabase, faCode, faHouse, faUser, faPeopleGroup, faArrowRight, faPhone, faAt, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { faBuilding, faCopyright, faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faHtml5, faCss3Alt, faJs, faReact, faNode, faBootstrap, faFacebook, faSquareInstagram, faLinkedin, faYoutube} from '@fortawesome/free-brands-svg-icons'

// Legg til ikoner i biblioteket
library.add(  
    faDatabase, faCode, faHouse, faUser, faPeopleGroup, faArrowRight, faPhone, faAt, faArrowUpRightFromSquare, //SOLID
    faBuilding, faCopyright, faEnvelope, //REGULAR
    faHtml5, faCss3Alt, faJs, faReact, faNode, faBootstrap, //CODE
    faFacebook, faSquareInstagram, faLinkedin, faYoutube //SOCIALS
)

// Register globalt
const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)
app.mount('#app')
