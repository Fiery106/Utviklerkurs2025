export function toggleDarkMode (default_theme = 1) {
    const dark_mode = 'dark'
    const body = document.body

    localStorage.setItem('dark_mode', dark_mode)

    if (body.getAttribute('data-theme')) {
        body.toggleAttribute('data-theme')
        localStorage.removeItem('dark_mode')
    } else {
        body.setAttribute('data-theme', dark_mode)
        localStorage.setItem('dark_mode', dark_mode)
    }

    // TODO: FIKS DETTE
    if (default_theme == 'light') {
        body.toggleAttribute('data-theme')
        localStorage.removeItem('dark_mode')
    } else if (default_theme == 'dark') {
        body.setAttribute('data-theme', dark_mode)
        localStorage.setItem('dark_mode', dark_mode)
    }

    console.log(default_theme)
}