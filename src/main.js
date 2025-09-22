import { createApp } from 'vue'
import App from './App.vue'

// Generell styling + Tailwind
import "@/assets/style.css"

// Font Awesome imports
import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

// Import ikon pakker
import { } from '@fortawesome/free-solid-svg-icons'
import { } from '@fortawesome/free-regular-svg-icons'
import { } from '@fortawesome/free-brands-svg-icons'

// Legg til ikoner i biblioteket
library.add(  
    //TODO,
)

// Register globalt
const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
