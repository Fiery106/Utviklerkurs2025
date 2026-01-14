<script setup>
import Logo from "@/components/elements/Logo.vue"

import { usePages } from "@/compostables/_pages.js"
import { useLinks } from "@/compostables/links/other_links"
import { capitalizeFirstLetter, scrollToTop } from "@/compostables/functions"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"

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
        <router-link :to="{name: 'hjem'}" @click="scrollToTop()">
            <Logo />
        </router-link>
        
            
        <nav class="*:hover:text-neutral-50/50">
            <slot>
                <Button state="toggle" />

                <!--<Button v-for="page in main_pages.slice(0, limit)" :text="page.to" :to="page.to" :aria_label="'besøk ' + page.aria_label + 'siden'" :class="`
                ${($route.path == `/${page.to}`) ? 'underline underline-offset-4 decoration-2' : ''} transition hidden md:block`" />-->
                <!-- Just testing here don't mind me -->

                <router-link v-for="page in main_pages.slice(0, limit)" @click="scrollToTop()" :to="page.to" :aria_label="page.aria_label" :class="`
                ${($route.path == `/${page.to}`) ? 'underline underline-offset-4 decoration-2' : 'no-underline'} select-none transition hidden md:block text-neutral-50 font-bold `">
                    {{ capitalizeFirstLetter(page.to) }}
                </router-link>

                <router-link to="/innlogging" class="no-underline select-none text-neutral-50 font-bold items-center flex">
                    Logg på
                    <KeepAlive>
                        <FontAwesomeIcon :icon="['fas', 'user']" class="pb-1 md:pl-1 text-xl"/>
                    </KeepAlive>
                </router-link>

                <!-- <Button state="login" /> -->
                <Button state="dropdown" :links :is-button="true" />
            </slot>
        </nav>
    </header>
</template>