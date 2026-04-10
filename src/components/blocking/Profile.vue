<script setup>
defineProps({
    empty: {
        type: Boolean,
        default: true
    },

    source: {
        type: Object,
        default: null
    }
})
</script>


<template>
    <div v-if="empty" class="justify-center items-center bg-alf-blue dark:bg-cyan-800 hidden select-none @min-sm:flex size-32 rounded-full shrink-0">
        <Icon class="text-7xl" />
    </div>

    <div v-else>
        test
    </div>
</template>