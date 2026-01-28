<script setup>
import Logo from "@/components/elements/Logo.vue"

import { useSocials } from "@/compostables/links/social_medias"

const { social_medias } = useSocials()

const source_code = "https://github.com/Fiery106/Utviklerkurs2025"
const organisation = {
    title: "Senter for arbeidslivforberedelse",
    name: "ALF as", //Må ikke skrives på en annen måte!!
    num: "881 097 982",

    /* Copyright © 2023 */
    copyright: "Copyright",
    year: "2023",
    rights: "All right reserved"
}
</script>


<template>
    <footer class="dark:invert">
        <Logo class="invert h-16" />

        <div class="flex flex-col items-center md:text-sm">
            <div class="font-bold mb-4">
                <p>
                    {{ organisation.title.toUpperCase() }}
                </p>
                
                <div class="flex justify-center">
                    <p>
                        {{ organisation.name }}
                    </p>
                    <span class="bg-neutral-900 w-0.5 mx-1"></span>
                    <p>
                        Org. Nr.
                        <span class="font-normal"> {{ organisation.num }} </span>
                    </p>
                </div>
            </div>

            <p>
                {{ organisation.copyright }} <Icon :id="11" class="text-sm" /> {{ organisation.year }} - {{ organisation.rights }}
            </p>

            <Button :state="2" :look="1" :to="source_code" text="source koden på Github" />
        </div>

        <div class="flex gap-2">
            <Button :state="2" v-for="media in social_medias" :key="media.icon_name" :icon_id="media.icon_id" :to="media.url" :aria_label="media.aria_label" class="text-neutral-900" />
        </div>
    </footer>
</template>