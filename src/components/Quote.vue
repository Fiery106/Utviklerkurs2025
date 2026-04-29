<script setup>
import CourseInfo from '@/components/CourseInfo.vue';
import { capitalizeFirstLetter } from '@/compostables/functions';

defineProps({
    message: {
        type: String,
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
    <div v-if="state == 1" class="banner-content">
        <div class="flex flex-col gap-2 img-text text-center shadow-2xl font-code">
            <h1 class="text-2xl sm:text-4xl font-code">
                ALF Utviklerkurs
            </h1>

            <h2 class="text-alf-blue text-lg sm:text-xl emphasis selection:text-cyan-300 font-code">
                Tjenester av høy kvalitet, levert med profesjonalitet og flid.
            </h2>
            
            <p>
                Et intensivkurs i nettside- og programutvikling med mål om å gi deltakerne en god innføring i prinsippene for utvikling av strukturerte, kreative og velfungerende løsninger.
            </p>
        </div>
        
        <CourseInfo />
    </div>


    <div v-else-if="state == 2" class="banner-content">
        <div class="img-text flex flex-col gap-4 shadow-2xl">
            <div class="flex gap-2 items-center text-2xl text-shadow-lg">
                <slot></slot>

                <h1 class="font-code">
                    {{ capitalizeFirstLetter(title) }}
                </h1>
            </div>
            

            <p class="sm:px-4 sm:border-l-4 border-neutral-500 wrap-anywhere line-clamp-4 font-code">
                "{{ message }}"
            </p>
        </div>
    </div>


    <div v-else class="flex flex-col gap-4 max-w-7xl container">
        <div class="flex gap-2 text-2xl items-center">
            <slot></slot>
            
            <h1>
                {{ capitalizeFirstLetter(title) }}
            </h1>
        </div>

        <p class="nav-quote-bg">
            "{{ message }}"
        </p>
    </div>
</template>