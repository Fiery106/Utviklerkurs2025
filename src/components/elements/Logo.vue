<script setup>
import Image from "@/components/elements/Image.vue";
import src from "/alf_logo.svg"

import { scrollToTop } from "@/compostables/functions";

const alt = "Alf Logoen"
</script>


<template>
    <router-link :to="{name: 'hjem'}" @click="scrollToTop()" class="h-8">
        <Image :src :alt class="h-full" />
    </router-link>
</template>