<script setup>
import ScrollToTop from "@/components/buttons/ScrollToTop.vue";
import Copied from '@/components/toasts/Copied.vue';
</script>


<template>
    <router-view />

    <ScrollToTop/>
    <Copied />
</template>