<script setup>
import Block from '@/components/elements/Block.vue';

import { useCourseInfo } from '@/compostables/_course_info';
import { capitalizeFirstLetter } from '@/compostables/functions';

const { current_month, current_year, available_spaces, next_month, next_year } = useCourseInfo()

defineProps({
    isShortened: {
        type: Boolean,
        default: false
    },
})
</script>


<template>
    <Block class="w-md bg-zinc-900 text-neutral-50 shadow-2xl *:font-code">
        <div v-if="isShortened">

        </div>
        <div v-else>
            
        </div>
    </Block>
</template>