<script setup>
import Logo from '@/components/blocking/Logo.vue'
import Socials from '@/components/Socials.vue'

import { usePages } from '@/compostables/_pages.js'
import { useLinks } from '@/compostables/links/other_links'
import { useCourseLinks } from '@/compostables/links/course_links'

const { main_pages } = usePages()
const { course_links } = useCourseLinks()
const { main_alf } = useLinks() 
const { other_alf } = useLinks() 

const dropdown_alf_links = [ main_alf, other_alf ]

defineProps({
    limit: {
        type: Number,
        default: 3,
    },
    
    course: {
        type: Boolean,
        default: false
    }
})
</script>


<template>
    <header>
        <Button to="/" :method="2" class="rounded-none mx-8">
            <Logo class="h-8" />
        </Button>
            
        <nav class="mx-8"> 
            <Button :state="1" :method="1" />

            <template v-if="!course">
                <Button v-for="page in main_pages.slice(0, limit)" :to="`/${page.to}`" :text="page.to" :aria_label="page.aria_label" class="hidden md:block" />

                <Button :method="1" />
            </template>


            <template v-else>
                <div class="text-neutral-50 flex items-center gap-1">
                    <Icon :id="11" />
                    <input type="search" placeholder="søk her..." class="hidden md:block md:w-32 p-1 focus:outline-none focus:inset-ring-1 inset-ring-neutral-50 rounded-md"/>
                </div>

                <Button v-for="page in course_links.slice(0, limit)" :to="`/${page.to}`" :text="page.name" :aria_label="page.aria_label" class="hidden md:block" />
            </template>

            <Button :state="1" :method="2" />
        </nav>
    </header>


    <div id="dropdown" class="h-full w-full md:h-fit md:w-fit fixed right-0 md:mx-8 p-8 hidden flex flex-col justify-start gap-8 text-xl md:text-base bg-zinc-950 text-neutral-50 not-md:border-t-2 border-neutral-50 scroll-auto overflow-auto z-99 container">
        <div class="flex flex-col h-fit gap-2 md:gap-4 md:hidden">
            <p class="emphasis">
                Navigasjon
            </p>
            <div class="flex gap-4">
                <Button v-if="!course" v-for="page in main_pages.slice(0, limit)" :to="`/${page.to}`" :text="page.to" :aria_label="page.aria_label" />
                <Button v-else v-for="page in course_links.slice(0, limit)" :to="`/${page.to}`" :text="page.name" :aria_label="page.aria_label" />
            </div>
        </div>

        <div v-for="tab in dropdown_alf_links" :key="tab.id" class="flex flex-col h-fit">
            <p class="emphasis">
                {{ tab[0] }}
            </p>
            <div class="flex flex-col gap-x-8 gap-2 w-fit text-nowrap truncate">
                <Button :state="2" v-for="link in tab" :to="link.url" :text="link.title" :aria-label="link.aria_label" class="line-clamp-1 md:w-full" />
            </div>
        </div>

        <Socials :header_link="true" />
    </div>
</template>