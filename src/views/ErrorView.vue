<script setup>
import Quote from "@/components/elements/Quote.vue";

import { usePages } from "@/compostables/_pages";

const { error } = usePages()
const message = error.quote
const title = error.title
</script>


<template>
    <Quote :message :title state="Error" :class="error.background_color"/>
</template>