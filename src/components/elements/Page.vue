<script setup>
import Block from '@/components/elements/Block.vue';
</script>


<template>
    <Block class="flex flex-col gap-8 bg-neutral-50 min-w-sm max-w-7xl not-xl:rounded-t-none xl:mt-16 has-[section]:*:text-base/7">
        <slot></slot>
    </Block>
</template>