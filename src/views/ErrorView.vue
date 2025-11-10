<script setup>
import Header from "@/components/_MainHeader.vue"
import Quote from "@/components/elements/Quote.vue";

import { usePages } from "@/compostables/pages";

const { error } = usePages()
const message = error.quote
</script>


<template>
    <Header>
        <!-- Legg til knapper her hvis du vil endre navigasjon lenkene -->
    </Header>

    <main :class="error.background_color">
        <Quote :message title="Hei sann" class="text-center tabular-nums pt-80 select-none"/>
    </main>
</template>