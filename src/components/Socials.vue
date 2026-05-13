<script setup>
import { useSocials } from '@/compostables/links/social_medias'

const { social_medias } = useSocials()

defineProps({
    header_link: {
        type: Boolean,
        default: false
    }
})
</script>


<template>
    <div class="flex flex-col h-fit gap-2">
        <p v-if="header_link" class="emphasis">
            Sosialske Medier
        </p>
        
        <nav class="flex gap-2">
            <a v-for="media in social_medias" :key="media.id" :href="media.url" target="_blank" :aria_label="media.aria_label" :class="header_link ? 'header-link' : 'basic-link'">
                <Icon :id="media.icon_id" />
            </a>
        </nav>
    </div>
</template>