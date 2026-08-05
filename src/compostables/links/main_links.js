export const hjem = {
    text: 'hjemmeside',
    to: '/',
    aria_label: 'besøk hjemmeside'
}
export const deltaker = {
    text: 'deltaker',
    to: '/deltaker',
    aria_label: 'besøk deltaker siden'
}
export const bedrift = {
   text: 'bedrift',
    to: '/bedrift',
    aria_label: 'besøk bedrift siden'
}
export const nav = {
    text: 'nav',
    to: '/nav',
    aria_label: 'besøk nav siden'
}

export function useMainLinks() {
    const main_links = [
        'Hoved sider',
        hjem, deltaker, bedrift, nav
    ]

    return { main_links }
}