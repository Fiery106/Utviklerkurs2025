<script setup>
import Block from '@/components/elements/Block.vue';

import { useIcons } from '@/compostables/icons';
import { usePhoneNumber, showPhoneNumber, useEmailAddress } from '@/compostables/functions';

const {envelope_icon, phone_icon, link_icon, arrow_up_right_icon} = useIcons()

defineProps({
    image: {
        type: String,
        default: ""
    },

    name: {
        type: String,
        default: ""
    },
    role: {
        type: String,
        default: ""
    },

    email: {
        type: String,
        default: ""
    },
    number: {
        type: String,
        default: ""
    },
    link: {
        type: String,
        default: ""
    },
    message: {
        type: String,
        default: ""
    }
})
</script>

<template>
    <Block class="flex items-center gap-8 w-full p-8 border-4 border-white bg-gradient-to-br from-white via-neutral-50 to-zinc-300">
        <img :src="image" :alt="name" class="size-32 object-cover shrink-0 rounded-full border-4 border-white shadow-xl"/>
        
        <div class="flex flex-col gap-1">
            <h2 name="navn">
                {{ name }}
            </h2>

            <em name="rolle" class="font-title">
                {{ role }}
            </em>

            <div class="flex items-center gap-2">
                <FontAwesomeIcon :icon="[envelope_icon.type, envelope_icon.name]" :aria-labelledby="envelope_icon.alt" class="text-alf-blue" />

                <Button name="epost" :is-button="false" :text="email" :href="useEmailAddress(email)" :aria-label="`Skrev til eposten ${email}`" class="transition hover:text-alf-blue"  />

                <Button :icon_name="link_icon.name" :icon_type="link_icon.type" aria-label="Kopier epost adressen" class="hidden md:block hover:text-alf-blue/50 text-alf-blue" />
            </div>


            <div class="flex items-center gap-2">
                <template v-if="number">
                    <FontAwesomeIcon :icon="[phone_icon.type, phone_icon.name]" :aria-labelledby="phone_icon.alt" class="text-alf-blue" />

                    <Button name="telefon nummer" :is-button="false" :text="showPhoneNumber(number)" :href="usePhoneNumber(number)" :aria-label="`Ring nummeret ${number}`" class="tabular-nums transition hover:text-alf-blue"/>

                    <Button :icon_name="link_icon.name" :icon_type="link_icon.type" aria-label="Kopier telefon nummeret" class="hidden md:block hover:text-alf-blue/50 text-alf-blue" />
                </template>

                <template v-else>
                    <FontAwesomeIcon :icon="[arrow_up_right_icon.type, arrow_up_right_icon.name]" :aria-labelledby="arrow_up_right_icon.alt" class="text-alf-blue" />

                    <Button name="andre lenker" :is-button="false" :text="message" :href="link" :aria-label="`Besøk siden ${link}`" class="hover:text-alf-blue line-clamp-1"/>
                    
                    <Button :icon_name="link_icon.name" :icon_type="link_icon.type" aria-label="Kopier lenken" class="hidden md:block hover:text-alf-blue/50 text-alf-blue" />
                </template>
            </div>
        </div>
    </Block>
</template>