export const deltaker = {
    text: 'deltaker',
    to: '#deltaker',
    aria_label: 'les mer om deltakere'
}
export const bedrift = {
   text: 'bedrift',
    to: '#bedrift',
    aria_label: 'les mer om bedrift'
}
export const nav = {
    text: 'nav',
    to: '#nav',
    aria_label: 'les mer om nav'
}

export function useMainLinks() {
    const main_links = [
        'Hurtiglenker',
        deltaker, bedrift, nav
    ]

    return { main_links }
}