<script setup>
import { defineProps } from "vue"
import Button from "@/components/Button.vue"

import { usePages, states } from "@/compostables/pages.js"
import { useAlfLinks } from "@/compostables/alf_links"

const { pages } = usePages()
const { alf_links } = useAlfLinks() 
const links = alf_links

defineProps({
    limit: {
        type: Number,
        default: 3,
    }
})
</script>


<template>
    <Button :state="states[1]" />
    <Button v-for="page in pages.slice(0, limit)" :text="page.title" :to="page.url" class="mx-2" />
    <!-- <Button state="states[2]" /> -->
    <Button :state="states[0]" :links class="pl-4" />
</template>