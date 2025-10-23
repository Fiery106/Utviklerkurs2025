<script setup>
import { capitalizeFirstLetter } from "@/compostables/functions";

defineProps({
    message: {
        type: Array,
        default: [
            "", "", ""
        ]
    },
    named_page: {
        type: Boolean,
        default: true
    }
})
</script>

<template>
    <div class="bg-neutral-700 bg-cover bg-center size-fit w-full text-white">
        <div class="w-md sm:w-fit sm:mx-8 xl:mx-auto sm:text-center">
            <div v-if="named_page">
                <h1>
                    For {{ capitalizeFirstLetter($route.name) }}
                </h1>

                <div class="px-4 border-black border-l-4">
                    {{ message }}
                </div>
            </div>

            <div v-else>
                <h1>
                    {{ message[0] }}
                </h1>

                <h2 class="text-alf-blue italic py-4 selection:text-white">
                    {{ message[1] }}
                </h2>

                <div>
                    {{ message[2] }}
                </div>
            </div>
        </div>
    </div>
</template>