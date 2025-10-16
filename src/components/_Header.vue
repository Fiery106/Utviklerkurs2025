<script setup>
import { defineProps } from "vue"

import Logo from "@/components/Logo.vue"
import Button from "@/components/Button.vue"

import { usePages, toggle, dropdown, login } from "@/compostables/pages.js"
import { useAlfLinks } from "@/compostables/alf_links"

const { pages } = usePages()
const { alf_links } = useAlfLinks() 
const links = alf_links

defineProps({
    limit: {
        type: Number,
        default: 3,
    }
})
</script>


<template>
    <header class="flex bg-zinc-900 min-h-16 max-h-32 px-6 fixed top-0 w-full items-center justify-between">
        <Logo />
        
        <nav class="flex flex-col text-3xl sm:text-base sm:flex-row h-full">
            <slot>
                <Button :state="toggle" />
                <Button v-for="page in pages.slice(0, limit)" :text="page" :to="{name: page}" class="mx-2" />
                <!-- <Button state="login" /> -->
                <Button :state="dropdown" :links class="pl-4" />
            </slot>
        </nav>
    </header>
</template>