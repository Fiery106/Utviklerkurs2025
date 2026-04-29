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
    <nav aria-label="side katalog" class="truncate gap-1 select-none">
        <Icon :id="4" />
        
        <router-link :to="home_to" class="text-neutral-600 dark:text-neutral-300/75 emphasis hover:text-neutral-500 dark:hover:text-neutral-50">
            {{ home_text }}
        </router-link> 
        
        /

        <slot></slot>

        <p class="text-neutral-600 dark:text-neutral-300/75 emphasis">
            {{ $route.name }}
        </p>
    </nav>
</template>