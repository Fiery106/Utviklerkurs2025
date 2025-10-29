<script setup>
import Image from "@/components/Image.vue";
import src from "@/assets/logo.svg"
import { scrollToTop } from "@/compostables/functions";

const alt = "Alf Logoen"
</script>


<template>
    <router-link :to="{name: 'hjem'}" @click="scrollToTop()" class="h-8 select-none bg-none">
        <Image :src :alt class="h-full" />
    </router-link>
</template>