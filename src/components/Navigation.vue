<script setup>
import Quote from "@/components/elements/Quote.vue";

import Bnuuy from "@/assets/images/ref/Bnuuy_1.png"

import { usePages } from "@/compostables/_pages";
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
    <div v-if="isShortened" class="grid py-8 md:gap-8 md:grid-cols-2">
        <template v-for="page in main_pages">
            <nav v-if="$route.name != page.to" :class="`${page.background_image} flex-col p-8`">
                <Quote :message="page.quote" :title="page.title" />

                <Button text="les mer" :to="page.to" :class="`${page.button_color} w-fit p-1 px-4`" />
            </nav>
        </template>
    </div>

    <div v-else class="py-8">
        <nav v-for="page in main_pages" class="md:grid grid-cols-3">
            <img :src="Bnuuy" class="w-full hidden md:block aspect-video object-cover object-center" />

            <div :class="`${page.background_image} md:col-span-2 p-8 flex flex-col flex-2 bg-no-repeat bg-left bg-contain bg-gradient-to-r via-neutral-50/50 to-neutral-50`">
                <Quote :message="page.quote" :title="page.to" class="*:line-clamp-2 mb-4 shadow-none" />

                <Button text="les mer" :to="page.to" :icon_name="arrow_right_icon.name" :icon_type="arrow_right_icon.type" :class="`${page.button_color} mx-auto ml-0 p-1 px-4`" />
            </div>
        </nav>
    </div>
</template>