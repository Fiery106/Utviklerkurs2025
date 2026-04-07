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
    <nav aria-label="side katalog" class="col-span-full row-start-1 truncate gap-1 w-full">
        <Icon :id="4" />
        
        <Button :state="2" :look="3" :to="home_to" :text="home_text" /> / 

        <slot>
            <p class="text-neutral-500 dark:text-neutral-400 emphasis">
                {{ $route.name }}
            </p>
        </slot>
    </nav>
</template>