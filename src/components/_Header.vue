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
    <header class="*:mx-8">
        <Logo />
            
        <nav class="*:hover:text-neutral-50/50">
            <slot>
                <Button state="toggle" />
                <Button v-for="page in main_pages.slice(0, limit)" :text="page.to" :to="page.to" :aria_label="'besøk ' + page.aria_label + 'siden'" class="transition hidden md:block" />
                <Button state="login" />
                <Button state="dropdown" :links :is-button="true" />
            </slot>
        </nav>
    </header>
</template>

<!--
    import { useRoute } from "vue-router"

    function isActive(routePath) {
        const route = useRoute();
        return route.path === routePath
    }

    <Button v-for="page in main_pages.slice(0, limit)" :text="page.to" :to="page.to" :aria_label="'besøk ' + page.aria_label + 'siden'" :class="`${isActive(`/${page.to}`) ? 'underline underline-offset-4 decoration-2' : ''} transition hidden md:block`" /> 

-->
