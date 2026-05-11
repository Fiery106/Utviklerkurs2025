<script setup>
defineProps({
    home_to: {
        type: String,
        default: '/'
    },

    home_text: {
        type: String,
        default: 'Hjemmeside'
    }
})
</script>


<template>
    <nav class="truncate gap-1 select-none" aria-label="side katalog">
        <Icon :id="4" />
        
        <router-link :to="home_to" class="text-neutral-600 dark:text-neutral-300/75 emphasis hover:text-neutral-500 dark:hover:text-neutral-50" :aria-label="`til ${home_text}`">
            {{ home_text }}
        </router-link> 
        
        /

        <slot></slot>

        <p class="text-neutral-600 dark:text-neutral-300/75 emphasis" :aria-label="`nåværende siden ${$route.name}`">
            {{ $route.name }}
        </p>
    </nav>
</template>