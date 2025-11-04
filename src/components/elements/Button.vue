<script setup>
import { dropdown, toggle, login } from '@/compostables/links/pages.js'
import { useIcons } from "@/compostables/icons.js"
import { capitalizeFirstLetter, toggleLight, showDropdown, scrollToTop } from "@/compostables/functions";

const { bars_icon, sun_icon, moon_icon, user_icon } = useIcons()
const label = "gå til Alfs sin side: "


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
        default: "ikon"
    },
    aria_label: {
        type: String,
        default: ""
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
    <button type="button" v-if="state == dropdown" @click="showDropdown()" aria-label="åpne en dropdown meny" class="relative">
        <KeepAlive>
            <font-awesome-icon :icon="[bars_icon.type, bars_icon.name]" :alt class="text-2xl" />
        </KeepAlive>

        <div id="dropdown" class="hidden block absolute bg-zinc-900 px-4 -right-4 top-8"> <!--endre "hidden" til "block"-->
            <a v-for="link in links" :href="link.url" target="_blank" :aria-label="label + link.title">
                <p class="my-4 pr-1 text-end text-nowrap">
                    {{ capitalizeFirstLetter(link.title) }}
                </p>
            </a>
        </div>
    </button>


    <button type="button" v-else-if="state == toggle" aria-label="endre mellom lys og mørkmodus" @click="toggleLight()">
        <KeepAlive>
            <font-awesome-icon :icon="[sun_icon.type, sun_icon.name]" :alt />
        </KeepAlive>
    </button>


    <button type="button" v-else-if="state == login" aria-label="logg på med alf kontoen din">
        <router-link to="/404" @click="scrollToTop()" class="items-center">
            <p class="hidden md:block">
                Logg på
            </p>

            <KeepAlive>
                <font-awesome-icon :icon="[user_icon.type, user_icon.name]" :alt class="pb-1 md:pl-1 text-xl"/>
            </KeepAlive>
        </router-link>
    </button>


    <button type="button" v-else :aria_label="aria_label">
        <router-link v-if="text" :to @click="scrollToTop()" class="flex items-center">
            <p>
                {{ capitalizeFirstLetter(text) }}
            </p>

            <KeepAlive>
                <font-awesome-icon v-if="icon_name" :icon="[icon_type, icon_name]" :alt class="pl-1" />
            </KeepAlive>
        </router-link>

        <a v-else :href="to">
            <KeepAlive>
                <font-awesome-icon v-if="icon_name" :icon="[icon_type, icon_name]" :alt class="pl-1" />
            </KeepAlive>
        </a>
    </button>
</template>

<!--
    For en eller annen grunn, når man prøver å passere to eller flere props inn i "class" egenskapen, default verdiene slettes bortsett fra det første. Derfor må jeg bruke selve class egenskapen til å sikre for at vi har de riktige stylingene. Man kan merke det på slutten av Button componenten. Det vil ikke funke ellers så langt jeg vet.
    
    Kanskje noen andre enn meg kan finne ut løsningen til dette problemet men for øyeblikket, sånn skal det være.
-->
