<script setup>
import Logo from "@/components/elements/Logo.vue"

import { usePages } from "@/compostables/_pages.js"
import { useLinks } from "@/compostables/links/other_links"

const { main_pages } = usePages()
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
    <header class="border-b-2 border-neutral-50 md:border-none">
        <Button to="/" :method="2" class="rounded-none mx-8">
            <Logo />
        </Button>
        
            
        <nav>
            <slot>
                <Button :state="1" :method="1" />

                <Button v-for="page in main_pages.slice(0, limit)" :to="page.to" :text="page.to" :aria_label="page.aria_label" class="hidden md:block" />

                <Button :method="1" />
            </slot>

            <Button :state="1" :method="2"/>

            <div id="dropdown" class="w-full md:w-fit text-xl md:text-base min-h-fit grid gap-16 absolute top-0 right-0 md:mx-8 my-16 p-8 md:p-4 bg-zinc-900 text-neutral-50">
                <div class="grid gap-4 md:hidden">
                    <label>
                        Navigasjon
                    </label>
                    <Button v-for="page in main_pages.slice(0, limit)" :to="page.to" :text="page.to" :aria_label="page.aria_label" />
                </div>

                <div class="grid gap-4">
                    <label>
                        Alf Lenker
                    </label>
                    <Button v-for="link in links" :to="link.url" :text="link.title" :aria-label="link.aria_label" />
                </div>
            </div>
        </nav>
    </header>
</template>