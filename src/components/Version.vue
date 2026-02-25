<script setup>
defineProps({
    version: {
        type: String,
    }
})
</script>


<template>
    <p class="version-num">
        v. {{ version }}
    </p>
</template>