<script setup>
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
    <header class="bg-zinc-900 fixed top-0 w-full z-10">
        <div class="flex justify-between my-4 mx-8 sm:px-8 sm:mx-auto sm:w-full ">
            <Logo class="mx-0" />
            
            <nav class="flex mx-0">
                <slot>
                    <Button :state="toggle" class="text-xl hidden md:inline" />
                    <Button v-for="page in pages.slice(0, limit)" :text="page" :to="page" class="hidden md:inline" />
                    <!--<Button state="login" />-->
                    <Button :state="dropdown" :links class="ml-2" />
                </slot>
            </nav>
        </div>
    </header>
</template>