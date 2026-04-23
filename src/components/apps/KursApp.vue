<script setup>
import Header from '@/components/_Header.vue';
import Footer from '@/components/_Footer.vue'
import ContactInfo from '@/components/ContactInfo.vue';

import OverlayButton from '@/components/buttons/OverlayButton.vue';
</script>


<template>
    <Header :course="true" />

    <main>
        <slot></slot>
    </main>

    <OverlayButton :is-map="false" v-if="$route.name != 'kursportal'" />

    <ContactInfo />
    <Footer />
</template>