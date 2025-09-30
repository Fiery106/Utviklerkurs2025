<script setup>
import { defineProps, computed } from 'vue'

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
    links: {
        type: Array,
        default: [
            {
                url: "",
                text: ""
            }
        ]
    }
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
    <button v-if="dropdown" @click="showDropdown()" class="relative text-2xl">
        <font-awesome-icon :icon="[icon_type, icon_name]" class="pl-2"/>
        <div id="dropdown" class="hidden absolute bg-brand px-4 -right-2 text-base"> <!--endre "hidden" til "block"-->
            <a v-for="link in links" :href="link.url" target="_blank">
                <p class="my-4 w-50">
                    {{ link.title }}
                </p>
            </a>
        </div>
    </button>

    <button v-else-if="toggle" @click="toggleLight()">
        <font-awesome-icon :icon="['far', 'sun']" class="pl-2"/>
    </button>

    <button v-else class="">
        <router-link :to class="flex items-center">
            <p v-if="text">
                {{ text }}
            </p>
            <font-awesome-icon v-if="icon_name" :icon="[icon_type, icon_name]" class="pl-2"/>
        </router-link>
    </button>
</template>