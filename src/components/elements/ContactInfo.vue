<script setup>
import Block from '@/components/elements/Block.vue';
import Image from '@/components/elements/Image.vue';
import Button from '@/components/elements/Button.vue';
import { useIcons } from '@/compostables/icons';
import Tom from "@/assets/images/selfies/TomSunde.jpg"
import Anna from "@/assets/images/selfies/AnnaTheodorsen.jpg"

import { useContacts } from '@/compostables/contact_info';

const { course_contacts, website_contacts } = useContacts()
const { envelope_icon, phone_icon, arrow_up_right_icon } = useIcons()
const images = [
    Tom, Anna
]

function test() {
    console.log("helo")
}

defineProps({
    src: {
        type: String,
        default: "",
    },
    
})
</script>


<template>
    <Block v-for="image in images" class="flex mb-8 items-center text-left border-4 border-white **:mx-0">
        <Image :src="image" class="size-64 h-fit "/>
        <div class="flex flex-col">
            <div>
                <Image :is-icon="true" :icon_name="envelope_icon.name" :icon_type="envelope_icon.type" class="text-alf-blue" />
                eksempel@gamil.com
                <Button @click="test" :icon_name="arrow_up_right_icon.name" :icon_type="arrow_up_right_icon.type" class="text-alf-blue" />
            </div>
            <div>
                <Image :is-icon="true" :icon_name="phone_icon.name" :icon_type="phone_icon.type" class="text-alf-blue" />
                00 47 74 74032 80 
                <Button :icon_name="arrow_up_right_icon.name" :icon_type="arrow_up_right_icon.type" class="text-alf-blue" />
            </div>
        </div>
    </Block>
</template>