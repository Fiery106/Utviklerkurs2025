<script setup>
import CodeExample from "@/components/CodeExample.vue";

import Python from "@/assets/images/logos/python_logo.svg"
import Tailwind from "@/assets/images/logos/tailwind_logo.svg"
import Vue from "@/assets/images/logos/vuejs_logo.svg"

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
    <section class="flex flex-col gap-8">
        <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis assumenda repudiandae vel reprehenderit omnis consequuntur pariatur ratione itaque hic, temporibus nesciunt magnam, dolore, autem doloremque magni ullam in quos explicabo.
        </div>

        <CodeExample />

        <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas modi temporibus vero omnis qui est, similique sequi inventore neque corporis rerum quam animi veritatis quaerat sapiente? Temporibus ullam placeat voluptatem.
        </div>

        <div class="flex items-center gap-4 mx-auto min-w-sm max-w-xl">
            <KeepAlive>
                <img v-for="langs in more_langs" :src="langs.src" :alt="langs.alt" class="size-8 select-none" />
            </KeepAlive>
            <Icon v-for="value in 6" :id="value + 25" class="text-4xl" />
        </div>
    </section>
</template>