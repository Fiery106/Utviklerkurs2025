<script setup>
import Logo from "@/components/elements/Logo.vue"

import { usePages } from "@/compostables/_pages.js"
import { useSocials } from "@/compostables/links/social_medias"
import { useLinks } from "@/compostables/links/other_links"

const { main_pages } = usePages()
const { social_medias } = useSocials()
const { alf_links } = useLinks() 
const links = alf_links

defineProps({
    limit: {
        type: Number,
        default: 3,
    }
})
</script>


<template>
    <header>
        <Button to="/" :method="2" class="rounded-none mx-8">
            <Logo />
        </Button>
            
        <nav class="mx-8">
            <slot>
                <Button :state="1" :method="1" />

                <Button v-for="page in main_pages.slice(0, limit)" :to="page.to" :text="page.to" :aria_label="page.aria_label" class="hidden md:block" />

                <Button :method="1" />
            </slot>

            <Button :state="1" :method="2" />
        </nav>
    </header>


    <div id="dropdown" class="h-full w-full md:h-fit md:w-fit fixed right-0 md:mx-8 p-8 hidden flex flex-col justify-start gap-16 text-xl md:text-base bg-zinc-900 text-neutral-50 not-md:border-t-2 border-neutral-50 scroll-auto overflow-auto z-1">
        <div class="grid h-fit gap-4 md:hidden">
            <label class="emphasis">
                Navigasjon
            </label>
            <div class="flex gap-8">
                <Button v-for="page in main_pages.slice(0, limit)" :to="page.to" :text="page.to" :aria_label="page.aria_label" />
            </div>
        </div>

        <div class="grid h-fit gap-4">
            <label class="emphasis">
                Alf Lenker
            </label>
            <div class="grid not-md:grid-cols-2 gap-x-8 gap-4 text-nowrap">
                <Button :state="2" v-for="link in links" :to="link.url" :text="link.title" :aria-label="link.aria_label" class="not-md:w-full line-clamp-1" />
            </div>
        </div>

        <div class="grid h-fit gap-4">
            <label class="emphasis">
                Sosialske Medier
            </label>
            <div class="flex gap-2">
                <Button :state="2" v-for="media in social_medias" :key="media.icon_name" :icon_id="media.icon_id" :to="media.url" :aria_label="media.aria_label" />
            </div>
        </div>
    </div>
</template>