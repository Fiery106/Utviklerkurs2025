<script setup>
import Logo from "@/components/elements/Logo.vue"
import Button from "@/components/elements/Button.vue"

import { usePages } from "@/compostables/pages.js"
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
    <header class="fixed top-0 bg-zinc-900 h-16 w-full z-99">
        <div class="flex items-center justify-between py-4 *:mx-8">
            <Logo />
            
            <nav class="flex gap-4 *:hover:text-neutral-50/50">
                <slot>
                    <Button state="toggle" />
                    <Button v-for="page in main_pages.slice(0, limit)" :text="page.to" :to="page.to" :aria_label="page.aria_label" class="hidden md:block" />
                    <Button state="login" />
                    <Button state="dropdown" :links :is-button="true" />
                </slot>
            </nav>
        </div>
    </header>
</template>