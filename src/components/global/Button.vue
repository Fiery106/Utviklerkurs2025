<script setup>
import { useIcons } from "@/compostables/icons.js"
import { capitalizeFirstLetter, showDropdown, scrollToTop, toggleDarkMode } from "@/compostables/functions";

const { bars_icon, sun_icon, moon_icon, user_icon } = useIcons()

defineProps({
    text: {
        type: String,
        default: ""
    },

    aria_label: { //hva driver med knappen?
        type: String,
        default: "manglede aria-label"
    },

    to: {
        type: String,
        default: ""
    },


    // icon: {
    //     type: Object,
    //     default: {
    //         name: {
    //             type: String,
    //             default: ""
    //         },
    //         type: {
    //             type: String,
    //             default: "fas"
    //         },
    //         alt: { //beskriv kort ikonet
    //             type: String,
    //             default: "aria-labelledby"
    //         },
    //     }
    // },

    // icon_id: {
    //     type: Int16Array,
    //     default: 0
    // },


    state: {
        type: Int8Array,
        default: 0
    },

    look: {
        type: Int8Array,
        default: 0
    },

    method: {
        type: Int8Array,
        default: 0
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
    <router-link v-if="state == 0" @click="scrollToTop()" :to :aria-label="aria_label" 
    :class="`${look == 0 ? 
        `${($route.path == `/${to}`) ? 'underline underline-offset-4 decoration-2' : 'no-underline'} hidden md:block font-bold hover:text-neutral-50/60 motion-safe:active:text-neutral-50` 
            :
        `no-underline px-3 py-1 bg-${color} active:bg-${color} hover:bg-${color}/60 active:scale-95 shadow-md`} 
    font-bold text-neutral-50 select-none`">

        {{ capitalizeFirstLetter(text) }}

        <FontAwesomeIcon v-if="icon_name" :icon="[icon_type, icon_name]" :aria-labelledby="icon_alt" :class="`${text ? 'text-2xl' : 'text-3xl md:text-2xl'}`" />
    </router-link>


    <button type="button" v-else-if="state == 1" :aria-label="aria_label"
    :class="`${look == 0 ? 
        `${($route.path == `/${to}`) ? 'underline underline-offset-4 decoration-2' : 'no-underline'} hover:text-neutral-50/60 motion-safe:active:text-neutral-50` 
            :
        `no-underline px-3 py-1 bg-${color} active:bg-${color} hover:bg-${color}/60 active:scale-95 shadow-md`} 
    font-bold text-neutral-50 select-none`">
    
        <div v-if="method == 1" @click="toggleDarkMode()">
            <FontAwesomeIcon :icon="[sun_icon.type, sun_icon.name]" :aria-labelledby="sun_icon.alt" class="text-xl" />
        </div>

        <div v-else-if="method == 2" @click="toggleDarkMode()">
            <FontAwesomeIcon  :icon="[bars_icon.type, bars_icon.name]" :aria-labelledby="bars_icon.alt" class="text-xl" />
        </div>

        <div v-else>
            {{ capitalizeFirstLetter(text) }}

            <FontAwesomeIcon v-if="icon_name" :icon="[icon_type, icon_name]" :aria-labelledby="icon_alt" :class="`${text ? 'text-2xl' : 'text-3xl md:text-2xl'}`" />
        </div>
    </button>


    <a v-else :href="to" :target="`${look <= 1 ? '_blank' : ''}`" :aria-label="aria_label" 
    :class="`${look == 0 ? 
        'hover:text-neutral-900/60 motion-safe:active:text-neutral-900' 
            : 
        `${look == 1 ? 
            'text-neutral-900 hover:selection:text-neutral-50 hover:text-alf-blue' 
                : 
            `${look == 2 ?
            'text-neutral-700 hover:text-neutral-700/60 motion-safe:active:text-neutral-700 emphasis'
                :
            'px-6 py-3 bg-neutral-200 text-neutral-900 border-2 border-neutral-700/50 border-dashed hover:text-neutral-900/60 active:text-neutral-900 active:scale-95 shadow-md'
    }`}`}`">

        {{ capitalizeFirstLetter(text) }}

        <FontAwesomeIcon v-if="icon_name" :icon="[icon_type, icon_name]" :aria-labelledby="icon_alt" :class="`${text ? 'text-2xl' : 'text-3xl md:text-2xl'}`" />
    </a>
</template>