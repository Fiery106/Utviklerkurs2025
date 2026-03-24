import Hovedside from '@/assets/images/photos/AlfKontor.webp'
import Deltaker from '@/assets/images/photos/Kode.webp'
import Bedrift from '@/assets/images/photos/Arbeid.webp'
import Nav from '@/assets/images/photos/Bord.webp'
import Bnuuy from '@/assets/images/ref/Bnuuy_1.png'

export function usePages() {
    const home = {
        to: 'hjem',
        background_color: 'from-cyan-400 dark:from-cyan-950',
        src: Hovedside,
        img_aria_label: 'Utenfor Alf hovedkontor'
    }

    const student = {
        to: 'deltaker',
        title: 'For deltakere',
        quote: 'Noen deltakere med ekstra stor interesse får også muligheten til å utvikle seg ytterligere og gjøre en del oppgaver over kursets nivå. Vi ønsker at tiden hos oss skal by på så mye kunnskap og erfaringer som deltaker selv ønsker!',
        
        background_color: 'background-violet',
        block_color: 'block-violet',
        
        src: Deltaker,
        img_aria_label: '',

        button_color: 'button-violet',
        button_aria_label: 'Viktige informasjon til deltakerne',
    }
    
    const company = {
        to: 'bedrift',
        title: 'For bedrifter',
        quote: 'Utviklerkurset fokuserer på å lære deltakerne det mest etterspurte, framtidsrettede og moderne innen programutvikling i dag. Kurset dekker både grunnleggende ferdigheter, men tilpasses også etter det næringslivet etterspør av aktuelle tema og teknologier.',
        
        background_color: 'background-emerald',
        block_color: 'block-emerald',
        
        src: Bedrift,
        img_aria_label: '',

        button_color: 'button-emerald',
        button_aria_label: 'Les mer om kursets innholdet',
    }

    const nav = {
        to: 'nav',
        title: 'Om nav',
        quote: 'Deltaker søkes inn via Nav til AFT-tiltaket her hos ALF as. Spesifiser i søknad at deltaker ønsker seg inn på henholdsvis, grafisk avdeling, eller Utviklerkurset.',

        background_color: 'background-rose',
        block_color: 'block-rose',
        
        src: Nav,
        img_aria_label: '',

        button_color: 'button-rose',
        button_aria_label: 'Besøk Nav siden',
    }

    const main_pages = [
        student, company, nav
    ]

    return { home, student, company, nav, main_pages }
}