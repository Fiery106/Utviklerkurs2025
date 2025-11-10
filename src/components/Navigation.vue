<script setup>
import Quote from "@/components/elements/Quote.vue";
import Button from "@/components/elements/Button.vue"

import { usePages } from "@/compostables/pages";
import { useIcons } from "@/compostables/icons";

const { main_pages } = usePages()
const { arrow_right_icon } = useIcons()

defineProps({
    isShortened: {
        type: Boolean,
        default: false,
    },
})
</script>


<template>
    <nav v-if="isShortened" class="flex flex-col md:flex-row items-center">
        <div v-for="page in main_pages">
            <div v-if="$route.name != page.to" class="mb-8 md:mb-0">
                <Quote :message="page.quote" :title="page.to" class="line-clamp-3 mb-4" />
                <Button text="les mer" :to="page.to" class="bg-amber-600 *:p-1 *:px-3" />
            </div>
        </div>
    </nav>

    <nav v-else class="flex flex-col xl:flex-row">
        <div v-for="page in main_pages" class="p-8 w-full">
            <Quote :message="page.quote" :title="page.to" class="line-clamp-3 mb-4 shadow-none" />
            <Button text="les mer" :to="page.to" :icon_name="arrow_right_icon.name" :icon_type="arrow_right_icon.type" :class="page.button_color" class="*:p-1 *:px-3 ml-0" />
        </div>
    </nav>
</template>