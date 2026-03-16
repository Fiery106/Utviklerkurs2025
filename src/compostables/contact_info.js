import Tom from "@/assets/images/selfies/TomSunde.webp"
import Anna from "@/assets/images/selfies/AnnaTheodorsen.webp"
import Norbert from "@/assets/images/selfies/NorbertPap.webp"

export function useContacts() {
    const contacts = [
        {
            name: "Tom Sunde",
            role: "Veileder for Utviklerkurset",
            image: Tom,

            email: "tom@alf.no",
            number: "92 82 87 38",

            infos: [
                "tom@alf.no", //email
                "92 82 87 38", //telefonnummer
            ]
        },
        {
            name: "Anna Garmann Theodorsen",
            role: "Fagleder AFT",
            image: Anna,

            email: "anna@alf.no",
            number: "91 56 85 51",

            infos: [
                "anna@alf.no", //email
                "91 56 85 51", //telefonnummer
            ]
        },
        {
            name: "Norbert Pap",
            role: "Nett og 3D Spill Utvikler",
            image: Norbert,

            email: "norbertpap023@gmail.com",
            number: "",

            infos: [
                "norbertpap023@gmail.com", //email
                "", //telefonnummer
            ],

            link: "https://github.com/Fiery106",
            message: "Alle prosjekter"
        },
    ]

    return { contacts }
}