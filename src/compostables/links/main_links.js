export function useMainLinks() {
    const main_links = [
        'Navigasjon',
        {
            text: 'hjem',
            to: '/',
            aria_label: ''
        },
        {
            text: 'deltaker',
            to: '/deltaker',
            aria_label: ''
        },
        {
            text: 'bedrift',
            to: '/bedrift',
            aria_label: ''
        },
        {
            text: 'nav',
            to: '/nav',
            aria_label: ''
        },
    ]

    return { main_links }
}