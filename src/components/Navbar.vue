<script setup>
import { defineProps } from "vue"
import Button from "@/components/Button.vue"
import { usePages } from "@/components/pages.js"

const { pages, links } = usePages()

defineProps({
    limit: Number
})
</script>


<template>
    <Button :toggle=true />
    <Button v-for="page in pages.slice(0, limit)" :text="page.title" :to="page.url" />
    <Button :dropdown=true :links icon_name="bars" /> <!-- BIND HER -->
</template>