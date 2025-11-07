export function capitalizeFirstLetter(val) {
    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}

export function scrollToTop() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
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

export function showDropdown() {
    let dropdown = document.getElementById("dropdown")
    dropdown.classList.toggle("hidden")
}

export function toggleLight() {
    console.log("goodbye")
}