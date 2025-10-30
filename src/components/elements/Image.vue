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
    <KeepAlive v-if="isIcon">
        <font-awesome-icon :icon="[icon_type, icon_name]" :alt />
    </KeepAlive>
    <KeepAlive v-else>
        <img :src :alt fetchpriority="high" class="selection:bg-transparent" />
    </KeepAlive>
</template>