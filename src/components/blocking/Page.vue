<script setup>
import Directory from '@/components/blocking/Directory.vue'
</script>


<template>
    <div class="page place-center">
        <Directory v-if="$route.name != 'hjem'" />
        <slot></slot>
    </div>
</template>