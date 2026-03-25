<script setup>
import CourseInfo from '@/components/CourseInfo.vue';
import { capitalizeFirstLetter } from '@/compostables/functions';

defineProps({
    message: {
        default: ''
    },
    title: {
        type: String,
        default: ''
    },

    state: {
        type: Number,
        default: 0
    },
})
</script>

<template>
    <div v-if="state == 1">
        <div class="absolute inset-y-1/3 flex flex-col items-center justify-center w-full gap-8 p-4">
            <div class="flex flex-col gap-2 img-text text-center">
                <h1 class="text-2xl sm:text-4xl font-code">
                    ALF Utviklerkurs
                </h1>

                <h2 class="text-alf-blue text-lg sm:text-xl emphasis">
                    Tjenester av høy kvalitet, levert med profesjonalitet og flid.
                </h2>
                
                <p>
                    Et intensivkurs i nettside- og programutvikling med mål om å gi deltakerne en god innføring i prinsippene for utvikling av strukturerte, kreative og velfungerende løsninger.
                </p>
            </div>
            
            <CourseInfo />
        </div>
    </div>


    <div v-else-if="state == 2" class="absolute inset-y-1/3 flex flex-col items-center justify-center w-full gap-8 p-4">
        <div class="img-text flex flex-col gap-4">
            <div class="flex gap-2 items-center text-2xl text-shadow-lg">
                <slot></slot>

                <h1>
                    {{ capitalizeFirstLetter(title) }}
                </h1>
            </div>
            

            <p class="sm:px-4 sm:border-l-4 border-neutral-500">
                "{{ message }}"
            </p>
        </div>
    </div>


    <div v-else class="flex flex-col gap-4 max-w-7xl container">
        <div class="flex gap-2 items-center">
            <slot></slot>
            
            <h1>
                {{ capitalizeFirstLetter(title) }}
            </h1>
        </div>

        <p class="line-clamp-1 xl:line-clamp-2 bg-gradient-to-b from-25% from-neutral-900 to-neutral-900/0 bg-clip-text text-transparent selection:text-neutral-900 dark:from-neutral-50 dark:to-neutral-50/0 dark:selection:text-neutral-50">
            "{{ message }}"
        </p>
    </div>
</template>