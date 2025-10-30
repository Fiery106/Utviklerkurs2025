export function useContacts() {
    const org_details = {
        text: "Senter for arbeidslivforberedelse",
        name: "Alf as",
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
            image: "@/assets/images/selfies/AnnaTheodorsen1-1.jpg",
            role: "Veileder for Utviklerkurset"
        },
        {
            name: "Anna Garmann Theodorsen",
            number: "91 56 85 51",
            email: "anna@alf.no",
            image: "TomSunde-Profilbilde2.jpg",
            role: "Fagleder AFT"
        },
    ]

    const website_contacts = [
        {
            name: "Norbert Pap",
            number: "", //69 69 69 69 😏😏😏
            email: "norbertpap023@gmail.com",
            image: "",
            role: "Utvikleren for nettsiden"
        },
    ]

    const source_code = "https://github.com/Fiery106/Utviklerkurs2025"

    return { org_details, course_contacts, website_contacts, source_code }
}

export function usePhoneNumber(number) {
    const country_code_NO = "0047"
    const operation = "tel:"

    let digits = []
    let new_number = ""

    if (number) {
        digits = number.split(" ")
    }

    digits.forEach(element => {
        new_number += element.toString()
    });

    return operation + country_code_NO + new_number
}

export function useEmailAddress(mail) {
    const operation = "mailto:"

    return operation + mail
}