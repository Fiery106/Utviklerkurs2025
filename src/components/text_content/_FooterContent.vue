<script setup>
import { useIcons } from "@/compostables/icons.js"
import { useContacts } from "@/compostables/contact_info"

const { copyright_icon } = useIcons()
const { source_code, organisation } = useContacts()
</script>


<template>
    <div class="text-sm">
        <div class="font-bold mb-4">
            <p>
                {{ organisation.title.toUpperCase() }}
            </p>
            <div class="flex justify-center divide-neutral-900 divide-x-2 *:px-2">
                <p>
                    {{ organisation.name }}
                </p>
                <p>
                    Org. Nr.
                    <span class="font-normal"> {{ organisation.num }} </span>
                </p>
            </div>
        </div>

        <p>
            {{ organisation.copyright }} <FontAwesomeIcon :icon="[copyright_icon.type, copyright_icon.name]" :aria-labelledby=copyright_icon.alt class="text-sm" /> {{ organisation.year }} - {{ organisation.rights }}
        </p>

        <a :href="source_code" target="_blank" aria-label="Åpne source koden på Github" class="underline">
            Source koden på Github
        </a>
    </div>
</template>