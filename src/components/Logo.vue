<script setup>
import logo_black from "@/assets/logo_black.svg"
import logo_white from "@/assets/logo_white.svg"

const alt = "Alf Logo"
</script>


<template>
    <router-link to="/">
        <img :src="logo_white" :alt class="h-8"/>
    </router-link>
</template>