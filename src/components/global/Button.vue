<script setup>
import { useIcons } from "@/compostables/icons.js"
import { capitalizeFirstLetter, showDropdown, scrollToTop, toggleDarkMode } from "@/compostables/functions";

const { bars_icon, sun_icon, moon_icon, user_icon } = useIcons()
const label = "gå til Alfs sin side: "
//livet mitt skulle ha vært enklere hvis jeg hadde enums for dette :(
const states = [
    "dropdown", "toggle", "login"
]

const methods = [
    "button", "router", "anchor"
]

defineProps({
    to: {
        type: String,
        default: ""
    },
    

    text: {
        type: String,
        default: ""
    },
    aria_label: {
        type: String,
        default: "aria label"
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


    state: {
        type: String,
        default: ""
    },
    method: {
        type: String,
    },
    isButton: {
        type: Boolean,
        default: true
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
    click: {
        type: Function,
    },
})
</script>


<template>
    <button type="button" v-if="state == states[0] && isButton" @click="showDropdown()" :aria-label="aria_label" class="relative">
        <KeepAlive>
            <FontAwesomeIcon :icon="[bars_icon.type, bars_icon.name]" :aria-labelledby="icon_alt" class="text-2xl" />
        </KeepAlive>

        <div id="dropdown" class="hidden absolute bg-zinc-900 px-4 -right-4 top-8"> <!--endre "hidden" til "block"-->
            <a v-for="link in links" :href="link.url" target="_blank" :aria-label="label + link.title">
                <p class="my-4 pr-1 text-end text-nowrap">
                    {{ capitalizeFirstLetter(link.title) }}
                </p>
            </a>
        </div>
    </button>


    <button type="button" v-else-if="state == states[1] && isButton" :aria-label="aria_label" @click="toggleDarkMode()" class="text-xl">
        <KeepAlive>
            <FontAwesomeIcon :icon="[sun_icon.type, sun_icon.name]" :aria-labelledby="icon_alt" />
        </KeepAlive>
    </button>


    <button type="button" v-else-if="state == states[2] && isButton" :aria-label="aria_label">
        <router-link to="innlogging" class="flex items-center">
            <p class="hidden md:block">
                Logg på
            </p>

            <KeepAlive>
                <FontAwesomeIcon :icon="[user_icon.type, user_icon.name]" :aria-labelledby="icon_alt" class="pb-1 md:pl-1 text-xl"/>
            </KeepAlive>
        </router-link>
    </button>

    <a v-else-if="!isButton" :aria-label="aria_label" class="underline">
        {{ text }}
    </a>

    <button type="button" v-else :aria_label="aria_label" @click="scrollToTop()">
        <router-link v-if="text" :to class="flex items-center">
            <p>
                {{ capitalizeFirstLetter(text) }}
            </p>

            <KeepAlive>
                <FontAwesomeIcon v-if="icon_name" :icon="[icon_type, icon_name]" :aria-labelledby="icon_alt" class="pl-1" />
            </KeepAlive>
        </router-link>

        <a v-else :href="to" target="_blank">
            <KeepAlive>
                <FontAwesomeIcon v-if="icon_name" :icon="[icon_type, icon_name]" :aria-labelledby="icon_alt" class="pl-1" />
            </KeepAlive>
        </a>
    </button>
</template>

<!--
    <div class="group text-neutral-50 rounded-lg">
        <button type="button" v-if="state == states[0]" :aria-label @click="toggleLight()" class="hover:text-neutral-50/50">
            <KeepAlive v-if="method == methods[1]">
                <FontAwesomeIcon :icon="[sun_icon.type, sun_icon.name]" :aria-labelledby="sun_icon.alt" class="text-xl" />
            </KeepAlive>

            <KeepAlive v-else-if="method == methods[2]" @click="showDropdown()">
                <FontAwesomeIcon :icon="[bars_icon.type, bars_icon.name]" :aria-labelledby="bars_icon.alt" class="text-2xl" />
            </KeepAlive>

            <div v-else-if="method == methods[3]" class="flex flex-row" @click="toggleLight()">
                <p class="hidden md:block">
                    Logg på
                </p>

                <KeepAlive>
                    <FontAwesomeIcon :icon="[user_icon.type, user_icon.name]" :aria-labelledby="user_icon.alt" class="text-xl md:pl-1" />
                </KeepAlive>
            </div>

            <div v-else>
                <p v-if="text">
                    {{ capitalizeFirstLetter(text) }}
                </p>

                <KeepAlive>
                    <FontAwesomeIcon v-if="icon_name" :icon="[icon_type, icon_name]" :aria-labelledby="icon_alt" class="text-2xl group-has-[p]:pl-1 group-has-[p]:text-xl" />
                </KeepAlive>
            </div>
        </button>


        <input v-else-if="state == states[1]" :aria-label type="text" :required="true" :placeholder="text" />


        <router-link v-else-if="state == states[2]" :aria-label :to @click="scrollToTop()">
            <p v-if="text">
                {{ capitalizeFirstLetter(text) }}
            </p>

            <KeepAlive>
                <FontAwesomeIcon v-if="icon_name" :icon="[icon_type, icon_name]" :aria-labelledby="icon_alt" class="text-2xl group-has-[p]:pl-1 group-has-[p]:text-xl" />
            </KeepAlive>
        </router-link>


        <a v-else :href="to" target="_blank" :aria-label class="underline">
            <p v-if="text">
                {{ text }}
            </p>

            <KeepAlive>
                <FontAwesomeIcon v-if="icon_name" :icon="[icon_type, icon_name]" :aria-labelledby="icon_alt" class="text-2xl group-has-[p]:pl-1 group-has-[p]:text-xl" />
            </KeepAlive>
        </a>
    </div>
-->