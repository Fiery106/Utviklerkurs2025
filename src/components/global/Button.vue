<script setup>
import { useIcons } from "@/compostables/icons.js"
import { capitalizeFirstLetter, showDropdown, scrollToTop, toggleDarkMode } from "@/compostables/functions";

const icons = useIcons()

const { bars_icon, sun_icon, moon_icon, user_icon } = useIcons()
//livet mitt skulle ha vært enklere hvis jeg hadde enums for dette :(

const header = {
    name: "header",
    styles: ""
}
const basic = {
    name: "basic",
    styles: ""
}
const highlight = {
    name: "highlight",
    styles: "highlight"
}

const looks = [
    header, basic, highlight
]

const router_link = "router-link"
const button = "button"
const anchor = "anchor"

const states = [
    router_link, button, anchor
]

defineProps({
    text: {
        type: String,
        default: ""
    },

    aria_label: { //hva driver med knappen?
        type: String,
        default: "aria-label"
    },

    to: {
        type: String,
        default: ""
    },


    icon: {
        type: Object,
        default: {
            name: {
                type: String,
                default: ""
            },
            type: {
                type: String,
                default: "fas"
            },
            alt: { //beskriv kort ikonet
                type: String,
                default: "aria-labelledby"
            },
        }
    },


    state: {
        type: String,
        default: "router-link"
    },

    look: {
        type: String,
        default: "header"
    },

    color: {
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
    icon_alt: {
        type: String,
        default: ""
    },
})
</script>


<template>
    <router-link v-if="state == states[0] && look == looks[0].name || look == looks[1].name " @click="scrollToTop()" :to :aria-label="aria_label" 
    :class="`${(look == looks[0].name) ? 
        `${($route.path == `/${to}`) ? 'underline underline-offset-4 decoration-2' : 'no-underline'} text-neutral-50 font-bold hover:text-neutral-50/75 motion-safe:active:text-neutral-50 transition ease-out duration-100` 
        : 
        `text-neutral-50 font-bold no-underline px-3 py-1 ${color} active:${color} hover:${color}/75 active:scale-95 transition ease-out duration-100 shadow-md`}`">
        {{ capitalizeFirstLetter(text) }}

        <KeepAlive v-if="icon_name">
            <FontAwesomeIcon :icon="[icon_type, icon_name]" :aria-labelledby="icon_alt" />
        </KeepAlive>
    </router-link>


    <button v-else-if="state == states[1] && look == looks[0].name || look == looks[1].name" :aria-label="aria_label" 
    :class="`${(look == looks[0].name) ? 
        `${($route.path == `/${to}`) ? 'underline underline-offset-4 decoration-2' : 'no-underline'} text-neutral-50 font-bold hover:text-neutral-50/75 motion-safe:active:text-neutral-50 transition ease-out duration-100` 
            : 
        `text-neutral-50 font-bold no-underline px-3 py-1 ${color} active:${color} hover:${color}/75 active:scale-95 transition ease-out duration-100 shadow-md`}`">
        {{ capitalizeFirstLetter(text) }}

        <KeepAlive v-if="icon_name">
            <FontAwesomeIcon :icon="[icon_type, icon_name]" :aria-labelledby="icon_alt" />
        </KeepAlive>
    </button>


    <a v-else :href="to" target="_blank" :aria-label="aria_label" 
    :class="``">
        {{ capitalizeFirstLetter(text) }}

        <KeepAlive v-if="icon_name">
            <FontAwesomeIcon :icon="[icon_type, icon_name]" :aria-labelledby="icon_alt" />
        </KeepAlive>
    </a>
</template>