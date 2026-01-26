export function useIcons() {
    const eksempel = {
        name: "IKON_NAVN",
        type: "IKON_TYPE",
        color: "",
        alt: "",
    }

    const user_icon = {
        name: "user",
        type: "fas",
        color: "",
        alt: "Bruker ikon",
    }

    const people_icon = {
        name: "people-group",
        type: "fas",
        color: "",
        alt: "Mennesker ikon",
    }

    const building_icon = {
        name: "building",
        type: "fas",
        color: "",
        alt: "Bygning ikon",
    }

    const bars_icon = {
        name: "bars",
        type: "fas",
        color: "",
        alt: "Stenger ikon",
    }

    const arrow_right_icon = {
        name: "arrow-right",
        type: "fas",
        color: "",
        alt: "Høyre pil ikon",
    }

    const sun_icon = {
        name: "sun",
        type: "far",
        color: "",
        alt: "Sol ikon",
    }

    const moon_icon = {
        name: "moon",
        type: "far",
        color: "",
        alt: "Måne ikon",
    }
    
    const html_icon = {
        name: "html5",
        type: "fab",
        color: "text-orange-500",
        alt: "Html ikon",
    }

    const css_icon = {
        name: "css",
        type: "fab",
        color: "text-purple-500",
        alt: "Css ikon",
    }

    const js_icon = {
        name: "js",
        type: "fab",
        color: "text-amber-300",
        alt: "Javascript ikon",
    }

    const react_icon = {
        name: "react",
        type: "fab",
        color: "text-cyan-400",
        alt: "React ikon",
    }

    const angular_icon = {
        name: "angular",
        type: "fab",
        color: "text-red-500",
        alt: "Angular ikon",
    }

    const bootstrap_icon = {
        name: "bootstrap",
        type: "fab",
        color: "text-violet-600",
        alt: "Bootstrap ikon",
    }

    const facebook_icon = {
        name: "facebook",
        type: "fab",
        color: "text-blue-600",
        alt: "Facebook ikon",
    }

    const instagram_icon = {
        name: "square-instagram",
        type: "fab",
        color: "¯\_(ツ)_/¯",
        alt: "Instagram ikon",
        //det kunne være sinnsykt hvis vi hadde en text gradient her men problement er at instagram ikonet er jævlig vanskelig å lage ved tailwind (og css i generelt)
    }

    const linkedin_icon = {
        name: "linkedin",
        type: "fab",
        color: "text-blue-500",
        alt: "LinkedIn ikon",
    }

    const youtube_icon = {
        name: "youtube",
        type: "fab",
        color: "text-red-500",
        alt: "Youtube ikon",
    }
    
    const phone_icon = {
        name: "phone",
        type: "fas",
        color: "",
        alt: "Telefon ikon",
    }

    const envelope_icon = {
        name: "envelope",
        type: "fas",
        color: "",
        alt: "Post ikon",
    }

    const link_icon = {
        name: "link",
        type: "fas",
        color: "",
        alt: "Lenke ikon",
    }

    const arrow_up_right_icon = {
        name: "arrow-up-right-from-square",
        type: "fas",
        color: "",
        alt: "Pil opp til høyre ikon",
    }

    const copyright_icon = {
        name: "copyright",
        type: "far",
        color: "",
        alt: "Copyright ikon",
    }
    
    const download_icon = {
        name: "download",
        type: "fas",
        color: "",
        alt: "Last ned fil ikon",
    }

    const circle_icon = {
        name: "circle-xmark",
        type: "fas",
        color: "",
        alt: "Sirkel ikon",
    }

    return { 
        user_icon, people_icon, building_icon, //sider

        bars_icon, arrow_right_icon, sun_icon, moon_icon, //navigasjon og navbar

        html_icon, css_icon, js_icon, react_icon, angular_icon, bootstrap_icon, //programmeringspråk (mest brukt til forsiden)

        facebook_icon, instagram_icon, linkedin_icon, youtube_icon, //sosiale medier

        phone_icon, envelope_icon, arrow_up_right_icon, link_icon, copyright_icon, download_icon, circle_icon //andre
     }
}