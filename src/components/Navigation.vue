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
    <div v-if="isShortened" class="grid grid-cols-1 gap-8 py-8 md:grid-cols-2 items-center">
        <template v-for="page in main_pages">
            <nav v-if="$route.name != page.to" class="w-full">
                <div :class="`${page.background_image} p-8 mx-0 md:mb-0`">
                    <Quote :message="page.quote" :title="page.title" class="*:line-clamp-2 mb-4" />

                    <Button text="les mer" :to="page.to" class="*:p-1 *:px-3" :class="page.button_color" />
                </div>
            </nav>
        </template>
    </div>

    <div v-else class="py-8">
        <nav v-for="page in main_pages">
            <div class="flex md:grid grid-cols-3 gap-4">
                <img :src="Bnuuy" class="w-full hidden md:block aspect-video object-cover object-center" />

                <div :class="`${page.background_image} md:col-span-2 p-8 flex flex-col flex-2 not-md:bg-[url(@/assets/images/ref/Bnuuy_1.png)] bg-no-repeat bg-left bg-contain bg-gradient-to-r via-neutral-50/50 to-neutral-50`">
                    <Quote :message="page.quote" :title="page.to" class="*:line-clamp-2 mb-4 shadow-none" />
                    <Button text="les mer" :to="page.to" :icon_name="arrow_right_icon.name" :icon_type="arrow_right_icon.type" :class="`${page.button_color} mx-auto ml-0 *:p-1 *:px-3`" />
                </div>
            </div>
        </nav>
    </div>
</template>