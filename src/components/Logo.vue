<script setup>
import src from "@/assets/logo.svg"

const alt = "Alf Logoen"
</script>


<template>
    <router-link :to="{name: 'hjem'}" class="h-8 select-none bg-none">
        <img :src :alt class="h-full"/>
    </router-link>
</template>