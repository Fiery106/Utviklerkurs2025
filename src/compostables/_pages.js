import router from "@/router"

const all_routes = router.getRoutes()

export function usePages() {
    const home = {
        to: "hjem",
        title: "Alf Utviklerkurs",
        quote: [
            "ALF Utviklerkurs", 
            "Tjenester av høy kvalitet, levert med profesjonalitet og flid.", 
            "Et intensivkurs i nettside- og programutvikling med mål om å gi deltakerne en god innføring i prinsippene for utvikling av strukturerte, kreative og velfungerende løsninger."
        ],
        button_color: "",
        background_color: "",
        background_image: "",
        aria_label: "",
    }

    const student = {
        to: "deltaker",
        title: "For deltakere",
        quote: "Noen deltakere med ekstra stor interesse får også muligheten til å utvikle seg ytterligere og gjøre en del oppgaver over kursets nivå. Vi ønsker at tiden hos oss skal by på så mye kunnskap og erfaringer som deltaker selv ønsker!",
        button_color: "bg-violet-500/70 hover:bg-violet-500",
        background_color: "from-violet-500",
        background_image: "bg-violet-500/10",
        aria_label: "Viktige informasjon til deltakerne",
    }
    
    const company = {
        to: "bedrift",
        title: "For bedrifter",
        quote: "Utviklerkurset fokuserer på å lære deltakerne det mest etterspurte, framtidsrettede og moderne innen programutvikling i dag. Kurset dekker både grunnleggende ferdigheter, men tilpasses også etter det næringslivet etterspør av aktuelle tema og teknologier.",
        button_color: "bg-emerald-500/75 hover:bg-emerald-500",
        background_color: "from-emerald-500",
        background_image: "bg-emerald-500/10",
        aria_label: "Les mer om kursets innholdet",
    }

    const nav = {
        to: "nav",
        title: "For nav",
        quote: "Deltaker søkes inn via Nav til AFT-tiltaket her hos ALF as. Spesifiser i søknad at deltaker ønsker seg inn på henholdsvis, grafisk avdeling, eller Utviklerkurset.",
        button_color: "bg-rose-500/70 hover:bg-rose-500",
        background_color: "from-rose-500",
        background_image: "bg-rose-500/10",
        aria_label: "Besøk Nav siden",
    }

    const error = {
        to: "feil",
        title: "404",
        quote: "siden ble ikke funnet",
        button_color: "",
        background_color: "bg-alf-blue",
        background_image: "",
        aria_label: "",
    }

    const course_portal = {
        to: "kursportal",
        title: "404",
        quote: "siden ble ikke funnet",
        button_color: "",
        background_color: "bg-alf-blue",
        background_image: "",
        aria_label: "",
    }

    const login = {
        to: "login",
        title: "",
        quote: "",
        button_color: "",
        background_color: "",
        background_image: "",
        aria_label: "",
    }

    const main_pages = [
        student, company, nav,
    ]

    const course_pages = [
        login, error
    ]

    const all_pages = [
        home, student, company, nav, login, course_portal, error
    ]

    for (let i = 0; i < all_pages.length; i++) {
        all_pages[i].to = all_routes[i].name
    }

    return { main_pages, course_pages, all_pages, home, student, company, nav, error, login }
}