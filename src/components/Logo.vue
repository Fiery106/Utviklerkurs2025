<script setup>
import src from "@/assets/logo.svg"

const alt = "Alf Logoen"
</script>


<template>
    <router-link to="/">
        <img :src :alt class="h-8 text-white mx-2"/>
    </router-link>
</template>