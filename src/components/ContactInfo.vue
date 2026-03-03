<script setup>
import BusinessCard from '@/components/BusinessCard.vue';
import ContactInfoContent from '@/html/ContactInfoContent.vue';
import Tom from "@/assets/images/selfies/TomSunde.jpg"
import Anna from "@/assets/images/selfies/AnnaTheodorsen.jpg"
import Norbert from "@/assets/images/selfies/NorbertPap.jpg"
import Logo from '@/components/Logo.vue';

import { useContacts } from '@/compostables/contact_info';

const { course_contacts, website_contacts, source_code } = useContacts()

defineProps({
    isCourseContact: {
        type: Boolean,
        default: true,
    },
})

/*
Jeg er for dum til dette T_T

<div v-for="work in contact.worked_on">
    <div v-if="$route.name.toString() == work" class="flex gap-8"> 
        ?????????????????????
    </div>
</div>
*/
</script>


<template>
    <div v-if="isCourseContact" class="flex flex-col gap-8 mx-auto w-full">
        <h1 id="kontakt">
            Ta Kontakt
        </h1>

        <div class="grid gap-8 lg:grid-cols-2 lg:grid-rows-2 lg:flex-row">
            <BusinessCard v-for="contact in course_contacts" :contact />

            <div class="blank w-full min-h-64 p-8 bg-green-400 lg:col-start-2 lg:row-start-1 lg:row-span-2">
                <div>
                    <h2>
                        LEAFLET
                    </h2>
                </div>
            </div>
        </div>

        <ContactInfoContent />
    </div>



    <div v-else class="mx-auto max-w-lg">
        <h2 class="mb-8 text-center selection:text-neutral-50 dark:text-neutral-50">
            Utviklet av:
        </h2>

        <BusinessCard v-for="contact in website_contacts" :contact />
    </div>


    
    <div class="flex items-center flex-col gap-8 p-8">
        <h1 class="dark:invert">
            Ta Kontakt
        </h1>

        <div class="flex flex-col lg:grid grid-cols-4 gap-4 not-md:w-full">
            <div class="col-span-2 
            bg-neutral-50 dark:bg-zinc-800 dark:text-neutral-50 dark:inset-ring-1 inset-ring-alf-blue/50
            min-w-3xs max-w-md w-full p-4 flex flex-col gap-4 md:gap-8 aspect-card
            rounded-2xl not-dark:shadow-2xl">
                <div class="flex items-center gap-2">
                    <Logo class="not-dark:invert h-4" />

                    <h3>
                        Utviklerkurs
                    </h3>
                </div>


                <div class="flex h-full not-md:flex-col gap-4 justify-center md:px-4">
                    <KeepAlive>
                        <img :src="Anna" class="hidden md:block size-32 object-center object-cover rounded-full"/>
                    </KeepAlive>

                    <div class="flex flex-col gap-4 md:gap-4 not-md:text-center w-full">
                        <div>
                            <h3 class="border-b-2 border-neutral-500">
                                Anna Garmann Theodorsen
                            </h3>

                            <p class="emphasis">
                                Fagleder AFT
                            </p>
                        </div>
                       

                        <div class="flex md:flex-col gap-2">
                            <!-- <template class="flex items-center gap-2">
                                <Icon :id="5" />

                                <a name="epost" target="_blank">
                                    test@gamil.com
                                </a>

                                <div class="hidden md:block">
                                    <Icon :id="7" class="text-alf-blue hover:text-alf-blue/33 hover:cursor-pointer" />
                                </div>
                            </template>

                            <template class="flex items-center gap-2">
                                <Icon :id="4" />

                                <a name="telefon nummer">
                                    123456789
                                </a>

                                <div class="hidden md:block">
                                    <Icon :id="7" class="text-alf-blue hover:text-alf-blue/33 hover:cursor-pointer" />
                                </div>
                            </template> -->

                            <div class="w-full items-center bg-neutral-200 dark:bg-neutral-700 rounded-full p-1 flex justify-center gap-1">
                                <Icon :id="5" />
                                Email
                            </div>
                            <div class="w-full items-center bg-neutral-200 dark:bg-neutral-700 rounded-full p-1 flex justify-center gap-1">
                                <Icon :id="4" />
                                Ring
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="flex not-md:flex-col gap-4">
            <ContactInfoContent class="dark:invert" />
            <div class="bg-green-500 h-96 w-full p-8">
                e
            </div>
        </div>
    </div>
</template>