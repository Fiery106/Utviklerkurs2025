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
            text: 'Læringsplattform',
            to: 'https://ailaring.no',
            aria_label: '',
            target: '_blank'
        },
        {
            text: 'InFlow24',
            to: 'https://no.inflow24.com/app/employee/dashboard',
            aria_label: '',
            target: '_blank'
        },
    ]

    return { main_alf }
}