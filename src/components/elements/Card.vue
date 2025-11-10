<script setup>
import Block from '@/components/elements/Block.vue';
</script>


<template>
    <Block class="flex items-center gap-8 w-full p-8 border-4 border-white bg-gradient-to-br from-white via-neutral-100 to-zinc-300">
        <slot></slot>
    </Block>
</template>