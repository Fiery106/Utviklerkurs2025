export function useIcons() {
    const example = {
        name: "ICON_NAME",
        type: "ICON_TYPE",
        color: ""
    }

    const user_icon = {
        name: "user",
        type: "fas",
        color: ""
    }

    const people_icon = {
        name: "people-group",
        type: "fas",
        color: ""
    }

    const building_icon = {
        name: "building",
        type: "far",
        color: ""
    }

    const bars_icon = {
        name: "bars",
        type: "fas",
        color: ""
    }

    const arrow_right_icon = {
        name: "arrow-right",
        type: "fas",
        color: ""
    }

    const sun_icon = {
        name: "sun",
        type: "far",
        color: ""
    }

    const moon_icon = {
        name: "moon",
        type: "far",
        color: ""
    }
    
    const html_icon = {
        name: "html5",
        type: "fab",
        color: "text-orange-500"
    }

    const css_icon = {
        name: "css",
        type: "fab",
        color: "text-purple-500"
    }

    const js_icon = {
        name: "js",
        type: "fab",
        color: "text-amber-300"
    }

    const react_icon = {
        name: "react",
        type: "fab",
        color: "text-cyan-400"
    }

    const angular_icon = {
        name: "angular",
        type: "fab",
        color: "text-red-500"
    }

    const bootstrap_icon = {
        name: "bootstrap",
        type: "fab",
        color: "text-violet-600"
    }

    const facebook_icon = {
        name: "facebook",
        type: "fab",
        color: "text-blue-600"
    }

    const instagram_icon = {
        name: "square-instagram",
        type: "fab",
        color: "¯\_(ツ)_/¯" 
        //det kunne være sinnsykt hvis vi hadde en text gradient her men problement er at instagram ikonet er jævlig vanskelig å lage ved tailwind (og css i generelt)
    }

    const linkedin_icon = {
        name: "linkedin",
        type: "fab",
        color: "text-blue-500"
    }

    const youtube_icon = {
        name: "youtube",
        type: "fab",
        color: "text-red-500"
    }
    
    const phone_icon = {
        name: "phone",
        type: "fas",
        color: ""
    }

    const envelope_icon = {
        name: "envelope",
        type: "far",
        color: ""
    }

    const arrow_up_right_icon = {
        name: "arrow-up-right-from-square",
        type: "fas",
        color: ""
    }

    const copyright_icon = {
        name: "copyright",
        type: "far",
        color: ""
    }

    return { 
        user_icon, people_icon, building_icon, //sider

        bars_icon, arrow_right_icon, sun_icon, moon_icon, //navigasjon og navbar

        html_icon, css_icon, js_icon, react_icon, angular_icon, bootstrap_icon, //programmeringspråk (mest brukt til forsiden)

        facebook_icon, instagram_icon, linkedin_icon, youtube_icon, //sosiale medier

        phone_icon, envelope_icon, arrow_up_right_icon, copyright_icon //andre
     }
}