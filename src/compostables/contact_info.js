export function useContacts() {
    const company_details = {
        subtext: "SENTER FOR ARBEIDSLIVSFORBEREDELSE",
        name: "ALF AS",
        number: "881 097 982",
        email: "",
        copyright: "Copyright", /* Copyright © 2023  */
        rights: "2023 - All right reserved"
    }

    //HOVEDKONTOR : 92-09-28-39

    const course_contacts = [
        {
            name: "Tom Sunde",
            number: "92 82 87 38",
            email: "tom@alf.no",
            image: "",
            role: "Veileder for Utviklerkurset"
        },
        {
            name: "Anna Garmann Theodorsen",
            number: "91 56 85 51",
            email: "",
            image: "",
            role: "Fagleder AFT"
        },
    ]

    const website_contacts = [
        {
            name: "Norbert Pap",
            number: "",
            email: "norbertpap023@gmail.com",
            image: "",
            role: "Utvikleren for nettsiden"
        },
    ]

    const source_code = "https://github.com/Fiery106/Utviklerkurs2025"

    return { company_details, course_contacts, website_contacts, source_code }
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