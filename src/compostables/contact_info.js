import Tom from "@/assets/images/selfies/TomSunde.jpg"
import Anna from "@/assets/images/selfies/AnnaTheodorsen.jpg"
import Norbert from "@/assets/images/selfies/NorbertPap.jpg"

export function useContacts() {
    const organisation = {
        title: "Senter for arbeidslivforberedelse",
        name: "ALF as", //Må ikke skrives på en annen måte!!
        num: "881 097 982",

        /* Copyright © 2023 */
        copyright: "Copyright",
        year: "2023",
        rights: "All right reserved"
    }

    const course_contacts = [
        {
            name: "Tom Sunde",
            number: "92 82 87 38",
            email: "tom@alf.no",
            image: Tom,
            role: "Veileder for Utviklerkurset"
        },
        {
            name: "Anna Garmann Theodorsen",
            number: "91 56 85 51",
            email: "anna@alf.no",
            image: Anna,
            role: "Fagleder AFT"
        },
    ]

    const website_contacts = [
        {
            name: "Norbert Pap",
            number: "", //69 69 69 69 😏😏😏
            email: "norbertpap023@gmail.com",
            image: Norbert,
            role: "Nett og 3D Spill Utvikler",
            link: "https://github.com/Fiery106",
            message: "Alle prosjekter",
            worked_on: [
                "hjem", "deltaker", "bedrift", "nav", "feil"
            ]
        },
    ]

    const source_code = "https://github.com/Fiery106/Utviklerkurs2025"

    return { organisation, course_contacts, website_contacts, source_code }
}