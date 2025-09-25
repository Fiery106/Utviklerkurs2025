<script setup>
import { defineProps } from "vue"

defineProps({
    logo_color: {
        type: String,
        default: "black"
    }
})

const alt = "Alf Logoen"
</script>


<template>
    <router-link to="/">
        <img :src="`src/assets/logo_${logo_color}.svg`" :alt class="h-8 text-white"/>
    </router-link>
</template>