<script setup>
import { capitalizeFirstLetter } from "@/compostables/functions";

const states = [
    "Home", "Page", "Portal", "Error"
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
    <div v-if="state == states[0]" class="text-neutral-50 mx-8 sm:text-center sm:mx-auto md:my-4 sm:max-xl:px-8 xl:my-16">
        <h1 class="text-4xl md:text-5xl xl:text-6xl text-shadow-lg">
            {{ message[0] }}
        </h1>

        <h2 class="text-alf-blue selection:text-neutral-50 italic py-4 sm:mx-auto sm:w-xl md:w-auto">
            {{ message[1] }}
        </h2>

        <div>
            {{ message[2] }}
        </div>
    </div>

    <div v-else-if="state == states[1]" class="text-neutral-50 mx-8 min-w-md max-w-2xl md:mx-auto">
        <h1 class="mb-4 text-4xl md:text-5xl xl:text-6xl text-shadow-lg">
            For {{ capitalizeFirstLetter($route.name) }}
        </h1>

        <p class="px-4 border-neutral-900 border-l-4">
            {{ message }}
        </p>
    </div>

    <div v-else-if="state == states[3]" class="flex flex-col h-screen justify-center text-center gap-4 select-none">
        <h1>
            Heisann
        </h1>
        <div class="flex mx-auto gap-2">
            <p class="tabular-nums font-bold">
                {{ title }}
            </p>
            <div class="w-0.5 bg-neutral-900"></div>
            <p>
                {{ message }}
            </p>
        </div>
    </div>

    <div v-else class="flex flex-col gap-4 max-w-7xl">
        <h1 class="mx-0">
            {{ capitalizeFirstLetter(title) }}
        </h1>

        <p class="line-clamp-2">
            {{ message }}
        </p>
    </div>
</template>