<script setup>
import BusinessCard from '@/components/BusinessCard.vue';
import ContactInfoContent from '@/html/ContactInfoContent.vue';
import Logo from '@/components/Logo.vue';

import { useContacts } from '@/compostables/contact_info';

const { contacts } = useContacts()

/*
Jeg er for dum for dette T_T

<div v-for="work in contact.worked_on">
    <div v-if="$route.name.toString() == work" class="flex gap-8"> 
        ?????????????????????
    </div>
</div>
*/
</script>


<template>
    <div class="flex flex-col gap-8 items-center p-8">
        <h1 class="wall-text text-3xl lg:text-4xl col-span-full text-center">
            Ta Kontakt
        </h1>

        <div class="flex flex-col lg:grid grid-cols-4 not-md:w-full items-center gap-8">
            <BusinessCard v-if="false" v-for="(contact, index) in contacts.length" :key="contact.id" :contact="contacts[index]" :class="`${contact == contacts.length && contact % 2 ? 'col-start-2' : ''}`" />

            <div v-if="true" v-for="(contact, index) in contacts.length" :key="contact.id" :class="`card ${contact == contacts.length && contact % 2 ? 'col-start-2' : ''}`">
                <div class="flex max-3xs:hidden items-center gap-2">
                    <Logo class="not-dark:invert h-4" />

                    <h3 class="max-xs:text-lg select-none">
                        Utviklerkurs
                    </h3>
                </div>


                <div class="flex gap-4 items-center justify-center h-full @min-sm:p-2">
                    <KeepAlive v-if="contacts[index].image">
                        <img :src="contacts[index].image" class="hidden select-none @min-sm:block size-32 object-center object-cover rounded-full shrink-0"/>
                    </KeepAlive>

                    <div v-else class="justify-center items-center bg-alf-blue dark:bg-cyan-800 hidden select-none @min-sm:flex size-32 rounded-full shrink-0">
                        <Icon class="text-7xl" />
                    </div>


                    <div class="@max-sm:text-center flex flex-col justify-between min-xs:gap-8 gap-4 @min-sm:gap-1 w-full">
                        <div class="flex flex-col gap-1">
                            <h3 class="text-lg @min-3xs:text-xl border-b-2 font-bold border-neutral-500">
                                {{ contacts[index].name }}
                            </h3>

                            <p class="emphasis">
                                {{ contacts[index].role }}
                            </p>
                        </div>
                        

                        <div v-if="false" class="flex @sm:flex-col justify-around gap-4 @sm:gap-1">
                            <div v-for="info in contact.infos" class="flex items-center gap-2 w-full">
                                <template v-if="contact.infos[info]"> <!--telefonnummer-->
                                    <Icon :id="6 - info" />

                                    <a href="" @click.prevent class="contact-link">
                                        <p class="block @min-sm:hidden">
                                            Email 
                                        </p>

                                        <p class="hidden wrap-anywhere @min-sm:block">
                                            {{ contacts.email }}
                                        </p>
                                    </a>
                                </template>

                                <template v-else>
                                    <Icon :id="6" />

                                    <a href="" target="_blank" class="contact-link">
                                        <p class="block @min-sm:hidden">
                                            Lenke
                                        </p>

                                        <p class="hidden wrap-anywhere @min-sm:block">
                                            {{ contacts.message }}
                                        </p>
                                    </a>
                                </template>
                                <Icon :id="6 - info" />

                                <a href="" @click.prevent class="contact-link">
                                    <p class="block @min-sm:hidden">
                                        Email
                                    </p>

                                    <p class="hidden wrap-anywhere @min-sm:block">
                                        {{ contacts.email }}
                                    </p>
                                </a>
                            </div>

                            <div v-if="contacts.number" class="flex items-center gap-2 w-full">
                                <Icon :id="4" />

                                <a href="" @click.prevent class="contact-link">
                                    <p class="block @min-sm:hidden">
                                        Ring 
                                    </p>

                                    <p class="hidden wrap-anywhere @min-sm:block">
                                        {{ contacts.number }}
                                    </p>
                                </a>
                            </div>

                            <div v-else class="flex items-center gap-2 w-full">
                                <Icon :id="6" />

                                <a href="" target="_blank" class="contact-link">
                                    <p class="block @min-sm:hidden">
                                        Lenke
                                    </p>

                                    <p class="hidden wrap-anywhere @min-sm:block">
                                        {{ contacts.message }}
                                    </p>
                                </a>
                            </div>
                        </div>

                        <div v-else>

                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div class="flex not-md:flex-col items-center gap-8">
            <ContactInfoContent />
            
            <div class="bg-green-500 aspect-card w-full p-8">
                <!-- LEAFLET -->
            </div>
        </div>
    </div>
</template>