//livet mitt skulle være enklere hvis jeg hadde enums spesielt for dette :(
export const dropdown = "dropdown"
export const toggle = "toggle"
export const login = "login"

export function usePages() {
    const pages = [ //faktisk innholdet for nettsiden
        {
            name: "deltaker",
            color: "bg-sky-500 hover:bg-sky-600",
            aria_label: "Besøk Deltaker siden",
        },
        {
            name: "bedrift",
            color: "bg-emerald-500 hover:bg-emerald-600",
            aria_label: "Besøk Bedrift siden",
        },
        {
            name: "nav",
            color: "bg-rose-500 hover:bg-rose-600",
            aria_label: "Besøk Nav siden",
        },
    ]

    //flere sider her

    return { pages }
}