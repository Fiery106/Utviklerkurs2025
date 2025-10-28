<script setup>
defineProps({
    src: {
        type: String,
        default: ""
    },
    alt: {
        type: String,
        default: ""
    },

    isIcon: {
        type: Boolean,
        default: false
    },

    icon_name: {
        type: String,
        default: ""
    },
    icon_type: {
        type: String,
        default: "fas"
    },
})
</script>


<template>
    <font-awesome-icon v-if="isIcon" :icon="[icon_type, icon_name]" />
    <img v-else :src :alt class="selection:bg-transparent" />
</template>