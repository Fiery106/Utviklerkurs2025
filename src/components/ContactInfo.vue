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

function funciton () {
    console.log("hello world")
}

const test = "00 12 34 56 78"

defineProps({
    isBLANK: {
        type: Boolean,
        default: true,
    },
})
</script>


<template>
    <div class="flex flex-col w-full *:gap-8 **:mx-0">
        <h1 class="mb-8">
            Ta Kontakt
        </h1>

        <div class="flex flex-col lg:flex-row">
            <div class="flex flex-col w-full gap-8">
                <Block v-for="image in images" class="flex w-full gap-8 items-center border-4 border-white ">
                    <Image :src="image" class="size-40 object-cover rounded-full border-4 border-white shadow-xl"/>
                    <div class="flex flex-col gap-1">
                        <h2>
                            Navn
                        </h2>
                        <div class="font-title">
                            Fagleder
                        </div>
                        <div class="flex items-center gap-2">
                            <Image :is-icon="true" :icon_name="envelope_icon.name" :icon_type="envelope_icon.type" class="text-alf-blue" />
                                navn@alf.no
                            <Button :icon_name="arrow_up_right_icon.name" :icon_type="arrow_up_right_icon.type" class="text-alf-blue" />
                        </div>
                        <div class="flex items-center gap-2">
                            <Image :is-icon="true" :icon_name="phone_icon.name" :icon_type="phone_icon.type" class="text-alf-blue" />
                            <Button :is-button="false" :text="test" @click="funciton()" />
                            <Button :icon_name="arrow_up_right_icon.name" :icon_type="arrow_up_right_icon.type" class="text-alf-blue" />
                        </div>
                    </div>
                </Block>
            </div>

            <Block class="w-full min-h-58 max-h-full bg-amber-400">
                <div>
                    <h2>
                        test
                    </h2>
                </div>
            </Block>
        </div>
    </div>
</template>