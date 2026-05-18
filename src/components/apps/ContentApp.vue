<script setup>
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
    <ScrollToTop :class="move_away? 'bottom-16' : 'bottom-0'" />
    <SkipToContent />
</template>