<script setup>
defineProps({
    download: {
        type: String,
        default: ''
    },
    text: {
        type: String,
        default: ''
    },
})
</script>


<template>
    <a name="last ned" :download aria-label="last ned filene" class="download-button">
        <Icon :id="18" />

        {{ text }}
    </a>
</template>