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
    <div class="w-fit sm:w-sm flex flex-col text-center gap-4 img-text">
        <h2 class="text-xl sm:text-2xl xl:text-3xl font-code">
            Kommende kurs:
        </h2>

        <div class="flex justify-between border-b-2 border-neutral-500 pb-2 w-full gap-8">
            <p>
                {{ capitalizeFirstLetter(month) }} {{ year }}
            </p>

            <p v-if="spaces" class="text-emerald-500 font-bold not-dark:selection:text-neutral-50">
                Ledige plasser
            </p>

            <p v-else class="text-rose-500">
                Ingen plass :(
            </p>
        </div>

        <a v-if="!isShort" href="#kontakt" class="basic-button button-alf-blue self-center select-none">
            Ta Kontakt
        </a>
    </div>
</template>