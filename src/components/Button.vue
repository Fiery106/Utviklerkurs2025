<script setup>
import { computed } from 'vue'

import { dropdown, toggle, login } from '@/compostables/pages.js'
import { useIcons } from "@/compostables/icons.js"
import { capitalizeFirstLetter, toggleLight, showDropdown, scrollToTop } from "@/compostables/functions";

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
        <font-awesome-icon :icon="[bars_icon.type, bars_icon.name]" class="text-2xl" />

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
        <router-link to="/404" @click="scrollToTop()" class="items-center">
            <div class="hidden md:inline">
                Logg på
            </div>

            <font-awesome-icon :icon="[user_icon.type, user_icon.name]" class="pb-1 md:pl-1 text-xl"/>
        </router-link>
    </button>


    <button type="button" v-else>
        <router-link v-if="text" :to @click="scrollToTop()" class="flex items-center">
            <div>
                {{ capitalizeFirstLetter(text) }}
            </div>

            <font-awesome-icon v-if="icon_name" :icon="[icon_type, icon_name]" :alt class="pl-1" />
        </router-link>

        <a v-else-if="to" :href="to" target="_blank">
            <font-awesome-icon v-if="icon_name" :icon="[icon_type, icon_name]" :alt class="pl-1" />
        </a>
        <div v-else>
            <font-awesome-icon v-if="icon_name" :icon="[icon_type, icon_name]" :alt class="pl-1" />
        </div>
    </button>
</template>

<!--
    For en eller annen grunn, når man prøver å passere to eller flere props inn i "class" egenskapen, default verdiene slettes bortsett fra det første. Derfor må jeg bruke selve class egenskapen til å sikre for at vi har de riktige stylingene. Man kan merke det på slutten av Button componenten. Det vil ikke funke ellers så langt jeg vet.
    
    Kanskje noen andre enn meg kan finne ut løsningen til dette problemet men for øyeblikket, sånn skal det være.
-->
