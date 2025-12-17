<script setup>
import Block from '@/components/elements/Block.vue';

import { useIcons } from '@/compostables/icons';
import { usePhoneNumber, showPhoneNumber, useEmailAddress } from '@/compostables/functions';
import Logo from '@/components/elements/Logo.vue';

const {envelope_icon, phone_icon, link_icon, arrow_up_right_icon} = useIcons()
const blur = Math.floor(Math.random() * 999999) + `-` +  Math.floor(Math.random() * 99999)

defineProps({
    contact: Object,

    isUser: {
        type: Boolean,
        default: false,
    }
})
</script>


<template>
    <Block class="bg-gradient-to-br from-neutral-200 via-neutral-50 to-neutral-200 flex flex-col gap-4 max-w-lg p-4 hover:scale-110 ease-out transition pb-8">
        <div class="flex justify-between">
            <h3 class="flex items-center gap-2">
                <Logo class="invert select-none w-12"/>
                Utviklerkurs
            </h3>
            <h3 v-if="isUser" class="blur select-none hover:cursor-pointer">
                ID #{{ blur }}
            </h3>
        </div>


        <div class="grid grid-cols-3 items-center px-4 justify-around gap-8">
            <img :src="contact.image" :alt="`Bilde av ${contact.name}`" class="object-cover object-center rounded-full shrink-0 size-32 col-span-1 bg-alf-blue border-alf-blue hover:cursor-pointer select-none" />
            <div class="flex flex-col col-span-2 gap-2">
                <h2 class="wrap-anywhere border-b-2">
                    {{ contact.name }}
                </h2>


                <div v-if="isUser">
                    <p class="font-title ">
                    ********
                    </p>
                </div>


                <div v-else class="grid gap-1">
                    <p class="font-title -skew-x-12">
                        {{ contact.role }}
                    </p>
                    
                    <template class="flex items-center gap-2">
                        <FontAwesomeIcon :icon="[envelope_icon.type, envelope_icon.name]" :aria-labelledby="envelope_icon.alt" class="text-alf-blue" />

                        <a name="epost" :href="useEmailAddress(contact.email)" :aria-label="`Skrev til eposten ${contact.email}`">
                            {{ contact.email }}
                        </a>

                        <div class="hidden md:block">
                            <FontAwesomeIcon :icon="[link_icon.type, link_icon.name]" :aria-labelledby="link_icon.alt" class="text-alf-blue hover:text-alf-blue/33 hover:cursor-pointer" />
                        </div>
                    </template>


                    <div v-if="contact.number" class="flex items-center gap-2">
                        <FontAwesomeIcon :icon="[phone_icon.type, phone_icon.name]" :aria-labelledby="phone_icon.alt" class="text-alf-blue" />

                        <a name="telefon nummer" :href="usePhoneNumber(contact.number)" :aria-label="`Ring nummeret ${contact.number}`">
                            text goes here
                        </a>

                        <FontAwesomeIcon :icon="[link_icon.type, link_icon.name]" :aria-labelledby="link_icon.alt" class="text-alf-blue hover:text-alf-blue/33 hover:cursor-pointer" />
                    </div>

                    <div v-else class="flex items-center gap-2">
                        <FontAwesomeIcon :icon="[arrow_up_right_icon.type, arrow_up_right_icon.name]" :aria-labelledby="arrow_up_right_icon.alt" class="text-alf-blue" />

                        <a name="andre lenker" :href="contact.link" :aria-label="`Besøk siden ${contact.link}`">
                            {{ contact.message }}
                        </a>

                        <FontAwesomeIcon :icon="[link_icon.type, link_icon.name]" :aria-labelledby="link_icon.alt" class="text-alf-blue hover:text-alf-blue/33 hover:cursor-pointer" />
                    </div>
                </div>
            </div>
        </div>
    </Block>
</template>


<style scoped>
    @reference "@/styles.css";



    a {
        @apply
        underline transition tabular-nums hover:text-alf-blue hover:selection:text-neutral-50 line-clamp-1;
    }

    button {
        @apply
        hidden md:block hover:text-alf-blue/33 text-alf-blue;
    }
</style>