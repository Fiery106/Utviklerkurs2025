<script setup>
import src from "/alf_logo.svg"

import { scrollToTop } from "@/compostables/functions";

const alt = "Alf Logo"
</script>


<template>
    <router-link :to="{name: 'hjem'}" @click="scrollToTop()" class="h-8 mx-auto">
        <img :src :alt class="h-full" fetchpriority="high" />
    </router-link>
</template>