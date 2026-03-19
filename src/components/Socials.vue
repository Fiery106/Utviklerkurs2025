<script setup>
import { useSocials } from '@/compostables/links/social_medias'

const { social_medias } = useSocials()

defineProps({
    label: {
        type: Boolean,
        default: false
    },

    header_link: {
        type: Boolean,
        default: false
    }
})
</script>


<template>
    <div class="flex flex-col h-fit gap-4">
        <p v-if="label" class="emphasis">
            Sosialske Medier
        </p>
        <div class="flex gap-2">
            <Button :state="2" :look="header_link == true ? 0 : 1" v-for="media in social_medias" :key="media.id" :icon_id="media.icon_id" :to="media.url" :aria_label="media.aria_label" />
        </div>
    </div>
</template>