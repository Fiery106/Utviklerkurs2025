export function useCourseLinks() {
    const course_links = [
        {
            text: 'Min side',
            to: 'kursportal',
            name: 'Min side',
            aria_label: ''
        },
        {
            text: 'Alle Post',
            to: 'kursportal/post',
            name: 'Alle post',
            aria_label: ''
        },
        {
            text: 'Diskusjoner',
            to: '',
            name: 'Diskusjoner',
            aria_label: ''
        },
    ]

    return { course_links }
}
    