import { ref } from "vue"

export function usePages() {
    const pages = ref([
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
        {
            title: "Feil",
            url: "feil"
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

    return { pages, links }
}