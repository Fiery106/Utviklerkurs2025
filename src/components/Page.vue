<script setup>
import Directory from '@/components/Directory.vue'
</script>


<template>
    <div class="page align-center mx-auto">
        <Directory v-if="$route.name != 'hjem'" />
        <slot></slot>
    </div>
</template>