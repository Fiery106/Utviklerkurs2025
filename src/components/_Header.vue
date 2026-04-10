<script setup>
import Logo from '@/components/blocking/Logo.vue'
import Socials from '@/components/Socials.vue'
import DarkMode from '@/components/buttons/DarkMode.vue'
import Dropdown from '@/components/buttons/Dropdown.vue'

import { useMainLinks } from '@/compostables/links/main_links'
import { useLinks } from '@/compostables/links/alf_links'
import { useCourseLinks } from '@/compostables/links/course_links'

const { main_links } = useMainLinks()
const { course_links } = useCourseLinks()
const { main_alf } = useLinks() 
const { other_alf } = useLinks() 

defineProps({    
    course: {
        type: Boolean,
        default: false
    }
})
</script>


<template>
    <header>
        <Button to="/" class="mx-8">
            <Logo class="h-8" />
        </Button>
            
        <nav class="mr-8"> 
            <DarkMode />

            <template v-if="!course">
                <Button v-for="page in main_links.slice(1, main_links.length)" :to="`${page.to}`" :text="page.text" :aria_label="page.aria_label" class="hidden md:block" />

                <Button to="/innlogging" text="logg på" aria_label="Logg inn på kursportalen" :icon_id="12" />
            </template>


            <template v-else>
                <div class="text-neutral-50 flex items-center gap-1">
                    <Icon :id="11" />
                    <input type="search" placeholder="søk her..." class="hidden md:block md:w-32 p-1 focus:outline-none focus:inset-ring-1 inset-ring-neutral-50 rounded-md"/>
                </div>

                <Button v-for="page in course_links.slice(1, course_links.length)" :to="`${page.to}`" :text="page.text" :aria_label="page.aria_label" class="hidden md:block" />
            </template>


            <Dropdown :tabs="[(!course ? main_links : course_links), main_alf, other_alf]">
                <Socials :header_link="true" />
            </Dropdown>
        </nav>
    </header>
</template>