<script setup>
import Quote from "@/components/elements/Quote.vue";

import { usePages } from "@/compostables/_pages";

const { error } = usePages()
const message = error.quote
const title = error.title
</script>


<template>
    <main :class="error.background_color" class="pt-0">
        <Quote :message :title state="Error" />
    </main>
</template>