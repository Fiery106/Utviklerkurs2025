export function toggleDarkMode () {
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
}