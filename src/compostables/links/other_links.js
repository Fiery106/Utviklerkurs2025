export function useLinks() {
    const main_alf = [
        'Alf lenker',
        {
            title: 'hovedside',
            url: 'https://alf.no',
            aria_label: '',
        },
        {
            title: 'for arbeidssøkere',
            url: 'https://alf.no/for-arbeidssokere/',
            aria_label: 'Søker du på en jobb?',
        },
        {
            title: 'for arbeidsgivere',
            url: 'https://alf.no/for-arbeidsgivere/',
            aria_label: 'Trenger du en ny medarbeider?',
        },
        {
            title: 'for samarbeidspartnere',
            url: 'https://alf.no/for-samarbeidspartnere/',
            aria_label: 'Les mer om samarbeidspartnere våre',
        },
        {
            title: 'kontakt oss',
            url: 'https://alf.no/kontakt/',
            aria_label: 'Ta kontakt med oss',
        },
        {
            title: 'om oss',
            url: 'https://alf.no/om-oss/',
            aria_label: 'Les mer om oss',
        },
        {
            title: 'ressurser',
            url: 'https://alf.no/ressurser/',
            aria_label: 'Flere lenker',
        },
    ]

    const other_alf = [
        'Andre avdelinger',
        {
            title: 'alf butikk',
            url: 'https://alf-butikken.no/',
            aria_label: '',
        },
        {
            title: 'klosterhagen hotell',
            url: 'https://klosterhagenhotell.no',
            aria_label: '',
        },
    ]

    return { main_alf, other_alf }
}