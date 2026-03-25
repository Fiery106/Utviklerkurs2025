<script setup>
import Quote from '@/components/Quote.vue';

defineProps({
    source: {
        type: Object,
        default: null
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
    },

    icon_id: {
        type: Number,
        default: null
    }
})
</script>


<template>
    <div class="banner">
        <div :class="`${$route.name == 'hjem' ? 'banner-big' : 'banner-small'}`">
            <KeepAlive>
                <img fetchpriority="high" :src="source.img" :aria-label="source.aria_label" class="object-cover not-md:object-right size-full" />
            </KeepAlive>
            
            <Quote v-if="$route.name == 'hjem'" :state="1" />

            <Quote v-else :state="2" :title="source.title" :message="source.message" :icon_id="source.icon_id" />
        </div>
    </div>
</template>