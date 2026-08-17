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
    <div v-if="state == 1" class="banner-content inset-y-1/2">
        <div class="banner-text flex flex-col gap-2 text-center shadow-2xl">
            <h1 class="not-sm:text-3xl font-code">
                ALF Utviklerkurs
            </h1>

            <span class="text-alf-blue sm:text-xl emphasis selection:text-neutral-50/95 font-code font-bold">
                "Tjenester av høy kvalitet, levert med profesjonalitet og flid."
            </span>
            
            <p class="block sm:hidden">
                Et intensivkurs i nettside- og programutvikling som gir deltakerne god innføring i prinsippene for utvikling.
            </p>
            <p class="hidden sm:block">
                Et intensivkurs i nettside- og programutvikling med mål om å gi deltakerne en god innføring i prinsippene for utvikling av strukturerte, kreative og velfungerende løsninger.
            </p>
        </div>
        
        <CourseInfo />
    </div>


    <div v-else-if="state == 2" class="banner-content">
        <div class="banner-text flex flex-col gap-4 shadow-2xl">
            <h1 class="flex gap-2 items-end text-3xl sm:text-4xl text-shadow-lg font-code">
                <slot></slot>

                <span>
                    {{ capitalizeFirstLetter(title) }}
                </span>
            </h1>
            

            <p class="sm:px-4 sm:border-l-4 border-neutral-500 wrap-anywhere line-clamp-4 ">
                "{{ message }}"
            </p>
        </div>
    </div>


    <div v-else class="flex flex-col gap-4 max-w-7xl container">
        <div class="flex gap-2 text-2xl items-center font-bold">
            <slot></slot>
            
            <span>
                {{ capitalizeFirstLetter(title) }}
            </span>
        </div>

        <p class="nav-quote-bg">
            "{{ message }}"
        </p>
    </div>
</template>