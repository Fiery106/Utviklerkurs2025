const country_code_NO = "47"
let menu = false

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
    const operation = "tel:00"

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

export function showPhoneNumber(number) {
    return "+" + country_code_NO + " " + number
}

export function useEmailAddress(mail) {
    const operation = "mailto:"

    return operation + mail
}

export function showDropdown(toggle = true) {
    //kjære gud, jeg ber deg til hjelp

    let dropdown = document.getElementById("dropdown")
    let body = document.body
    menu = false
    menu = toggle
    
    console.log(window.innerWidth) // skjermbredde >767px

    body.classList.toggle("not-md:overflow-hidden")
    dropdown.classList.toggle("hidden")

    if (menu) {
        body.addEventListener("mousedown", function toggle () {
            setTimeout(() => {
                body.classList.toggle("not-md:overflow-hidden")
                dropdown.classList.toggle("hidden")

                body.removeEventListener("mousedown", toggle)
                menu = false
            }, 100);
        })
    }
}

export function toggleDarkMode () {
    let dark_mode = "dark"
    let body = document.body
    
    if(body.getAttribute("data-theme")) {
        body.toggleAttribute("data-theme", false)
    } else {
        body.setAttribute("data-theme", dark_mode)
    }
}

function toggle () {
    console.log("test")
}