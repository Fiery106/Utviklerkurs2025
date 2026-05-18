export const hovedside = {
    text: 'hovedside',
    to: 'https://alf.no',
    aria_label: 'Hovedside for Alf',
    target: '_blank'
}
export const kontakt = {
    text: 'ta kontakt',
    to: 'https://alf.no/kontakt',
    aria_label: 'Ta kontakt med oss',
    target: '_blank'
}
export const læringsplattform = {
    text: 'Læringsplattform',
    to: 'https://ailaring.no',
    aria_label: 'Ressurser for arbeidslivet',
    target: '_blank'
}
export const inflow24 = {
    text: 'InFlow24',
    to: 'https://no.inflow24.com/app/employee/dashboard',
    aria_label: 'Søknad om personligheter og arbeidsinteresser',
    target: '_blank'
}


export function useAlfLinks() {
    const main_alf = [
        'Alf lenker',
        hovedside, kontakt, læringsplattform, inflow24
    ]

    return { main_alf }
}