<script setup>
import Footer from '@/components/_Footer.vue';
import { usePages } from '@/compostables/_pages';

const { error } = usePages()
</script>


<!-- App.vue -->
<template>
  <Footer v-if="$route.name != error.to"/>
</template>