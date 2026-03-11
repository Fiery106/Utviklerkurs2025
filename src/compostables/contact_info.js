import Tom from "@/assets/images/selfies/TomSunde.jpg"
import Anna from "@/assets/images/selfies/AnnaTheodorsen.jpg"
import Norbert from "@/assets/images/selfies/NorbertPap.jpg"

export function useContacts() {
    const contacts = [
        {
            name: "Tom Sunde",
            role: "Veileder for Utviklerkurset",
            image: Tom,
            
            email: "tom@alf.no",
            number: "92 82 87 38",
        },
        {
            name: "Anna Garmann Theodorsen",
            role: "Fagleder AFT",
            image: Anna,

            email: "anna@alf.no",
            number: "91 56 85 51",
        },
        {
            name: "Norbert Pap",
            role: "Nett og 3D Spill Utvikler",
            image: Norbert,

            email: "norbertpap023@gmail.com",
            number: "",

            number: "", //12 34 56 78 😏😏😏
            email: "norbertpap023@gmail.com",
            link: "https://github.com/Fiery106",
            message: "Alle prosjekter"
        },
    ]

    return { contacts }
}