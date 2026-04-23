<script setup>
import { useCourseInfo } from '@/compostables/_course_info';
import { capitalizeFirstLetter } from '@/compostables/functions';

const { month, year, spaces } = useCourseInfo()

defineProps({
    isShort: {
        type: Boolean,
        default: false
    },
})
</script>


<template>
    <div class="img-text course-info">
        <h2 class="text-xl sm:text-2xl font-code">
            Kommende kurs:
        </h2>

        <div class="flex not-sm:flex-col justify-between w-full gap-2 md:gap-8">
            <p>
                {{ capitalizeFirstLetter(month) }} {{ year }}:
            </p>

            <p v-if="spaces" class="text-emerald-500 font-bold selection:text-emerald-300">
                Ledige plasser
            </p>

            <p v-else class="text-rose-500">
                Ingen plass :(
            </p>
        </div>

        <div class="divider-y"></div>

        <a v-if="!isShort" href="#kontakt" class="basic-button button-alf-blue select-none text-shadow-none self-center text-black p-2 px-6 text-xl focus-visible:ring-neutral-50 dark:not-focus-visible:ring-0">
            Ta Kontakt
        </a>
    </div>
</template>