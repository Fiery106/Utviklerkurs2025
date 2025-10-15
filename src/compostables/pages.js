//livet mitt skulle være enklere hvis jeg hadde enums spesielt for dette :(
export const dropdown = "dropdown"
export const toggle = "toggle"
export const login = "login"

export function usePages() {
    const pages = [ //faktisk innholdet for nettsiden
        "deltaker", "bedrift", "nav"
    ]

    //flere sider her

    return { pages }
}