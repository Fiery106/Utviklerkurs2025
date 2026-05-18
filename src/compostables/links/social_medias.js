export const facebook = {
    title: "Facebook",
    icon_id: 23,
    url: "https://www.facebook.com/alfassenterforarbeidslivsforberedelse",
    aria_label: "Hør fra oss på Facebook",
}
export const instagram = {
   title: "Instagram",
    icon_id: 24,
    url: "https://www.instagram.com/alf_bergen",
    aria_label: "Følg med oss på Instagram",
}
export const youtube = {
    title: "Youtube",
    icon_id: 25,
    url: "https://www.youtube.com/channel/UCRxcmkg2Dxash5hY4qhoWlg",
    aria_label: "Sjekk ut videoene våre på Youtube"
}
export const linkedin = {
    title: "LinkedIn",
    icon_id: 22,
    url: "https://www.linkedin.com/company/alf-as/",
    aria_label: "Jobb med oss på LinkedIn",
}

export function useSocials() {
    const social_medias = [
        facebook, instagram, youtube, linkedin
    ]

    return { social_medias }
}