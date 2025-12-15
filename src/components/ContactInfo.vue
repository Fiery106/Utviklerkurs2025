<script setup>
import BusinessCard from '@/components/elements/BusinessCard.vue';
import Block from '@/components/elements/Block.vue';
import ContactInfoContent from '@/html/ContactInfoContent.vue';

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

            <Block class="w-full min-h-64 p-8 bg-green-400 lg:col-start-2 lg:row-start-1 lg:row-span-2">
                <div>
                    <h2>
                        LEAFLET
                    </h2>
                </div>
            </Block>
        </div>

        <ContactInfoContent />
    </div>



    <div v-else class="mx-auto max-w-lg">
        <h2 class="mb-8 text-center selection:text-neutral-50">
            Utviklet av:
        </h2>

        <BusinessCard v-for="contact in website_contacts" :contact />
    </div>
</template>