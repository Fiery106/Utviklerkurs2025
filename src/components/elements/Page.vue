<script setup>
import Block from '@/components/elements/Block.vue';
</script>


<template>
    <Block class="flex flex-col gap-8 mx-auto bg-neutral-50 max-w-7xl py-8 *:not-has-[nav]:px-8 not-xl:rounded-t-none xl:mt-16 has-[section]:*:text-base/7">
        <slot></slot>
    </Block>
</template>