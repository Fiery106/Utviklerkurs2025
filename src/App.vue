<script setup>
import SkipToContent from '@/components/buttons/SkipToContent.vue';
import ScrollToTop from "@/components/buttons/ScrollToTop.vue";
import Copied from '@/components/toasts/Copied.vue';
</script>


<template>
    <SkipToContent />

    <router-view />

    <ScrollToTop/>
    <Copied />
</template>