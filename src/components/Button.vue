<script setup>
import { defineProps, computed } from 'vue'
import { useStates } from "@/components/pages.js"
import { useIcons } from "@/components/icons.js"

const { states } = useStates()
const { forNavigation, forSocials, forMisc } = useIcons()

defineProps({
    to: {
        type: String,
        default: "/"
    },
    text: {
        type: String,
        default: "Button"
    },
    icon_name: {
        type: String,
        default: ""
    },
    icon_type: {
        type: String,
        default: "fas"
    },
    dropdown: {
        type: Boolean,
        default: false
    },
    toggle: {
        type: Boolean,
        default: false
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

function showDropdown() {
    let dropdown = document.getElementById("dropdown")
    dropdown.classList.toggle("hidden")
}

function toggleLight() {
    console.log("goodbye")
}
</script>


<template>
    <button v-if="state == states[0]" @click="showDropdown()" class="relative">
        <font-awesome-icon :icon="[forNavigation[0].type, forNavigation[0].name]" class="text-2xl"/>
        <div id="dropdown" class="hidden block absolute bg-brand px-4 -right-2 text-base"> <!--endre "hidden" til "block"-->
            <a v-for="link in links" :href="link.url" target="_blank">
                <p class="my-4 pr-1 text-end text-nowrap">
                    {{ link.title }}
                </p>
            </a>
        </div>
    </button>

    <button v-else-if="state == states[1]" @click="toggleLight()">
        <font-awesome-icon :icon="[forNavigation[2].type, forNavigation[2].name]"/>
    </button>

    <button v-else-if="state == states[2]">
        <router-link to="/404" class="flex items-center">
            <p>
                Logg inn
            </p>
            <font-awesome-icon :icon="['fas', 'user']"/>
        </router-link>
    </button>

    <button v-else>
        <router-link :to class="flex items-center">
            <p v-if="text">
                {{ text }}
            </p>
            <font-awesome-icon v-if="icon_name" :icon="[icon_type, icon_name]"/>
        </router-link>
    </button>
</template>