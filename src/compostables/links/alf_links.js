export function useLinks() {
    const main_alf = [
        'Alf lenker',
        {
            text: 'hovedside',
            to: 'https://alf.no',
            aria_label: 'Hovedside for Alf',
            target: '_blank'
        },
        {
            text: 'ta kontakt',
            to: 'https://alf.no/kontakt',
            aria_label: 'Ta kontakt med oss',
            target: '_blank'
        },
        {
            text: 'Læringsplattform',
            to: 'https://ailaring.no',
            aria_label: 'Ressurser for arbeidslivet',
            target: '_blank'
        },
        {
            text: 'InFlow24',
            to: 'https://no.inflow24.com/app/employee/dashboard',
            aria_label: 'Søknad om personligheter og arbeidsinteresser',
            target: '_blank'
        },
    ]

    return { main_alf }
}