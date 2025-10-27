<script setup>
import { computed } from 'vue'

import { dropdown, toggle, login } from '@/compostables/pages.js'
import { useIcons } from "@/compostables/icons.js"
import { capitalizeFirstLetter, toggleLight, showDropdown } from "@/compostables/functions";

const { bars_icon, sun_icon, moon_icon, user_icon } = useIcons()


defineProps({
    to: {
        type: String,
        default: ""
    },
    
    
    text: {
        type: String,
        default: ""
    },
    alt: {
        type: String,
        default: "icon"
    },


    icon_name: {
        type: String,
        default: ""
    },
    icon_type: {
        type: String,
        default: "fas"
    },
    icon_color: {
        type: String,
        default: "text-white"
    },
    icon_size: {
        type: String,
        default: "text-2xl"
    },
    

    state: {
        type: String,
        default: "none"
    },


    links: {
        type: Array,
        default: [
            {
                url: "",
                text: ""
            }
        ]
    },
})
</script>


<template>
    <button type="button" v-if="state == dropdown" @click="showDropdown()" class="relative">
        <font-awesome-icon :icon="[bars_icon.type, bars_icon.name]" :class="icon_size" />

        <div id="dropdown" class="hidden block absolute bg-zinc-900 px-4 -right-4 top-8"> <!--endre "hidden" til "block"-->
            <a v-for="link in links" :href="link.url" target="_blank">
                <div class="my-4 pr-1 text-end text-nowrap">
                    {{ capitalizeFirstLetter(link.title) }}
                </div>
            </a>
        </div>
    </button>


    <button type="button" v-else-if="state == toggle" @click="toggleLight()">
        <font-awesome-icon :icon="[sun_icon.type, sun_icon.name]" />
    </button>


    <button type="button" v-else-if="state == login">
        <router-link to="/404" class="flex items-center">
            <div>
                Logg på
            </div>

            <font-awesome-icon :icon="[user_icon.type, user_icon.name]" class="pl-1"/>
        </router-link>
    </button>


    <button type="button" v-else>
        <router-link v-if="text" :to class="flex items-center">
            <div>
                {{ capitalizeFirstLetter(text) }}
            </div>
        </router-link>

        <a v-if="to" :href="to" target="_blank">
            <font-awesome-icon v-if="icon_name" :icon="[icon_type, icon_name]" :class="icon_color, icon_size" class="text-2xl" :alt />
        </a>
        <div v-else>
            <font-awesome-icon v-if="icon_name" :icon="[icon_type, icon_name]" :class="icon_color, icon_size" class="text-2xl" :alt />
        </div>
    </button>
</template>

<!--
    For en eller annen grunn, når man prøver å passere to eller flere props inn i "class" egenskapen, default verdiene slettes bortsett fra det første. Derfor må jeg bruke selve class egenskapen til å sikre for at vi har de riktige stylingene. Man kan merke det på slutten av Button componenten. Det vil ikke funke ellers så langt jeg vet.
    
    Kanskje noen andre enn meg kan finne ut løsningen til dette problemet men for øyeblikket, sånn skal det være.
-->
