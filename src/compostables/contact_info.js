import Tom_Full from "@/assets/images/selfies/TomSunde_FULL.webp"
import Anna_Full from "@/assets/images/selfies/AnnaTheodorsen_FULL.webp"
import Norbert_Full from "@/assets/images/selfies/NorbertPap_FULL.webp"

import Tom_128 from "@/assets/images/selfies/TomSunde_128x128.webp"
import Anna_128 from "@/assets/images/selfies/AnnaTheodorsen_128x128.webp"
import Norbert_128 from "@/assets/images/selfies/NorbertPap_128x128.webp"

import Tom_96 from "@/assets/images/selfies/TomSunde_96x96.webp"
import Anna_96 from "@/assets/images/selfies/AnnaTheodorsen_96x96.webp"
import Norbert_96 from "@/assets/images/selfies/NorbertPap_96x96.webp"


export function useContacts() {
    const contacts = [
        {
            name: 'Tom Sunde',
            role: 'Veileder for Utviklerkurset',
            org: true,
            image_full: Tom_Full,
            image_128: Tom_128,
            image_96: Tom_96,
            image: Tom_Full,

            infos: [
                'tom@alf.no', //email
                '92 82 87 38', //telefonnummer
            ]
        },
        {
            name: 'Anna Garmann Theodorsen',
            role: 'Fagleder AFT',
            org: true,
            image_full: Anna_Full,
            image_128: Anna_128,
            image_96: Anna_96,
            image: Anna_Full,

            infos: [
                'anna@alf.no', //email
                '91 56 85 51', //telefonnummer
            ]
        },
        {
            name: 'Norbert Pap',
            role: 'Nett Utvikleren, 3D Spilldesigner',
            org: false,
            image_full: Norbert_Full,
            image_128: Norbert_128,
            image_96: Norbert_96,
            image: Norbert_Full,

            infos: [
                'norbertpap023@gmail.com', //email
                '', //telefonnummer
            ],

            link: 'https://github.com/Fiery106',
            message: 'Alle prosjekter'
        },
    ]

    return { contacts }
}