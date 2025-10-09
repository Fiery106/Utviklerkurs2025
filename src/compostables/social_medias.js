import { useIcons } from "@/compostables/icons.js"

const { linkedin_icon, facebook_icon, instagram_icon, youtube_icon } = useIcons()

export function useSocials() {
    const social_medias = [
        {
            title: "Linkedin",
            icon: linkedin_icon,
            url: "https://www.linkedin.com/company/alf-as/",
        },
        {
            title: "Facebook",
            icon: facebook_icon,
            url: "https://www.facebook.com/alfassenterforarbeidslivsforberedelse",
        },
        {
            title: "Instagram",
            icon: instagram_icon,
            url: "https://www.instagram.com/alf_bergen",
        },
        {
            title: "Youtube",
            icon: youtube_icon,
            url: "https://www.youtube.com/channel/UCRxcmkg2Dxash5hY4qhoWlg",
        },
    ]

    return { social_medias }
}