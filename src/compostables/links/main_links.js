export function useMainLinks() {
    const main_links = [
        'Navigasjon',
        {
            text: 'hjem',
            to: '/',
            aria_label: 'besøk hjemmeside'
        },
        {
            text: 'deltaker',
            to: '/deltaker',
            aria_label: 'besøk deltaker siden'
        },
        {
            text: 'bedrift',
            to: '/bedrift',
            aria_label: 'besøk bedrift siden'
        },
        {
            text: 'nav',
            to: '/nav',
            aria_label: 'besøk nav siden'
        },
    ]

    return { main_links }
}