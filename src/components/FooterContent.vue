<script setup>
import { useIcons } from "@/compostables/icons.js"
import { useQuotes } from "@/compostables/quotes"

const { copyright_icon, phone_icon } = useIcons()
const { footer } = useQuotes()
</script>


<template>
    <div class="text-sm">
        <div class="font-bold py-6">
            <p>
                {{ footer.company_text }}
            </p>
            <p>
                {{ footer.org }} 
                <font-awesome-icon :icon="[phone_icon.type, phone_icon.name]" />
                <a class="underline" href=""> {{ footer.org_number }} </a>
            </p>
        </div>
        <p>
            {{ footer.copyright }} 
            <font-awesome-icon :icon="[copyright_icon.type, copyright_icon.name]" /> 
            {{ footer.rights }}
        </p>
    </div>
</template>