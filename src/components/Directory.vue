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
        <slot>
            <Button :state="2" :look="3" :to="home_to" :text="home_text" /> / 
            <Button :state="2" :look="3" :text="$route.name" />
        </slot>
    </nav>
</template>