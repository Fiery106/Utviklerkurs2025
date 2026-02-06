<script setup>
import { ref } from "vue";
import { capitalizeFirstLetter, showDropdown, scrollToTop, toggleDarkMode } from "@/compostables/functions";

const toggle = ref(true)

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

    icon_id: {
        type: Number,
        default: 0
    },


    state: {
        type: Number,
        default: 0
    },

    look: {
        type: Number,
        default: 0
    },

    method: {
        type: Number,
        default: 0
    },

    color: { //BUGGED
        type: String
    },

    download: {
        type: String
    },
})
</script>


<template>
    <router-link v-if="state == 0" @click="scrollToTop()" :to="`${method == 1 ? '/innlogging' : to}`" :aria-label="`${method == 1 ? 'Logg på kursportalen' : aria_label}`" 
    :class="`${look == 0 ? 
    `${$route.path == `/${to}` && method != 1 ? 'underline underline-offset-4 decoration-2' : 'no-underline'} header-link` 
        :
        `${look == 1 ?
        'no-underline px-3 py-1 motion-safe:active:scale-95 shadow-md group'
            :
        `font-bold text-2xl no-underline 
        fixed bottom-0 right-0 m-8 p-3 md:px-9 
        bg-neutral-50 hover:bg-neutral-50/75 active:bg-neutral-50/75 motion-safe:active:bg-neutral-50 
        dark:bg-alf-blue dark:text-neutral-50 dark:hover:bg-alf-blue/75 dark:motion-safe:active:bg-alf-blue 
        active:scale-95 shadow-md z-1`
}`} 
    select-none`">

        <slot>
            <template v-if="method == 1">
                Logg på

                <Icon :id="11" />
            </template>

            <template v-else-if="look == 2">
                <p class="hidden md:block">
                    Ny post
                </p>

                <Icon :id="15" />
            </template>

            
            <template v-else>
                <p>{{ capitalizeFirstLetter(text) }}</p>

                <Icon v-if="icon_id" :id="icon_id" />
            </template>
        </slot>
    </router-link>



    <button type="button" v-else-if="state == 1" @click="`${method == 1 ? (toggle = !toggle, toggleDarkMode()) : method == 2 ? showDropdown('dropdown') : ''}`" :aria-label="`${method == 1 ? 'Slå på/av lysmodus' : method == 2 ? 'Vis dropdown menyen' : aria_label}`"
    :class="`${look == 0 ? 
    `header-link` 
        :
    `${look == 1 ? 
        `${toggle ? //Husk å legge til en toggle her!!
            'text-neutral-50 bg-alf-blue hover:bg-alf-blue/75 motion-safe:active:bg-alf-blue inset-ring inset-ring-neutral-50' 
                : 
            'text-neutral-900 bg-neutral-200 hover:bg-neutral-200/75 motion-safe:active:bg-neutral-200 dark:text-neutral-50 dark:bg-zinc-600 dark:hover:bg-zinc-600/75 dark:motion-safe:active:bg-zinc-600'} 
        text-xl w-full md:w-fit px-4 motion-safe:active:scale-95 shadow-md`
            :
        `rounded-full bg-neutral-100 hover:bg-neutral-100/75 motion-safe:active:bg-neutral-100 text-neutral-500 dark:bg-zinc-600 dark:text-neutral-200 dark:hover:bg-zinc-600/75 dark:motion-safe:active:bg-zinc-600 shadow-md`} font-normal px-3 py-1 `}
    select-none group`">
    
        <div v-if="method == 1" class="text-xl w-full hover:-rotate-45">
            <Icon v-if="toggle" :id="8" />

            <Icon v-else :id="9" />
        </div>

        <template v-else-if="method == 2">
            <Icon :id="12" />
        </template>

        <template v-else-if="look == 1" @click="toggle = !toggle"> <!-- ??????? -->
            {{ capitalizeFirstLetter(text) }}
        </template>

        <template v-else-if="look == 2" @click="">
            <Icon :id="13" />

            {{ text }}
        </template>


        <template v-else>
            {{ capitalizeFirstLetter(text) }}

            <Icon v-if="icon_id" :id="icon_id" />
        </template>
    </button>



    <a v-else :href="to" :target="`${look <= 1 ? '_blank' : ''}`" :download :aria-label="aria_label" 
    :class="`${look == 0 ? 
    'header-link' 
        : 
    `${look == 1 ? 
        'hover:text-neutral-900/75 motion-safe:active:text-neutral-900'
            : 
        `${look == 2 ?
        'hover:selection:text-neutral-50 hover:text-alf-blue' 
            :
            `${look == 3 ? 
                'text-neutral-700 hover:text-neutral-700/75 motion-safe:active:text-neutral-700 emphasis' 
                :
                'px-3 py-1 bg-neutral-100 border-2 border-dashed border-neutral-700/25 hover:border-neutral-700/50 motion-safe:active:border-neutral-700/25 text-neutral-500 hover:text-neutral-900/75 motion-safe:active:text-neutral-900 motion-safe:active:scale-95 shadow-md'
    }`}`}`} group`">

        <template v-if="look == 4">
            <Icon :id="17" />

            {{ text }}
        </template>


        <template v-else>
            {{ capitalizeFirstLetter(text) }}

            <Icon v-if="icon_id" :id="icon_id" />
        </template>
    </a>
</template>