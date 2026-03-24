<script setup>
import Quote from '@/components/Quote.vue';

defineProps({
    src: {
        type: String,
        default: ''
    },
    
    aria_label: {
        type: String,
        default: ''
    },

    message: {
        type: String,
        default: ''
    },

    title: {
        type: String,
        default: ''
    }
})
</script>


<template>
    <div class="banner">
        <div :class="`${$route.name == 'hjem' ? 'h-200 sm:h-160' : 'h-160'}`">
            <KeepAlive>
                <img fetchpriority="high" :src :aria-label="aria_label" class="object-cover not-md:object-right size-full" />
            </KeepAlive>
            
            <Quote v-if="$route.name == 'hjem'" :state="1" />

            <Quote v-else :state="2" :title :message />
        </div>
    </div>
</template>