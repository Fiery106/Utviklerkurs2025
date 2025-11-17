<script setup>
import { useIcons } from "@/compostables/icons.js"
import { useContacts } from "@/compostables/contact_info"

const { copyright_icon } = useIcons()
const { source_code, organisation } = useContacts()
</script>


<template>
    <div class="text-sm">
        <div class="font-title font-bold mb-4">
            <p>
                {{ organisation.title.toUpperCase() }}
            </p>
            <p>
                {{ organisation.name.toUpperCase() }} | Org. Nr. <span class="font-normal"> {{ organisation.num }} </span>
            </p>
        </div>

        <p>
            {{ organisation.copyright }} <font-awesome-icon :icon="[copyright_icon.type, copyright_icon.name]" /> {{ organisation.year }} - {{ organisation.rights }}
        </p>

        <a :href="source_code" target="_blank" aria-label="Åpne source koden på Github" class="underline">
            Source koden på Github
        </a>
    </div>
</template>