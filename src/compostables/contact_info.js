export function useContacts() {
    const course_contacts = [
        {
            name: "Tom Sunde",
            number: "92 82 87 38",
            email: "tom@alf.no",
            image: "@/assets/images/selfies/TomSunde.jpg",
            role: "Veileder for Utviklerkurset"
        },
        {
            name: "Anna Garmann Theodorsen",
            number: "91 56 85 51",
            email: "anna@alf.no",
            image: "@/assets/images/selfies/AnnaTheodorsen.jpg",
            role: "Fagleder AFT"
        },
    ]

    const website_contacts = [
        {
            name: "Norbert Pap",
            number: "", //69 69 69 69 😏😏😏
            email: "norbertpap023@gmail.com",
            image: "@/assets/images/selfies/ ???",
            role: "Utvikleren for nettsiden"
        },
    ]

    const source_code = "https://github.com/Fiery106/Utviklerkurs2025"

    return { course_contacts, website_contacts, source_code }
}