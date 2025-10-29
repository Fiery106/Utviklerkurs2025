export function capitalizeFirstLetter(val) {
    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}

export function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

export function showDropdown() {
    let dropdown = document.getElementById("dropdown")
    dropdown.classList.toggle("hidden")
}

export function toggleLight() {
    console.log("goodbye")
}