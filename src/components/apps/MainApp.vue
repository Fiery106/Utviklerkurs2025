<script setup>
import Header from '@/components/_Header.vue';
import Footer from '@/components/_Footer.vue'

import SkipToContent from '@/components/buttons/SkipToContent.vue';
import ScrollToTop from '@/components/buttons/ScrollToTop.vue';
</script>


<template>
    <SkipToContent />
    <Header />

    <main id="main">
        <slot></slot>
    </main>

    <Footer />
    <ScrollToTop />
</template>