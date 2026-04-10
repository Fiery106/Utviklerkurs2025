import Hovedside from '@/assets/images/photos/Kode.webp'
import Deltaker from '@/assets/images/photos/Klasserom.webp'
import Bedrift from '@/assets/images/photos/Arbeid.webp'
import Nav from '@/assets/images/photos/Bord.webp'

export function usePages() {
    const home = {
        to: 'hjem',
        background_color: 'from-cyan-400 dark:from-cyan-950',
        img: Hovedside,
        img_alt: 'Utenfor Alf hovedkontor'
    }

    const student = {
        to: 'deltaker',
        title: 'for deltakere',
        message: 'Noen deltakere med ekstra stor interesse får også muligheten til å utvikle seg ytterligere og gjøre en del oppgaver over kursets nivå. Vi ønsker at tiden hos oss skal by på så mye kunnskap og erfaringer som deltaker selv ønsker!',
        
        background_color: 'background-violet',
        block_color: 'block-violet',
        
        img: Deltaker,
        img_alt: '',

        button_color: 'button-violet',
        button_aria_label: 'Informasjon til deltakerne',

        icon_id: 0
    }
    
    const company = {
        to: 'bedrift',
        title: 'for bedrifter',
        message: 'Utviklerkurset fokuserer på å lære deltakerne det mest etterspurte, framtidsrettede og moderne innen programutvikling i dag. Kurset dekker både grunnleggende ferdigheter, men tilpasses også etter det næringslivet etterspør av aktuelle tema og teknologier.',
        
        background_color: 'background-emerald',
        block_color: 'block-emerald',
        
        img: Bedrift,
        img_alt: '',

        button_color: 'button-emerald',
        button_aria_label: 'Kursets innhold??',

        icon_id: 1
    }

    const nav = {
        to: 'nav',
        title: 'om Nav',
        message: 'Deltaker søkes inn via Nav til AFT-tiltaket her hos ALF as. Spesifiser i søknad at deltaker ønsker seg inn på henholdsvis, grafisk avdeling, eller Utviklerkurset.',

        background_color: 'background-rose',
        block_color: 'block-rose',
        
        img: Nav,
        img_alt: '',

        button_color: 'button-rose',
        button_aria_label: 'Les mer om Nav',

        icon_id: 2
    }

    const main_pages = [
        student, company, nav
    ]

    return { home, student, company, nav, main_pages }
}