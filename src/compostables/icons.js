export function useIcons() {
    const forPages = [
        {
            name: "user",
            type: "fas"
        },
        {
            name: "people-group",
            type: "fas"
        },
        {
            name: "building",
            type: "far"
        },
    ]

    const forNavigation = [
        {
            name: "bars",
            type: "fas"
        },
        {
            name: "arrow-right",
            type: "fas"
        },
        {
            name: "sun",
            type: "far"
        },
        {
            name: "moon",
            type: "far"
        },
    ]

    const forCourse = [
        {
            name: "html5",
            type: "fab"
        },
        {
            name: "css3-alt",
            type: "fab"
        },
        {
            name: "js",
            type: "fab"
        },
        {
            name: "react",
            type: "fab"
        },
        {
            name: "angular",
            type: "fab"
        },
        {
            name: "bootstrap",
            type: "fab"
        },
    ]

    const forSocials = [
        {
            name: "facebook",
            type: "fab"
        },
        {
            name: "square-instagram",
            type: "fab"
        },
        {
            name: "linkedin",
            type: "fab"
        },
        {
            name: "youtube",
            type: "fab"
        },
    ]

    const forContact = [
        {
            name: "phone",
            type: "fas"
        },
        {
            name: "envelope",
            type: "far"
        },
    ]

    const forMisc = [
        {
            name: "arrow-up-right-from-square",
            type: "fas"
        },
        {
            name: "copyright",
            type: "far"
        },
    ]

    return { forPages, forNavigation, forCourse, forSocials, forContact, forMisc }
}