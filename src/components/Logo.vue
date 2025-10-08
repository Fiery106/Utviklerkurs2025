<script setup>
import src from "@/assets/logo.svg"

const alt = "Alf Logoen"
</script>


<template>
    <router-link :to="{name: 'hjem'}" class="h-8">
        <img :src :alt class="h-full mx-2 text-white text-1xl"/>
    </router-link>
</template>