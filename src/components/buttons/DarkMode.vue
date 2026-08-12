<script setup>
import { ref } from 'vue';
import { toggleDarkMode } from '@/compostables/dark_mode';

let toggle = ref(true)
const body = document.body
const dark_mode = localStorage.getItem('dark_mode')
const remember = localStorage.getItem('remember_preferred_theme')

if (dark_mode) {
    toggle = ref(false)
    body.setAttribute('data-theme', dark_mode)
}

// her bytter vi ut temaet hvis brukeren har satt opp et mørkt tema for nettleseren sin
// hvis brukeren har ikke logget seg på nettsiden før, vi husker dem for neste gang

if (!remember) { 
    const prefers_dark = window.matchMedia('(prefers-color-scheme: dark)')
    const prefers_light = window.matchMedia('(prefers-color-scheme: light)')

    if (prefers_dark && prefers_dark.matches) {
        body.setAttribute('data-theme', 'dark')
        localStorage.setItem('dark_mode', 'dark')

        // sett tema mørkt
        // toggleDarkMode(true)
        toggle = ref(false)
        
    } else if (prefers_light && prefers_light.matches) {
        body.toggleAttribute('data-theme')
        localStorage.removeItem('dark_mode')

        // sett tema lyst
        // toggleDarkMode(false)
        toggle = ref(true)
    }

    localStorage.setItem('remember_preferred_theme', true)
}
</script>


<template>
    <button @click="toggleDarkMode(), toggle = !toggle" class="header-link" :aria-label="`Slå på eller av mørkmodus, nåværende modus: ${toggle ? 'lys' : 'mørk'}`" aria-live="polite">
        <Icon :id="toggle ? 9 : 10 /*9 + 10 = 21*/" />
    </button>
</template>