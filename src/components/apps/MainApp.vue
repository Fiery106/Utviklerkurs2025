<script setup>
import Header from '@/components/_Header.vue';
import Footer from '@/components/_Footer.vue'
import ScrollToTop from "@/components/buttons/ScrollToTop.vue";
import Copied from '../toasts/Copied.vue';
</script>


<template>
    <Header />

    <main>
        <slot></slot>
    </main>

    <Footer />
    <ScrollToTop/>
    <Copied />
</template>