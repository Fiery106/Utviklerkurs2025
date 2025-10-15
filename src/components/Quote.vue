<script setup>
import { defineProps } from "vue";

import { capitalizeFirstLetter } from "@/compostables/functions";

defineProps({
    message: {
        type: Array,
        default: [
            ""
        ]
    },
    named_page: {
        type: Boolean,
        default: true
    }
})
</script>

<template>
    <section v-if="named_page">
        <h1>
            For {{ capitalizeFirstLetter($route.name) }}
        </h1>

        <p class="px-4 border-black border-l-4">
            {{ message }}
        </p>
    </section>

    <section v-else>
        <h1>
            {{ message[0] }}
        </h1>

        <h2 class="text-alf-blue italic">
            {{ message[1] }}
        </h2>

        <p class="px-4 py-6">
            {{ message[2] }}
        </p>
    </section>
</template>