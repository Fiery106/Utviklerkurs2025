export function useLinks() {
    const main_alf = [
        'Alf lenker',
        {
            text: 'hovedside',
            to: 'https://alf.no',
            aria_label: '',
            target: '_blank'
        },
        {
            text: 'for arbeidssøkere',
            to: 'https://alf.no/for-arbeidssokere/',
            aria_label: 'Søker du på en jobb?',
            target: '_blank'
        },
        {
            text: 'for arbeidsgivere',
            to: 'https://alf.no/for-arbeidsgivere/',
            aria_label: 'Trenger du en ny medarbeider?',
            target: '_blank'
        },
        {
            text: 'for samarbeidspartnere',
            to: 'https://alf.no/for-samarbeidspartnere/',
            aria_label: 'Les mer om samarbeidspartnere våre',
            target: '_blank'
        },
        {
            text: 'kontakt oss',
            to: 'https://alf.no/kontakt/',
            aria_label: 'Ta kontakt med oss',
            target: '_blank'
        },
        {
            text: 'om oss',
            to: 'https://alf.no/om-oss/',
            aria_label: 'Les mer om oss',
            target: '_blank'
        },
        {
            text: 'ressurser',
            to: 'https://alf.no/ressurser/',
            aria_label: 'Flere lenker',
            target: '_blank'
        },
    ]

    const other_alf = [
        'Andre avdelinger',
        {
            text: 'alf butikk',
            to: 'https://alf.no/produkter/',
            aria_label: '',
            target: '_blank'
        },
        {
            text: 'Læringsplattform',
            to: 'https://ailaring.no',
            aria_label: '',
            target: '_blank'
        },
        {
            text: 'klosterhagen hotell',
            to: 'https://klosterhagenhotell.no',
            aria_label: '',
            target: '_blank'
        },
    ]

    return { main_alf, other_alf }
}