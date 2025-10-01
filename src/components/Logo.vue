<script setup>
import src from "@/assets/logo.svg"

const alt = "Alf Logoen"
</script>


<template>
    <router-link to="/" class="h-8">
        <img :src :alt class="h-full mx-2 text-white text-2xl"/>
    </router-link>
</template>