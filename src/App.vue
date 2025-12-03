<script setup>
import Header from '@/components/_Header.vue';
import Footer from '@/components/_Footer.vue';
</script>


<template>
    <Header :limit="3" />
    <router-view />
    <Footer v-if="$route.name !== 'feil'" />
</template>