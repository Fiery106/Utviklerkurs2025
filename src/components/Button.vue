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
</script>


<template>
    <button v-if="dropdown" class="bg-none text-white mx-2 font-bold">
        <div v-for="(link) in links">
            <p>
                {{ link }}    
            </p>
        </div>
    </button>
    <button v-else @click="" class="bg-none text-white mx-2 font-bold">
        <router-link :to class="flex items-center">
            <p v-if="text">
                {{ text }}
            </p>
            <font-awesome-icon v-if="icon_name" :icon="[icon_type, icon_name]" class="pl-2"/>
        </router-link>
    </button>
</template>