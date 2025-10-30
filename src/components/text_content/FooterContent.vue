<script setup>
import { useIcons } from "@/compostables/icons.js"

import { useContacts } from "@/compostables/contact_info"

const { copyright_icon } = useIcons()
const { org_details, source_code } = useContacts()
</script>


<template>
    <div class="text-sm my-6">
        <div class="font-title font-bold mb-6">
            <div>
                {{ org_details.text.toUpperCase() }}
            </div>
            <div>
                {{ org_details.name.toUpperCase() }} | Org. Nr. <span class="font-normal"> {{ org_details.num }} </span>
            </div>
        </div>

        <div>
            {{ org_details.copyright }} <font-awesome-icon :icon="[copyright_icon.type, copyright_icon.name]" /> {{ org_details.year }} - {{ org_details.rights }}
        </div>

        <a :href="source_code" target="_blank" aria-label="Åpne source koden på Github" class="underline">
            Source koden på Github
        </a>
    </div>
</template>