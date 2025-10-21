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
    <header class="bg-zinc-900 fixed top-0 w-full">
        <div class="flex my-4 w-sm">
            <Logo class="ml-0"/>
            
            <nav class="flex mr-0">
                <slot>
                    <Button :state="toggle" />
                    <Button v-for="page in pages.slice(0, limit)" :text="page" :to="{name: page}" class="mx-2" />
                    <!--<Button state="login" class="" />-->
                    <Button :state="dropdown" :links class="ml-4" />
                </slot>
            </nav>
        </div>
    </header>
</template>