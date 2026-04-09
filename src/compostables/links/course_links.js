export function useCourseLinks() {
    const course_links = [
        'Navigasjon',
        {
            text: 'Min side',
            to: '/kursportal',
            aria_label: ''
        },
        {
            text: 'Alle Post',
            to: '/kursportal/post',
            aria_label: ''
        },
        {
            text: 'Diskusjoner',
            to: '/',
            aria_label: ''
        },
        {
            text: 'Logg ut',
            to: '/',
            aria_label: ''
        }
    ]

    return { course_links }
}
    