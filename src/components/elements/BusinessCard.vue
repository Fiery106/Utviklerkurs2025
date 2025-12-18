<script setup>
import Block from '@/components/elements/Block.vue';

import { useIcons } from '@/compostables/icons';
import { usePhoneNumber, showPhoneNumber, useEmailAddress } from '@/compostables/functions';
import Logo from '@/components/elements/Logo.vue';

const {envelope_icon, phone_icon, link_icon, arrow_up_right_icon} = useIcons()
//Vi skjuler ekte id-en av brukeren ved å bruke en helt tilfeldig rekkefølge av tall
const blur = Math.floor(Math.random() * 999999) + `-` +  Math.floor(Math.random() * 99999) 

defineProps({
    contact: {
        type: Object,
        default: {
            image: "",
            name: "Navn",
            password: "Passord",
            id: "",
            role: "",
            email: "",
            number: "",
            link: "",
            message: "",
        }
    },

    isUser: {
        type: Boolean,
        default: false,
    }
})

function unblurID() { //PRØVE FUNKSJON
    let blurredText = document.getElementById("blurtext")
    let blurredID = document.getElementById("blur-id")
    blurredID.classList.toggle("blur")
    blurredText.classList.toggle("hidden")
}


/* 
The workings of an absolute madman (that's me!)
    |
    |
    V
*/
</script>


<template>
    <Block class="flex flex-col max-w-lg p-4 pb-8 gap-4 bg-gradient-to-br from-neutral-200 via-neutral-50 to-neutral-200 md:hover:scale-110 ease-out transition">
        <div class="flex justify-between">
            <div class="flex items-center gap-2">
                <Logo class="invert select-none w-12"/>
                
                <h3>
                    Utviklerkurs
                </h3>
            </div>

            <div v-if="isUser && contact.image" class="select-none flex flex-col items-center">
                <a id="blurtext" @click="unblurID()" aria-label="Gjør ID nummeret synlig" class="absolute z-1 no-underline hover:text-neutral-50">
                    Vis ID Nummeret
                </a>
                <h3 v-if="isUser" id="blur-id" class="blur">
                    ID #{{ !contact.id ? blur : contact.id }}
                </h3>
            </div>
        </div>


        <div name="content" class="grid grid-cols-3 items-center px-4 justify-around gap-8">
            <img v-if="contact.image" :src="contact.image" :alt="`${contact.image ? `Bilde av ${contact.name}` : ``}`" class="object-cover object-center rounded-full shrink-0 size-24 md:size-32 col-span-1 select-none" />

            <div v-else class="flex justify-center items-center bg-alf-blue rounded-full size-24 md:size-32 hover:cursor-pointer hover:brightness-90">
                <FontAwesomeIcon :icon="[`fas`, `user`]" class="text-5xl md:text-7xl" />
            </div>

            
            <div class="flex flex-col col-span-2 gap-2">
                <h2 name="navn" :class="`${contact.name == `Navn` ? `emphasis` : ``} wrap-anywhere border-b-2`">
                    {{ contact.name }}
                </h2>

                <div v-if="isUser">
                    <p name="passord" :class="`${contact.name == `Navn` ? `emphasis` : ``} font-title`">
                        {{ contact.password }}
                    </p>
                </div>


                <div v-else class="grid gap-1">
                    <p name="rolle" class="emphasis">
                        {{ contact.role }}
                    </p>
                    
                    <template class="flex items-center gap-2">
                        <FontAwesomeIcon :icon="[envelope_icon.type, envelope_icon.name]" :aria-labelledby="envelope_icon.alt" class="text-alf-blue" />

                        <a name="epost" :href="useEmailAddress(contact.email)" :aria-label="`Skrev til eposten ${contact.email}`" class="link-hover">
                            {{ contact.email }}
                        </a>

                        <div class="hidden md:block">
                            <FontAwesomeIcon :icon="[link_icon.type, link_icon.name]" :aria-labelledby="link_icon.alt" class="text-alf-blue hover:text-alf-blue/33 hover:cursor-pointer" />
                        </div>
                    </template>


                    <div v-if="contact.number">
                        <template class="flex items-center gap-2">
                            <FontAwesomeIcon :icon="[phone_icon.type, phone_icon.name]" :aria-labelledby="phone_icon.alt" class="text-alf-blue" />

                            <a name="telefon nummer" :href="usePhoneNumber(contact.number)" :aria-label="`Ring nummeret ${contact.number}`" class="link-hover">
                                {{ showPhoneNumber(contact.number) }}
                            </a>

                            <div class="hidden md:block">
                                <FontAwesomeIcon :icon="[link_icon.type, link_icon.name]" :aria-labelledby="link_icon.alt" class="text-alf-blue hover:text-alf-blue/33 hover:cursor-pointer" />
                            </div>
                        </template>
                    </div>

                    <div v-else>
                        <template class="flex items-center gap-2">
                            <FontAwesomeIcon :icon="[arrow_up_right_icon.type, arrow_up_right_icon.name]" :aria-labelledby="arrow_up_right_icon.alt" class="text-alf-blue" />

                            <a name="andre lenker" :href="contact.link" target="_blank" :aria-label="`Besøk siden ${contact.link}`" class="link-hover">
                                {{ contact.message }}
                            </a>

                            <div class="hidden md:block">
                                <FontAwesomeIcon :icon="[link_icon.type, link_icon.name]" :aria-labelledby="link_icon.alt" class="text-alf-blue hover:text-alf-blue/33 hover:cursor-pointer" />
                            </div>
                        </template>
                    </div>
                </div>
            </div>
        </div>
    </Block>
</template>