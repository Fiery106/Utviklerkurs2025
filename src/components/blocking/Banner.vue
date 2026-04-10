<script setup>
import Quote from '@/components/Quote.vue';

defineProps({
    source: {
        type: Object,
        default: null
    }
})
</script>


<template>
    <div class="banner" id="banner">
        <div :class="`${$route.name == 'hjem' ? 'banner-big' : 'banner-small'}`">
            <KeepAlive>
                <img fetchpriority="high" :src="source.img" :alt="source.img_alt" class="object-cover not-md:object-right size-full" />
            </KeepAlive>
            
            <Quote v-if="$route.name == 'hjem'" :state="1" />

            <Quote v-else v-if="source.message" :state="2" :title="source.title" :message="source.message">
                <Icon v-if="source.icon_id" :id="source.icon_id" />
            </Quote>
        </div>
    </div>
</template>