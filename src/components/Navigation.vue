<script setup>
import Quote from '@/components/Quote.vue';

import { usePages } from '@/compostables/_pages';

const { main_pages } = usePages()

defineProps({
    isShortened: {
        type: Boolean,
        default: false,
    },
})
</script>


<template>
    <div id="navigasjon">
        <div v-if="isShortened" class="grid lg:gap-8 lg:grid-cols-2">
            <template v-for="page in main_pages" :key="page.id">
                <nav v-if="$route.name != page.to" :class="`${page.block_color} flex-col items-start justify-center p-8 not-lg:-mx-8`">
                    <Quote :message="page.message" :title="page.title">
                        <Icon :id="page.icon_id" class="text-2xl" />
                    </Quote>

                    <Button :look="1" :text="page.button_aria_label" :aria_label="page.button_aria_label" :to="page.to" :icon_id="3" :class="`${page.button_color}`" />
                </nav>
            </template>
        </div>

        <div v-else>
            <nav v-for="page in main_pages" :key="page.id" class="min-h-fit lg:h-48 xl:h-56">
                <img :src="page.img" :alt="page.img_alt" class="hidden lg:block object-cover object-center size-full basis-1/3" />

                <div :class="`${page.block_color} block-nav not-lg:-mx-8 basis-2/3`">
                    <div class="flex flex-col gap-4 p-8">
                        <Quote :message="page.message" :title="page.title">
                            <Icon :id="page.icon_id" class="text-2xl" />
                        </Quote>

                        <Button :look="1" :text="page.button_aria_label" :aria_label="page.button_aria_label" :to="page.to" :icon_id="3" :class="`${page.button_color}`" />
                    </div>
                </div>
            </nav>
        </div>
    </div>
</template>