<script setup>
import Quote from "@/components/elements/Quote.vue";
import Button from "@/components/elements/Button.vue"

import { useQuotes } from "@/compostables/quotes";
import { usePages } from "@/compostables/pages";
import { useIcons } from "@/compostables/icons";

const { pages } = usePages()
const { arrow_right_icon } = useIcons()
const { student_quote, company_quote, nav_quote } = useQuotes()

const navigation = [
    {
        route: pages[0],
        quote: student_quote
    },
    {
        route: pages[1],
        quote: company_quote
    },
    {
        route: pages[2],
        quote: nav_quote
    },
]

defineProps({
    isShortened: {
        type: Boolean,
        default: false
    },
})
</script>


<template>
    <div v-if="isShortened" class="flex">
        <div v-for="page in pages">
            <div v-if="$route.name != page">
                <Quote :message="nav.quote" class="line-clamp-4 mb-2" />
            </div>
        </div>
    </div>

    <div v-else class="flex flex-col gap-1 md:flex-row">
        <div v-for="nav in navigation" class="p-8 w-full">
            <Quote :message="nav.quote" :title="nav.route.name" class="line-clamp-4 xl:line-clamp-5 mb-2 shadow-none" />
            <Button :text="nav.route.name" :to="nav.route.name" :icon_name="arrow_right_icon.name" :icon_type="arrow_right_icon.type" :class="nav.route.color" class="p-1 px-3 ml-0" />
        </div>
    </div>
</template>