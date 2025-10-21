<script setup>
import CodeExample from "@/components/CodeExample.vue";
import Button from "@/components/Button.vue";

import { useIcons } from "@/compostables/icons";

const { html_icon, css_icon, js_icon, react_icon, angular_icon, bootstrap_icon } = useIcons()

const coding = [
    html_icon, 
    css_icon, 
    js_icon, 
    bootstrap_icon,
    react_icon, 
    angular_icon, 
]
</script>


<template>
    <div class="py-8 *:py-4">
        <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis assumenda repudiandae vel reprehenderit omnis consequuntur pariatur ratione itaque hic, temporibus nesciunt magnam, dolore, autem doloremque magni ullam in quos explicabo.
        </div>

        <CodeExample />

        <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas modi temporibus vero omnis qui est, similique sequi inventore neque corporis rerum quam animi veritatis quaerat sapiente? Temporibus ullam placeat voluptatem.
        </div>

        <div class="flex justify-around items-center">
            <Button v-for="code in coding" :icon_name="code.name" :icon_type="code.type" class="invert" />
            <img src="@/assets/images/logos/vuejs_logo.svg" alt="vuejs_logo" class="size-5" />
        </div>
    </div>
</template>