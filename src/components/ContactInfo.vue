<script setup>
import BusinessCard from '@/components/BusinessCard.vue';
import ContactInfoContent from '@/text_content/ContactInfoContent.vue';
import Leaflet from '@/components/Leaflet.vue';

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
    <div id="kontakt" class="contact-info">
        <h1 class="wall-text text-3xl lg:text-4xl col-span-full text-center" aria-label="Ta kontakt med veilederne">
            Ta Kontakt
        </h1>

        <div class="flex flex-col lg:grid grid-cols-4 not-md:w-full items-center gap-8">
            <BusinessCard v-for="(contact, index) in contacts.length" :key="contact.id" :contact="contacts[index]" :class="`${index + 1 == contacts.length && index + 1 % 2 ? 'col-start-2' : ''} `" />
        </div>

        <div class="flex flex-col max-w-7xl gap-2">
            <ContactInfoContent />
            
            <Leaflet :full="false" />

            <Button :look="1" to="/kart" text="Vis hele kartet" class="button-black self-start z-1" />
        </div>
    </div>
</template>