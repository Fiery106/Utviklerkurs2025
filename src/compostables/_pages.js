import Hovedside from '@/assets/images/photos/AlfKontor.webp'
//import Deltaker from ''
//import Bedrift from ''
//import Nav from ''
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
        
        src: Bnuuy,
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
        
        src: Bnuuy,
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
        
        src: Bnuuy,
        img_aria_label: '',

        button_color: 'button-rose',
        button_aria_label: 'Besøk Nav siden',
    }

    return { home, student, company, nav }
}