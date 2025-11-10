<script setup>
import Card from '@/components/elements/Card.vue';
import Block from '@/components/elements/Block.vue';
import Image from '@/components/elements/Image.vue';
import Button from '@/components/elements/Button.vue';

import { useIcons } from '@/compostables/icons';
import { useContacts } from '@/compostables/contact_info';
import { usePhoneNumber, showPhoneNumber, useEmailAddress } from '@/compostables/functions';

const { course_contacts, website_contacts, source_code } = useContacts()
const { envelope_icon, phone_icon, arrow_up_right_icon, link_icon } = useIcons()

defineProps({
    isCourseContact: {
        type: Boolean,
        default: true,
    },
})

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
    <div v-if="isCourseContact" class="flex flex-col gap-8 w-full *:gap-8 **:mx-0">
        <h1 id="kontakt">
            Ta Kontakt
        </h1>

        <div class="flex flex-col lg:flex-row">
            <div class="flex flex-col w-full gap-8">
                <Card v-for="contact in course_contacts">
                    <Image :src="contact.image" :alt="contact.name" class="size-32 object-cover rounded-full border-4 border-white shadow-xl"/>
                    <div class="group">
                        <h2>
                            {{contact.name}}
                        </h2>
                        <em class="font-title">
                            {{contact.role}}
                        </em>
                        <div class="flex items-center gap-1">
                            <Image :is-icon="true" :icon_name="envelope_icon.name" :icon_type="envelope_icon.type"/>
                            <Button :is-button="false" :text="contact.email" :href="useEmailAddress(contact.email)" />
                            <Button :icon_name="arrow_up_right_icon.name" :icon_type="arrow_up_right_icon.type"/>
                        </div>
                        <div class="flex items-center gap-1">
                            <Image :is-icon="true" :icon_name="phone_icon.name" :icon_type="phone_icon.type"/>
                            <Button :is-button="false" :text="showPhoneNumber(contact.number)" :href="usePhoneNumber(contact.number)" class="tabular-nums"/>
                            <Button :icon_name="arrow_up_right_icon.name" :icon_type="arrow_up_right_icon.type"/>
                        </div>
                    </div>
                </Card>
            </div>

            <Block class="w-full min-h-64 p-8 max-h-full bg-green-400">
                <div>
                    <h2>
                        LEAFLET
                    </h2>
                </div>
            </Block>
        </div>

        <div> <!-- Trenges sin egen fil kanskje????????? -->
            <h2>
                Her finner du oss
            </h2>
            <p>
                Du kommer lettest hit ved å ta buss nr 12 fra sentrum. Du går da av på stoppet "Strømmen", som ligger i Møllendalsveien, like nedenfor oss.
            </p>
            <p>    
                Om du kommer med Bybane-1 kan du gå av på Danmarksplass, og spasere derfra. 
            </p>
        </div>

        <div>
            <p>
                For generelle hendvendelser og andre spørsmål, ta gjerne kontakt med hovedkontoret.
            </p>
            <p>
                Mer kontakt informasjon finner du her: alf.no/kontakt 
            </p>
        </div>
    </div>



    <div v-else class="max-w-lg">
        <h2 class="mb-8 text-center">
            Denne siden ble utviklet av:
        </h2>
        <Card v-for="contact in website_contacts">
            <Image :src="contact.image" :alt="contact.name" class="size-32 object-cover rounded-full border-4 border-white shadow-xl"/>
            <div class="group">
                <h2>
                    {{contact.name}}
                </h2>
                <em class="font-title">
                    {{contact.role}}
                </em>
                <div class="flex items-center gap-1">
                    <Image :is-icon="true" :icon_name="envelope_icon.name" :icon_type="envelope_icon.type"/>
                    <Button :is-button="false" :text="contact.email" :href="useEmailAddress(contact.email)"/>
                    <Button :icon_name="arrow_up_right_icon.name" :icon_type="arrow_up_right_icon.type"/>
                </div>
                <div class="flex items-center gap-1">
                    <Image :is-icon="true" :icon_name="link_icon.name" :icon_type="link_icon.type"/>
                    <Button :is-button="false" text="Alle prosjektene mine" :href="contact.projects"/>
                    <Button :icon_name="arrow_up_right_icon.name" :icon_type="arrow_up_right_icon.type" />
                </div>
            </div>
        </Card>
    </div>
</template>


<style scoped>
    @reference "@/styles.css";

    svg, button {
        @apply
        text-alf-blue;
    }
</style>