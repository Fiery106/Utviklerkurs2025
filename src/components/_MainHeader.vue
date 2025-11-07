<script setup>
import Logo from "@/components/elements/Logo.vue"
import Button from "@/components/elements/Button.vue"

import { usePages, toggle, dropdown, login } from "@/compostables/links/pages.js"
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
    <header class="bg-zinc-900 fixed top-0 w-full z-99">
        <div class="flex items-center justify-between py-4 px-8 sm:w-full *:mx-0">
            <Logo />
            
            <nav class="*:hover:text-neutral-400">
                <slot>
                    <Button :state="toggle" />
                    <Button v-for="page in main_pages.slice(0, limit)" :text="page.to" :to="page.to" :aria_label="page.aria_label" class="hidden md:block" />
                    <Button state="login" />
                    <Button :state="dropdown" :links :is-button="true" />
                </slot>
            </nav>
        </div>
    </header>
</template>