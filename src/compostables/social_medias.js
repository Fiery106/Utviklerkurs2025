import { useIcons } from "@/compostables/icons.js"

const { linkedin_icon, facebook_icon, instagram_icon, youtube_icon } = useIcons()

export function useSocials() {
    const social_medias = [
        {
            title: "LinkedIn",
            icon: linkedin_icon,
            url: "https://www.linkedin.com/company/alf-as/",
            aria_label: "Følg med oss på LinkedIn",
        },
        {
            title: "Facebook",
            icon: facebook_icon,
            url: "https://www.facebook.com/alfassenterforarbeidslivsforberedelse",
            aria_label: "Følg med oss på Facebook",
        },
        {
            title: "Instagram",
            icon: instagram_icon,
            url: "https://www.instagram.com/alf_bergen",
            aria_label: "Følg med oss på Instagram",
        },
        {
            title: "Youtube",
            icon: youtube_icon,
            url: "https://www.youtube.com/channel/UCRxcmkg2Dxash5hY4qhoWlg",
            aria_label: "Sjekk ut videoene våre på Youtube"
        },
    ]

    return { social_medias }
}