<script setup>
import Quote from "@/components/elements/Quote.vue";

import { usePages } from "@/compostables/_pages";

const { error } = usePages()
const message = error.quote
const title = error.title
</script>


<template>
    <Quote state="Error" :message :title :class="`${error.background_color}`"/>
</template>