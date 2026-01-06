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
    <Block class="flex flex-col w-full max-w-md md:max-w-lg p-4 pb-8 gap-4 bg-gradient-to-br from-neutral-200 via-neutral-50 to-neutral-200">
        <div class="flex justify-between select-none">
            <div class="flex items-center gap-2">
                <Logo class="invert w-8"/>
                
                <h3>
                    Utviklerkurs
                </h3>
            </div>

            <div v-if="isUser && contact.image" class="flex flex-col items-center">
                <a id="blurtext" @click="unblurID()" aria-label="Gjør ID nummeret synlig" class="absolute z-1 no-underline hover:text-neutral-50">
                    Vis ID Nummeret
                </a>
                <h3 id="blur-id" class="blur">
                    ID #{{ !contact.id ? blur : contact.id }}
                </h3>
            </div>
        </div>


        <div name="content" :class="`${isUser ? `items-center` : `items-start`} grid grid-cols-3 px-4 justify-around gap-8`">
            <img v-if="contact.image" :src="contact.image" :alt="`${contact.image ? `Bilde av ${contact.name}` : ``}`" class="object-cover object-center rounded-full shrink-0 size-24 md:size-32 col-span-1 select-none" />

            <div v-else class="flex justify-center items-center bg-alf-blue rounded-full size-24 md:size-32">
                <FontAwesomeIcon :icon="[`fas`, `user`]" class="text-5xl md:text-7xl" />
            </div>

            
            <div class="grid col-span-2 gap-2">
                <div v-if="isUser" class="grid gap-2">
                    <input type="text" name="navn" placeholder="Navn" class="text-xl md:text-2xl font-bold border-b-2 placeholder:italic placeholder-shown:animate-pulse outline-none line-clamp-1"></input>

                    <input type="password" name="passord" placeholder="Passord" class="placeholder:italic placeholder-shown:animate-pulse outline-none"></input>

                    <a>Glemt passordet?</a>
                </div>


                <div v-else class="grid gap-1">
                    <h2 name="navn" class="wrap-anywhere border-b-2 line-clamp-1">
                        {{ contact.name }}
                    </h2>

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