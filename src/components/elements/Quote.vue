<script setup>
import { capitalizeFirstLetter } from "@/compostables/functions";

defineProps({
    message: {
        default: ""
    },
    title: {
        type: String,
        default: ""
    },

    isHomePage: {
        type: Boolean,
        default: false
    },
    isRouteNamed: {
        default: false
    },
})

const home = "hjem"
</script>

<template>
    <div class="bg-cover bg-center size-fit w-full shadow-2xl">
        <div v-if="isHomePage" class="mx-auto w-md text-white sm:mx-8 sm:w-fit sm:text-center xl:mx-auto">
            <h1 class="text-4xl md:text-5xl xl:text-6xl">
                {{ message[0] }}
            </h1>

            <h2 class="py-4 text-alf-blue selection:text-white italic sm:w-sm md:w-auto">
                {{ message[1] }}
            </h2>

            <div>
                {{ message[2] }}
            </div>
        </div>

        <div v-else-if="isRouteNamed" class="mx-8 min-w-md max-w-2xl text-white xl:mx-auto">
            <h1 class="mb-4 text-4xl md:text-5xl xl:text-6xl">
                For {{ capitalizeFirstLetter($route.name) }}
            </h1>

            <div class="px-4 border-black border-l-4">
                {{ message }}
            </div>
        </div>

        <div v-else>
            <h1>
                {{ capitalizeFirstLetter(title) }}
            </h1>

            <div>
                {{ message }}
            </div>
        </div>
    </div>
</template>