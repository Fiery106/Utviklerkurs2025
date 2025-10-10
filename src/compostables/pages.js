export const states = [ //livet mitt skulle være enklere hvis jeg hadde enums spesielt for dette :(
    "dropdown", "toggle", "login"
]

export function usePages() {
    const pages = [ //faktisk innholdet for nettsiden
        {
            title: "Deltaker",
            url: "deltaker"
        },
        {
            title: "Bedrift",
            url: "bedrift"
        },
        {
            title: "Nav",
            url: "nav"
        },
    ]

    return { pages }
}