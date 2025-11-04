//livet mitt skulle ha vært enklere hvis jeg hadde enums for dette :(
export const dropdown = "dropdown"
export const toggle = "toggle"
export const login = "login"

export function usePages() {
    const main_pages = [
        {
            to: "deltaker",
            button_color: "bg-sky-500 hover:bg-sky-600",
            background_color: "from-sky-500",
            aria_label: "Besøk Deltaker siden",
        },
        {
            to: "bedrift",
            button_color: "bg-emerald-500 hover:bg-emerald-600",
            background_color: "from-emerald-500",
            aria_label: "Besøk Bedrift siden",
        },
        {
            to: "nav",
            button_color: "bg-rose-500 hover:bg-rose-600",
            background_color: "from-rose-500",
            aria_label: "Besøk Nav siden",
        },
    ]

    //flere sider her

    return { main_pages }
}