<script setup>
import { defineProps } from "vue"
import Button from "@/components/Button.vue"
import { usePages } from "@/compostables/pages.js"
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
    <slot>
        <Button state="toggle" />
        <Button v-for="page in pages.slice(0, limit)" :text="page.title" :to="page.url" class="mx-2" />
        <!-- <Button state="login" /> -->
        <Button state="dropdown" :links class="ml-4" />
    </slot>
</template>