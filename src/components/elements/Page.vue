<script setup>
import Block from '@/components/elements/Block.vue';
</script>


<template>
    <Block class="max-w-7xl p-8 mx-auto flex flex-col gap-8 bg-neutral-50 dark:bg-neutral-800/90 dark:text-neutral-200 not-xl:rounded-t-none xl:mt-16 rounded-tr-8xl">
        <slot></slot>
    </Block>
</template>