<script setup>
import Logo from '@/components/Logo.vue'
import Socials from '@/components/Socials.vue'

import { usePages } from '@/compostables/_pages.js'
import { useSocials } from '@/compostables/links/social_medias'
import { useLinks } from '@/compostables/links/other_links'

const { main_pages } = usePages()
const { social_medias } = useSocials()
const { alf_links } = useLinks() 

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
            <Logo class="h-8" />
        </Button>
            
        <nav class="mx-8"> 
            <slot>
                <Button :state="1" :method="1" />

                <!-- <div class="text-neutral-50 flex items-center gap-1">
                    <Icon :id="11" />
                    <input type="search" placeholder="søk her..." class="hidden md:block md:w-32 p-1 focus:outline-none focus:inset-ring-1 inset-ring-neutral-50 rounded-md"/>
                </div> -->

                <Button v-for="page in main_pages.slice(0, limit)" :to="`/${page.to}`" :text="page.to" :aria_label="page.aria_label" class="hidden md:block" />

                <Button :method="1" />
            </slot>

            <Button :state="1" :method="2" />
        </nav>
    </header>


    <div id="dropdown" class="h-full w-full md:h-fit md:w-fit fixed right-0 md:mx-8 p-8 hidden flex flex-col justify-start gap-8 text-xl md:text-base bg-zinc-950 text-neutral-50 not-md:border-t-2 border-neutral-50 scroll-auto overflow-auto z-99 container">
        <div class="flex flex-col h-fit gap-2 md:gap-4 md:hidden">
            <p class="emphasis">
                Navigasjon
            </p>
            <div class="flex gap-4">
                <Button v-for="page in main_pages.slice(0, limit)" :to="`/${page.to}`" :text="page.to" :aria_label="page.aria_label" />
            </div>
        </div>

        <div class="flex flex-col h-fit gap-2 md:gap-4">
            <p class="emphasis">
                Alf Lenker
            </p>
            <div class="flex flex-col gap-x-8 gap-2 md:gap-4 w-fit text-nowrap truncate">
                <Button :state="2" to="https://alf.no" text="Hovedside" class="line-clamp-1 md:w-full" />
                <Button :state="2" v-for="link in alf_links" :to="link.url" :text="link.title" :aria-label="link.aria_label" class="line-clamp-1 md:w-full" />
            </div>
        </div>

        <div class="flex flex-col h-fit gap-2 md:gap-4">
            <p class="emphasis">
                Andre avdelinger
            </p>
            <div class="flex flex-col gap-x-8 gap-2 md:gap-4 w-fit text-nowrap">
                <Button :state="2" to="https://alf-butikken.no/" text="Alf butikk" class="line-clamp-1 md:w-full" />
                <Button :state="2" to="https://klosterhagenhotell.no" text="Klosterhagen hotell" class="line-clamp-1 md:w-full" />
            </div>
        </div>

        <Socials :label="true" :header_link="true" />
    </div>
</template>