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

defineProps({
    course: {
        type: Boolean,
        default: false
    }
})
</script>


<template>
    <header>
        <Button to="/" aria_label="til hjem">
            <Logo class="h-8" />
        </Button>

        <nav>
            <DarkMode />

            <template v-if="!course">
                <Button v-for="page in main_links.slice(1, main_links.length)" :to="`${page.to}`" :text="page.text" :aria_label="page.aria_label" class="hidden md:block" />

                <router-link to="/innlogging" class="header-link" aria-label="gå til innlogging">
                    <p class="hidden md:block">
                        Logg på
                    </p>
                    <Icon :id="12" />
                </router-link>
            </template>


            <template v-else>
                <div class="text-neutral-50/95 flex items-center gap-1">
                    <Icon :id="11" />
                    <input type="search" name="søk" placeholder="søk her..." class="hidden md:block md:w-32 p-1 focus:outline-none focus:inset-ring-1 inset-ring-neutral-50 rounded-md" />
                </div>

                <Button v-for="page in course_links.slice(1, course_links.length)" :to="`${page.to}`" :text="page.text" :aria_label="page.aria_label" class="hidden md:block" />
            </template>


            <Dropdown :tabs="[(!course ? main_links : course_links), main_alf]">
                <Socials :header_link="true" />
            </Dropdown>
        </nav>
    </header>
</template>