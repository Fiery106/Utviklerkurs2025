<script setup>
import Header from '@/components/_Header.vue';
import Footer from '@/components/_Footer.vue'
import ContactInfo from '@/components/ContactInfo.vue';

import OverlayButton from '@/components/buttons/OverlayButton.vue';
import ScrollToTop from '@/components/buttons/ScrollToTop.vue';
import SkipToContent from '@/components/buttons/SkipToContent.vue';

defineProps({
    move_away: {
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

    <OverlayButton :is-map="false" v-if="$route.name != 'kursportal'" />

    <ContactInfo />
    <Footer />
    <ScrollToTop :class="move_away? 'bottom-16' : 'bottom-0'" />
</template>