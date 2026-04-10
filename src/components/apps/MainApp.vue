<script setup>
import Header from '@/components/_Header.vue';
import Footer from '@/components/_Footer.vue'
</script>


<template>
    <Header />

    <slot></slot>

    <Footer />
</template>