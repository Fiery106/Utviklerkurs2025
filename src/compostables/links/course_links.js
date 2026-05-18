export const min_side = {
    text: 'Min Side',
    to: '/kursportal',
    aria_label: ''
}
export const alle_post = {
    text: 'Alle Post',
    to: '/kursportal/post',
    aria_label: ''
}
export const diskusjoner = {
    text: 'Diskusjoner',
    to: '/',
    aria_label: ''
}
export const logg_ut = {
     text: 'Logg Ut',
    to: '/',
    aria_label: ''
}

export function useCourseLinks() {
    const course_links = [
        'Navigasjon', min_side, alle_post, diskusjoner, logg_ut
    ]

    return { course_links }
}
    