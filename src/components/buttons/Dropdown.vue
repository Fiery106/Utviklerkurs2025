<script setup>
defineProps({
    style: {
        type: String,
        default: '' //dropdown-dark
    }
})
</script>


<template>
    <div id="dropdown" :class="style">
        <slot>
        </slot>
    </div>
</template>