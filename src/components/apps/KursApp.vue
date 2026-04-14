<script setup>
import Header from '@/components/_Header.vue';
import Footer from '@/components/_Footer.vue'
import ContactInfo from '@/components/ContactInfo.vue';
</script>


<template>
    <Header :course="true" />

    <main>
        <slot></slot>
    </main>

    <ContactInfo />
    <Footer />
</template>