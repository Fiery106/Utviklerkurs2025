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