<script setup>
import { useIcons } from "@/compostables/icons.js"
import { useContacts } from "@/compostables/contact_info.js"

const { copyright_icon } = useIcons()
const { company_details } = useContacts()
</script>


<template>
    <div class="text-sm pb-6">
        <div class="font-bold py-6">
            <p class="font-title">
                {{ company_details.subtext }}
            </p>
            <p class="font-title">
                {{ company_details.name }} | Org. Nr.
                <a class="font-normal"> 
                    {{ company_details.number }} 
                </a>
            </p>
        </div>
        <p class="font-normal">
            {{ company_details.copyright }} 
            <font-awesome-icon :icon="[copyright_icon.type, copyright_icon.name]" /> 
            {{ company_details.rights }}
        </p>
    </div>
</template>