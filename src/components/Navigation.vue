<script setup>
import Quote from "@/components/elements/Quote.vue";
import Button from "@/components/elements/Button.vue"
import Image from "@/components/elements/Image.vue";

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
    <div v-if="isShortened" class="grid grid-cols-1 gap-8 md:grid-cols-2 items-center">
        <nav v-for="page in main_pages" v-show="$route.name != page.to" class="w-full">
            <div class="p-8 mx-0 md:mb-0" :class="page.background_image">
                <Quote :message="page.quote" :title="page.title" class="*:line-clamp-2 mb-4" />

                <Button text="les mer" :to="page.to" class="*:p-1 *:px-3" :class="page.button_color" />
            </div>
        </nav>
    </div>

    <div v-else>
        <nav v-for="page in main_pages">
            <div class="flex md:grid grid-cols-3 gap-4">
                <Image :src="Bnuuy" class="w-full hidden md:block aspect-video object-cover object-center" />

                <div class="md:col-span-2 p-8 flex flex-col flex-2 not-md:bg-[url(@/assets/images/ref/Bnuuy_1.png)] bg-no-repeat bg-left bg-contain" :class="page.background_image">
                    <Quote :message="page.quote" :title="page.to" class="*:line-clamp-2 mb-4 shadow-none" />
                    <Button text="les mer" :to="page.to" :icon_name="arrow_right_icon.name" :icon_type="arrow_right_icon.type" :class="page.button_color" class="mx-auto ml-0 *:p-1 *:px-3" />
                </div>
            </div>
        </nav>
    </div>
</template>