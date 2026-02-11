<script setup>
import Quote from "@/components/Quote.vue";

import Bnuuy from "@/assets/images/ref/Bnuuy_1.png"

import { usePages } from "@/compostables/_pages";

const { main_pages } = usePages()

defineProps({
    isShortened: {
        type: Boolean,
        default: false,
    },
})
</script>


<template>
    <div>
        <h1 id="navigasjon">
            Navigasjon
        </h1>
        <div v-if="isShortened" class="grid py-8 md:gap-8 md:grid-cols-2">
            <template v-for="page in main_pages">
                <nav v-if="$route.name != page.to" :class="`${page.background_image} flex-col items-start p-8`">
                    <Quote :message="page.quote" :title="page.title" />

                    <Button :look="1" text="les mer" :to="page.to" :icon_id="3" :class="`${page.button_color}`" />
                </nav>
            </template>
        </div>

        <div v-else class="py-8">
            <nav v-for="page in main_pages" class="md:grid grid-cols-3">
                <img :src="Bnuuy" class="w-full hidden md:block aspect-video object-cover object-center" />

                <div :class="`${page.background_image} md:col-span-2 p-8 flex flex-col flex-2 bg-no-repeat bg-left bg-contain bg-gradient-to-r from-60% to-neutral-50`">
                    <Quote :message="page.quote" :title="page.to" class="line-clamp-2 mb-4 shadow-none" />

                    <Button :look="1" text="les mer" :to="page.to" :icon_id="3" :class="`${page.button_color}`" />
                </div>
            </nav>
        </div>
    </div>
</template>