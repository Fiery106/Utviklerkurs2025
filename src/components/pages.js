import { ref } from "vue"

export function usePages() {
    const pages = ref([ //faktisk innholdet for nettsiden
        {
            title: "Deltaker",
            url: "deltaker"
        },
        {
            title: "Bedrift",
            url: "bedrift"
        },
        {
            title: "Nav",
            url: "nav"
        },
    ])

    const links = ref([
        {
            title: "For arbeidssøkere",
            url: "https://alf.no/for-arbeidssokere/"
        },
        {
            title: "For arbeidsgivere",
            url: "https://alf.no/for-arbeidsgivere/"
        },
        {
            title: "For samarbeidspartnere",
            url: "https://alf.no/for-samarbeidspartnere/"
        },
        {
            title: "Kontakt oss",
            url: "https://alf.no/kontakt/"
        },
        {
            title: "Om oss",
            url: "https://alf.no/om-oss/"
        },
        {
            title: "Ressurser",
            url: "https://alf.no/ressurser/"
        },
    ])

    const socials = ref([
        {
            title: "LinkedIn",
            url: "https://www.linkedin.com/company/alf-as/"
        },
        {
            title: "Facebook",
            url: "https://www.facebook.com/alfassenterforarbeidslivsforberedelse"
        },
        {
            title: "Instagram",
            url: "https://www.instagram.com/alf_bergen"
        },
        {
            title: "Youtube",
            url: "https://www.youtube.com/channel/UCRxcmkg2Dxash5hY4qhoWlg"
        },
    ])

    return { pages, links, socials }
}

export function useStates() {
    const states = ["dropdown", "toggle", "login"]

    return { states }
}