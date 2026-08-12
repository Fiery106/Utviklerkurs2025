<script setup>
import Quote from '@/components/Quote.vue';

import { usePages } from '@/compostables/_pages';

const { main_pages } = usePages()

defineProps({
    isShort: {
        type: Boolean,
        default: false,
    },
})
</script>


<template>
    <div id="navigasjon" class="pt-8">
        <h2 class="sm:mb-8 mb-4 border-b-2 border-neutral-500">
            Navigasjon
        </h2>

        <div v-if="isShort" class="grid lg:gap-x-8 lg:grid-cols-2">
            <template v-for="page in main_pages" :key="page.id">
                <nav v-if="$route.name != page.to" :aria-label="page.title" :class="`${page.block_color} flex-col items-start justify-center p-8 not-lg:-mx-8`">
                    <Quote :message="page.message" :title="page.title">
                        <Icon :id="page.icon_id" />
                    </Quote>

                    <Button :look="1" :to="page.to" :icon_id="3" :text="page.button_aria_label" :aria_label="page.button_aria_label" :class="`${page.button_color}`" />
                </nav> 
            </template>
        </div>

        
        <div v-else>
            <nav v-for="(page, index) in main_pages" :key="page.id" :aria-label="page.title" class="min-h-fit lg:h-48 xl:h-56 gap-8">
                <picture class="hidden lg:block size-full basis-2/5">
                    <source media="" srcset="" />
                    <img :src="page.img" :alt="page.img_alt" :class="`${index == 0 ? 'rounded-t-2xl' : index + 1 == main_pages.length ? 'rounded-b-2xl' : ''} object-cover size-full`" />
                </picture>
                

                <div :class="`${page.block_color} ${index == 0 ? 'lg:rounded-t-2xl' : index + 1 == main_pages.length ? 'lg:rounded-b-2xl' : ''} block-nav not-lg:-mx-8 basis-3/5`">
                    <div class="flex flex-col xl:gap-8 gap-4  p-8">
                        <Quote :message="page.message" :title="page.title">
                            <Icon :id="page.icon_id" />
                        </Quote>

                        <Button :look="1" :to="page.to" :icon_id="3" :text="page.button_aria_label" :aria_label="page.button_aria_label" :class="`${page.button_color}`" />
                    </div>
                </div>
            </nav>            
        </div>
    </div>
</template>