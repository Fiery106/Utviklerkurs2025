export function capitalizeFirstLetter(val) {
    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}

export function scrollToTop() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
}


let menu = false

export function showDropdown(toggle = true) {
    //kjære gud, jeg ber deg til hjelp

    let dropdown = document.getElementById('dropdown')
    let body = document.body
    menu = false
    menu = toggle

    body.classList.toggle('not-md:overflow-hidden')
    dropdown.classList.toggle('hidden')

    if (menu) {
        body.addEventListener('mousedown', function toggle () {
            setTimeout(() => {
                body.classList.toggle('not-md:overflow-hidden')
                dropdown.classList.toggle('hidden')

                body.removeEventListener('mousedown', toggle)
                menu = false
            }, 100);
        })
    }
}