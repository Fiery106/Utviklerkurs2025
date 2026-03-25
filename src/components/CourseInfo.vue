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
    <div class="w-fit sm:w-xs flex flex-col text-center gap-4 img-text">
        <h2 class="text-xl sm:text-2xl font-code">
            Kommende kurs:
        </h2>

        <div class="flex not-sm:flex-col justify-between border-b-2 border-neutral-500 pb-2 w-full gap-2 md:gap-8">
            <div>
                <p class="emphasis">
                    {{ capitalizeFirstLetter(month) }} {{ year }}
                </p>
            </div>

            <p v-if="spaces" class="text-emerald-500 font-bold">
                Ledige plasser
            </p>

            <p v-else class="text-rose-500">
                Ingen plass :(
            </p>
        </div>
    </div>

    <a v-if="!isShort" href="#kontakt" class="basic-button button-alf-blue select-none text-neutral-50 p-2 px-6 text-xl">
        Ta Kontakt
    </a>
</template>