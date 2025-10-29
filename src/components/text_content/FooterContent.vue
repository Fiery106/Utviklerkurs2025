<script setup>
import { useIcons } from "@/compostables/icons.js"

const { copyright_icon } = useIcons()

const org_details = {
        text: "SENTER FOR ARBEIDSLIVSFORBEREDELSE",
        name: "ALF AS",
        num: "881 097 982",

        /* Copyright © 2023 */
        copyright: "Copyright",
        year: "2023",
        rights: "All right reserved"
    }

    //HOVEDKONTOR : 92-09-28-39
</script>


<template>
    <div class="text-sm my-6">
        <div class="font-title font-bold mb-6">
            <div>
                {{ org_details.text }}
            </div>
            <div>
                {{ org_details.name }} | Org. Nr. <span class="font-normal"> {{ org_details.num }} </span>
            </div>
        </div>
        <div>
            {{ org_details.copyright }} <font-awesome-icon :icon="[copyright_icon.type, copyright_icon.name]" /> {{ org_details.year }} - {{ org_details.rights }}
        </div>
    </div>
</template>