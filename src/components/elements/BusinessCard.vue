<script setup>
import Block from '@/components/elements/Block.vue';

import { usePhoneNumber, showPhoneNumber, useEmailAddress } from '@/compostables/functions';
import Logo from '@/components/elements/Logo.vue';

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
    <form>
        <Block class="flex flex-col w-full max-w-md md:max-w-lg p-4 pb-8 gap-4 bg-radial-[at_0%_0%] from-69% from-neutral-50 to-neutral-300">
            <div class="flex justify-between select-none">
                <div class="flex items-center gap-2">
                    <Logo class="invert w-8"/>
                    
                    <h3>
                        Utviklerkurs
                    </h3>
                </div>

                <div v-if="false" class="flex flex-col items-center">
                    <a id="blurtext" @click="unblurID()" aria-label="Gjør ID nummeret synlig" class="absolute z-1 no-underline hover:text-neutral-50">
                        Vis ID Nummeret
                    </a>
                    <h3 id="blur-id" class="blur">
                        ID #{{ !contact.id ? blur : contact.id }}
                    </h3>
                </div>
            </div>


            <div name="content" :class="`${isUser ? `items-center` : `items-start`} grid grid-cols-3 mx-4 justify-around gap-8`">
                <KeepAlive v-if="contact.image">
                    <img :src="contact.image" :alt="`${contact.image ? `Bilde av ${contact.name}` : ``}`" class="object-cover object-center rounded-full shrink-0 size-24 md:size-32 col-span-1 select-none" />
                </KeepAlive>

                <div v-else class="flex justify-center items-center bg-alf-blue rounded-full size-24 md:size-32">
                    <Icon class="text-5xl md:text-7xl" />
                </div>

                
                <div class="grid col-span-2 gap-2">
                    <div v-if="isUser" class="grid gap-2">
                        <input type="text" name="navn" placeholder="Navn" class="text-xl md:text-2xl w-full font-bold border-b-2 placeholder:italic placeholder-shown:animate-pulse outline-none line-clamp-1"></input>

                        <input type="password" name="passord" placeholder="Passord" class="placeholder:italic placeholder-shown:animate-pulse outline-none"></input>

                        <div class="flex justify-between items-center">
                            <a class="hover:text-neutral-900/75">
                                Glemt passordet?
                            </a>

                            <div>
                                <label class="mx-1">
                                    Husk meg
                                </label>

                                <input name="huskermeg" type="checkbox" class="scale-125 checked:accent-alf-blue"></input>
                            </div>
                        </div>
                    </div>


                    <div v-else class="grid gap-1 text-left">
                        <h2 name="navn" class="wrap-anywhere border-b-2 line-clamp-1">
                            {{ contact.name }}
                        </h2>

                        <p name="rolle" class="emphasis">
                            {{ contact.role }}
                        </p>
                        
                        <template class="flex items-center gap-2">
                            <Icon :id="5" />

                            <a name="epost" :href="useEmailAddress(contact.email)" target="_blank" :aria-label="`Skrev til eposten ${contact.email}`" class="link-hover">
                                {{ contact.email }}
                            </a>

                            <div class="hidden md:block">
                                <Icon :id="7" class="text-alf-blue hover:text-alf-blue/33 hover:cursor-pointer" />
                            </div>
                        </template>


                        <div v-if="contact.number">
                            <template class="flex items-center gap-2">
                                <Icon :id="6" />

                                <a name="telefon nummer" :href="usePhoneNumber(contact.number)" :aria-label="`Ring nummeret ${contact.number}`" class="link-hover">
                                    {{ showPhoneNumber(contact.number) }}
                                </a>

                                <div class="hidden md:block">
                                    <Icon :id="7" class="text-alf-blue hover:text-alf-blue/33 hover:cursor-pointer" />
                                </div>
                            </template>
                        </div>

                        <div v-else>
                            <template class="flex items-center gap-2">
                                <Icon :id="6" class="text-alf-blue" />

                                <a name="andre lenker" :href="contact.link" target="_blank" :aria-label="`Besøk siden ${contact.link}`" class="link-hover">
                                    {{ contact.message }}
                                </a>

                                <div class="hidden md:block">
                                    <Icon :id="7" class="text-alf-blue hover:text-alf-blue/33 hover:cursor-pointer" />
                                </div>
                            </template>
                        </div>
                    </div>
                </div>
            </div>
        </Block>

        <div v-if="isUser" class="grid text-center pt-8 gap-4">
            <button type="submit" class="w-fit px-4 py-1 bg-neutral-900 hover:scale-125 hover:bg-neutral-900/90 active:scale-100 active:bg-neutral-900 transition ease-out mx-auto text-neutral-50">
                Sjekk Inn! <!-- Er det riktig å si dette på norsk??? -->
            </button>

            <router-link to="/kursportal" class="hover:text-neutral-900/75 mx-auto">
                Ny bruker? Skaff deg en konto ->
            </router-link>
        </div>
    </form>
</template>