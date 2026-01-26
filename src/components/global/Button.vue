<script setup>
import { useIcons } from "@/compostables/icons.js"
import { capitalizeFirstLetter, showDropdown, scrollToTop, toggleDarkMode } from "@/compostables/functions";

const { bars_icon, sun_icon, moon_icon, user_icon, download_icon, circle_icon } = useIcons()

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
        type: String
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
    <router-link v-if="state == 0" @click="scrollToTop()" :to="`${method == 1 ? '/innlogging' : to}`" :aria-label="`${method == 1 ? 'Logg på kursportalen' : aria_label}`" 
    :class="`${look == 0 ? 
    `${$route.path == `/${to}` && method != 1 ? 'underline underline-offset-4 decoration-2' : 'no-underline'} font-bold hover:text-neutral-50/75 motion-safe:active:text-neutral-50` 
        :
    `no-underline px-3 py-1 active:scale-95 shadow-md`} 
    font-bold text-neutral-50 select-none`">

        <slot>
            <template v-if="method == 1">
                Logg på

                <FontAwesomeIcon :icon="[user_icon.type, user_icon.name]" :aria-labelledby="user_icon.alt" class="text-xl" />
            </template>

            
            <template v-else>
                {{ capitalizeFirstLetter(text) }}

                <FontAwesomeIcon v-if="icon_name" :icon="[icon_type, icon_name]" :aria-labelledby="icon_alt" :class="`${text ? 'text-2xl' : 'text-3xl md:text-2xl'}`" />
            </template>
        </slot>
    </router-link>



    <button type="button" v-else-if="state == 1" @click="`${method == 1 ? toggleDarkMode() : method == 2 ? showDropdown() : ''}`" :aria-label="`${method == 1 ? 'Slå på/av lysene' : method == 2 ? 'Vis dropdown menyen' : aria_label}`"
    :class="`${look == 0 ? 
    `text-neutral-50 hover:text-neutral-50/75 motion-safe:active:text-neutral-50` 
        :
    `${look == 1 ? 
        `${false ? //Husk å legge til en toggle her!!
            'text-neutral-50 bg-alf-blue hover:bg-alf-blue/75 motion-safe:active:bg-alf-blue inset-ring inset-ring-neutral-50' 
                : 
            'text-neutral-900 bg-neutral-200 hover:bg-neutral-200/75 motion-safe:active:bg-neutral-200 dark:text-neutral-50 dark:bg-zinc-600 dark:hover:bg-zinc-600/75 dark:motion-safe:active:bg-zinc-600'} 
        text-xl w-full md:w-fit px-4 active:scale-95 shadow-md`
            :
        `rounded-full bg-neutral-100 hover:bg-neutral-100/75 motion-safe:active:bg-neutral-100 text-neutral-500 shadow-md`} font-normal px-3 py-1 `}
    font-bold select-none`">
    
        <div v-if="method == 1">
            <FontAwesomeIcon :icon="[sun_icon.type, sun_icon.name]" :aria-labelledby="sun_icon.alt" class="text-xl" />
        </div>

        <template v-else-if="method == 2"> <!-- Husk å bytte metoder -->
            <FontAwesomeIcon :icon="[bars_icon.type, bars_icon.name]" :aria-labelledby="bars_icon.alt" class="text-2xl" />
        </template>

        <template v-else-if="look == 2" @click="">
            <FontAwesomeIcon :icon="[circle_icon.type, circle_icon.name]" :aria-labelledby="circle_icon.alt" class="text-2xl text-alf-blue" />

            {{ text }}
        </template>


        <template v-else>
            {{ capitalizeFirstLetter(text) }}

            <FontAwesomeIcon v-if="icon_name" :icon="[icon_type, icon_name]" :aria-labelledby="icon_alt" :class="`${text ? 'text-2xl' : 'text-3xl md:text-2xl'}`" />
        </template>
    </button>



    <a v-else :href="to" :target="`${look <= 1 ? '_blank' : ''}`" :download :aria-label="aria_label" 
    :class="`${look == 0 ? 
    'hover:text-neutral-900/75 motion-safe:active:text-neutral-900' 
        : 
    `${look == 1 ? 
        'text-neutral-900 hover:selection:text-neutral-50 hover:text-alf-blue' 
            : 
        `${look == 2 ?
        'text-neutral-700 hover:text-neutral-700/75 motion-safe:active:text-neutral-700 emphasis'
            :
        'max-w-48 px-3 py-1 bg-neutral-100 border-2 border-dashed border-neutral-700/25 hover:border-neutral-700/50 motion-safe:active:border-neutral-700/25 text-neutral-500 hover:text-neutral-900/75 motion-safe:active:text-neutral-900 active:scale-95 shadow-md'
    }`}`}`">

        <template v-if="look == 3">
            <FontAwesomeIcon v-if="look == 3" :icon="[download_icon.type, download_icon.name]" :aria-labelledby="download_icon.alt" class="hidden md:block text-2xl" />

            {{ text }}
        </template>


        <template v-else>
            {{ capitalizeFirstLetter(text) }}

            <FontAwesomeIcon v-if="icon_name" :icon="[icon_type, icon_name]" :aria-labelledby="icon_alt" :class="`${text ? 'text-2xl' : 'text-3xl md:text-2xl'}`" />
        </template>
    </a>
</template>