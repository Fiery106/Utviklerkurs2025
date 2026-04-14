import Tom from "@/assets/images/selfies/TomSunde.webp"
import Anna from "@/assets/images/selfies/AnnaTheodorsen.webp"
import Norbert from "@/assets/images/selfies/NorbertPap.webp"

export function useContacts() {
    const contacts = [
        {
            name: 'Tom Sunde',
            role: 'Veileder for Utviklerkurset',
            org: true,
            image: Tom,

            infos: [
                'tom@alf.no', //email
                '92 82 87 38', //telefonnummer
            ]
        },
        {
            name: 'Anna Garmann Theodorsen',
            role: 'Fagleder AFT',
            org: true,
            image: Anna,

            infos: [
                'anna@alf.no', //email
                '91 56 85 51', //telefonnummer
            ]
        },
        {
            name: 'Norbert Pap',
            role: 'Nett Utvikleren, 3D Spilldesigner',
            org: false,
            image: Norbert,

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