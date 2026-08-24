<script setup>
import Header from '@/components/_Header.vue';
import Footer from '@/components/_Footer.vue'
import ContactInfo from '@/components/ContactInfo.vue';

import SkipToContent from '@/components/buttons/SkipToContent.vue';
import OverlayButton from '@/components/buttons/OverlayButton.vue';
import ScrollToTop from '@/components/buttons/ScrollToTop.vue';

defineProps({
    move_fix: {
        type: Boolean,
        default: false
    }
})
</script>


<template>
    <SkipToContent />
    <Header :course="true" />

    <main id="main">
        <slot></slot>
    </main>

    <!-- Ny post -->
    <OverlayButton :is-map="false" v-if="$route.name != 'kursportal'" /> 

    <ContactInfo />
    <Footer />
    <ScrollToTop :class="move_fix? 'bottom-16' : 'bottom-0'" />
</template>