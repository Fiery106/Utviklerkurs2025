<script setup>
import { useIcons } from "@/compostables/icons.js"
import { useContacts } from "@/compostables/contact_info"

const { copyright_icon } = useIcons()
const { source_code } = useContacts()

const org = {
        title: "Senter for arbeidslivforberedelse",
        name: "Alf as",
        num: "881 097 982",

        /* Copyright © 2023 */
        copyright: "Copyright",
        year: "2023",
        rights: "All right reserved"
    }
</script>


<template>
    <div class="text-sm">
        <div class="font-title font-bold mb-4">
            <p>
                {{ org.title.toUpperCase() }}
            </p>
            <p>
                {{ org.name.toUpperCase() }} | Org. Nr. <span class="font-normal"> {{ org.num }} </span>
            </p>
        </div>

        <p>
            {{ org.copyright }} <font-awesome-icon :icon="[copyright_icon.type, copyright_icon.name]" /> {{ org.year }} - {{ org.rights }}
        </p>

        <a :href="source_code" target="_blank" aria-label="Åpne source koden på Github" class="underline">
            Source koden på Github
        </a>
    </div>
</template>