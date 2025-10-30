<script setup>
import CodeExample from "@/components/CodeExample.vue";
import Image from "@/components/elements/Image.vue";

import Python from "@/assets/images/logos/python_logo.svg"
import Tailwind from "@/assets/images/logos/tailwind_logo.svg"
import Vue from "@/assets/images/logos/vuejs_logo.svg"

import { useIcons } from "@/compostables/icons";

const { html_icon, css_icon, js_icon, react_icon, angular_icon, bootstrap_icon } = useIcons()
const code_langs = [
    html_icon, css_icon, js_icon, bootstrap_icon,react_icon, angular_icon, 
]
const more_langs = [
    {
        src: Vue,
        alt: "Vue ikon"
    },
    {
        src: Python,
        alt: "Python ikon"
    },
    {
        src: Tailwind,
        alt: "Tailwind ikon"
    },
]
</script>


<template>
    <div class="*:mb-8">
        <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis assumenda repudiandae vel reprehenderit omnis consequuntur pariatur ratione itaque hic, temporibus nesciunt magnam, dolore, autem doloremque magni ullam in quos explicabo.
        </div>

        <CodeExample />

        <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas modi temporibus vero omnis qui est, similique sequi inventore neque corporis rerum quam animi veritatis quaerat sapiente? Temporibus ullam placeat voluptatem.
        </div>

        <div class="flex items-center min-w-sm max-w-xl">
            <Image v-for="langs in code_langs" :is-icon="true" :icon_name="langs.name" :icon_type="langs.type" :class="langs.color" :alt="langs.alt" class="text-4xl" />
            <Image v-for="langs in more_langs" :src="langs.src" :alt="langs.alt" class="size-8" />
        </div>
    </div>
</template>