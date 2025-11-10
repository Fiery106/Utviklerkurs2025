<script setup>
import Image from "@/components/elements/Image.vue";
import src from "/alf_logo.svg"

import { scrollToTop } from "@/compostables/functions";

const alt = "Alf Logoen"
</script>


<template>
    <router-link :to="{name: 'hjem'}" @click="scrollToTop()" class="h-8 hover:cursor-pointer">
        <Image :src :alt class="h-full" fetchpriority="high" />
    </router-link>
</template>