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


    <div class="flex flex-col gap-8 items-center p-8">
        <h1 class="wall-text text-3xl lg:text-4xl col-span-full text-center">
            Ta Kontakt
        </h1>

        <div class="flex flex-col lg:grid grid-cols-4 not-md:w-full items-center gap-8">
            <div v-for="value in 2" class="card">
                <div class="flex max-3xs:hidden items-center gap-2 ">
                    <Logo class="not-dark:invert h-4" />

                    <h3 class="max-xs:text-lg select-none">
                        Utviklerkurs
                    </h3>
                </div>


                <div class="flex gap-8 items-center justify-center h-full @min-sm:p-4">
                    <KeepAlive v-if="true">
                        <img :src="Anna" class="hidden select-none @min-sm:block size-32 object-center object-cover rounded-full"/>
                    </KeepAlive>

                    <div v-else class="justify-center items-center bg-alf-blue dark:bg-cyan-800 hidden select-none @min-sm:flex size-32 rounded-full shrink-0">
                        <Icon class="text-7xl" />
                    </div>


                    <div class="@max-sm:text-center flex flex-col justify-between min-xs:gap-8 gap-4 @min-sm:gap-1 w-full">
                        <div class="flex flex-col gap-1">
                            <h3 class="text-lg @min-3xs:text-xl border-b-2 font-bold border-neutral-500">
                                Anna Garmann Theodorsen
                            </h3>

                            <p class="emphasis">
                                Fagleder AFT
                            </p>
                        </div>
                        

                        <div v-if="true" class="flex @sm:flex-col justify-around gap-4 @sm:gap-1">
                            <!-- <div v-for="value in 2"></div> -->

                            <div class="flex items-center gap-2 w-full">
                                <Icon :id="5" />

                                <a href="" target="_blank" class="w-full not-sm:no-underline line-clamp-1 bg-neutral-200 hover:bg-neutral-300 dark:bg-neutral-700 dark:hover:bg-neutral-600 rounded-full p-1 px-3">
                                    <p class="block @min-sm:hidden">
                                        Email
                                    </p>

                                    <p class="hidden @min-sm:block">
                                        anna@alf.no
                                    </p>
                                </a>
                            </div>

                            <div class="flex items-center gap-2 w-full">
                                <Icon :id="4" />

                                <a href="" target="_blank" class="w-full not-sm:no-underline line-clamp-1 bg-neutral-200 hover:bg-neutral-300 dark:bg-neutral-700 dark:hover:bg-neutral-600 rounded-full p-1 px-3">
                                    <p class="block @min-sm:hidden">
                                        Ring 
                                    </p>

                                    <p class="hidden @min-sm:block">
                                        +47 91 56 85 51
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