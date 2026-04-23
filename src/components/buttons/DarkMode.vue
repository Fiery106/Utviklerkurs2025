<script setup>
import { ref } from 'vue';
import { toggleDarkMode } from '@/compostables/dark_mode';

let toggle = ref(true)
const body = document.body
const dark_mode = localStorage.getItem('dark_mode')

if (dark_mode) {
    toggle = false
    body.setAttribute('data-theme', dark_mode)
}

// const darkModeMql = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)');

// if (darkModeMql && darkModeMql.matches) {
//   body.setAttribute('data-theme', 'dark')
// } else {
//   body.toggleAttribute('data-theme')
// }

// window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
//     const newColorScheme = event.matches ? "dark" : "light";
//     body.setAttribute('data-theme', newColorScheme)
// });


// Velg å vise mørkmodus for første gang hvis brukeren har en mørk tema for nettleseren sin
// TODO: Sørg for at sol/måne ikonet også endrer når brukeren bytter ut mørkmodus!!
</script>


<template>
    <button @click="toggleDarkMode(), toggle = !toggle" aria-label="Slå på eller av mørkmodus" class="header-link">
        <Icon :id="toggle ? 9 : 10 /*9 + 10 = 21*/" />
    </button>
</template>