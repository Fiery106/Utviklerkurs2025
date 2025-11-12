<script setup>
import Header from "@/components/_MainHeader.vue"
import Quote from "@/components/elements/Quote.vue";

import { usePages } from "@/compostables/_pages";

const { error } = usePages()
</script>


<template>
    <Header/>

    <main :class="error.background_color" class="pt-0">
        <Quote state="Error" />
    </main>
</template>