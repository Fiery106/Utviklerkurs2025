<script setup>
import Logo from "@/components/elements/Logo.vue"

import { useSocials } from "@/compostables/links/social_medias"
import { useIcons } from "@/compostables/icons.js"
import { useContacts } from "@/compostables/contact_info"

const { social_medias } = useSocials()
const { copyright_icon } = useIcons()
const { source_code, organisation } = useContacts()
</script>


<template>
    <footer>
        <Logo class="invert h-16" />

        <div class="text-sm">
            <div class="font-bold mb-4">
                <p>
                    {{ organisation.title.toUpperCase() }}
                </p>
                <div class="flex justify-center">
                    <p>
                        {{ organisation.name }}
                    </p>
                    <div class="bg-neutral-900 w-0.5 mx-1"></div>
                    <p>
                        Org. Nr.
                        <span class="font-normal"> {{ organisation.num }} </span>
                    </p>
                </div>
            </div>

            <p>
                {{ organisation.copyright }} <FontAwesomeIcon :icon="[copyright_icon.type, copyright_icon.name]" :aria-labelledby=copyright_icon.alt class="text-sm" /> {{ organisation.year }} - {{ organisation.rights }}
            </p>

            <a :href="source_code" target="_blank" aria-label="Åpen source koden på Github" class="underline">
                Source koden på Github
            </a>
        </div>

        <div class="flex flex-row gap-2 mx-auto">
            <Button v-for="media in social_medias" :key="media.icon_name" :icon_type="media.icon.type" :icon_name="media.icon.name" :to="media.url" :aria_label="media.aria_label" class="invert **:text-2xl hover:text-neutral-50/50"/>
        </div>
    </footer>
</template>