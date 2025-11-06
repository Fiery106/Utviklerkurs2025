<script setup>
import { capitalizeFirstLetter } from "@/compostables/functions";

const states = [
    "Home", "Page"
]

defineProps({
    message: {
        default: ""
    },
    title: {
        type: String,
        default: ""
    },

    state: {
        type: String,
        default: ""
    },
})
</script>

<template>
    <div v-if="state == states[0]" class="w-md text-neutral-50 mb-8 sm:mx-8 sm:w-fit sm:text-center md:my-4 xl:mx-auto">
        <h1 class="text-4xl md:text-5xl xl:text-6xl text-shadow-lg">
            {{ message[0] }}
        </h1>

        <h2 class="py-4 text-alf-blue selection:text-neutral-50 italic sm:w-sm md:w-auto">
            {{ message[1] }}
        </h2>

        <div>
            {{ message[2] }}
        </div>
    </div>

    <div v-else-if="state == states[1]" class="mx-8 min-w-md max-w-2xl text-neutral-50 md:mx-auto">
        <h1 class="mb-4 text-4xl md:text-5xl xl:text-6xl text-shadow-lg">
            For {{ capitalizeFirstLetter($route.name) }}
        </h1>

        <p class="px-4 border-black border-l-4">
            {{ message }}
        </p>
    </div>

    <div v-else>
        <h1 class="mb-4">
            {{ capitalizeFirstLetter(title) }}
        </h1>

        <p>
            {{ message }}
        </p>
    </div>
</template>