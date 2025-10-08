<script setup>
import { defineProps } from "vue"
import Button from "@/components/Button.vue"
import { usePages, useStates } from "@/compostables/pages.js"

const { pages, links } = usePages()
const { states } = useStates()

defineProps({
    limit: {
        type: Number,
        default: 3,
    }
})
</script>


<template>
    <slot>
        <Button :state="states[1]" />
        <Button v-for="page in pages.slice(0, limit)" :text="page.title" :to="page.url" />
        <!-- <Button :state="states[2]" /> -->
        <Button :state="states[0]" :links class="ml-6" />
    </slot>
</template>