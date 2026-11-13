<script setup>
import Logo from '@/components/blocking/Logo.vue'
import Socials from '@/components/Socials.vue'
import DarkMode from '@/components/buttons/DarkMode.vue'
import Dropdown from '@/components/buttons/Dropdown.vue'

import { useMainLinks } from '@/compostables/links/main_links'
import { useCourseLinks } from '@/compostables/links/course_links'
import { useAlfLinks } from '@/compostables/links/alf_links'

const { main_links } = useMainLinks()
const { course_links } = useCourseLinks()
const { main_alf } = useAlfLinks()

defineProps({
    course: {
        type: Boolean,
        default: false
    }
})
</script>


<template>
    <header>
        <router-link to="/" class="not-dark:invert" aria_label="til hjem">
            <Logo class="h-8" />
        </router-link>

        <nav>
            <DarkMode />

            <div class="text-neutral-900 dark:text-neutral-50 flex items-center gap-1">
                <Icon :id="11" />
                <input type="search" name="søk" placeholder="søk her..." class="hidden md:block md:w-32 p-1 focus:outline-none focus:inset-ring-1 inset-ring-neutral-50 rounded-md text-base" />
            </div>

            <template v-if="!course">
                <Button v-for="page in main_links.slice(1, main_links.length)" :to="`${page.to}`" :text="page.text" :aria_label="page.aria_label" class="hidden md:block" />
                <button>
                    test
                </button>
            </template>

            <Dropdown :tabs="[(!course ? main_links : course_links), main_alf]">
                <Socials :header_link="true" />
            </Dropdown>
        </nav>
    </header>
</template>