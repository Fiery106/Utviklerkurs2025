<script setup>
defineProps({
    home_to: {
        type: String,
        default: '/'
    },

    home_text: {
        type: String,
        default: 'hjemmeside'
    }
})
</script>


<template>
    <nav aria-label="side katalog" class="truncate gap-1 select-none">
        <Icon :id="4" />
        
        <router-link :to="home_to" class="text-neutral-500 dark:text-neutral-400 emphasis hover:text-neutral-400 dark:hover:text-neutral-50">
            Hjemmeside
        </router-link> 
        
        /

        <slot>
            <p class="text-neutral-500 dark:text-neutral-400 emphasis">
                {{ $route.name }}
            </p>
        </slot>
    </nav>
</template>