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
    fetchpriority: {
        type: String,
        default: "low"
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
        <img :src :alt :fetchpriority class="select-none bg-none" />
    </KeepAlive>
</template>