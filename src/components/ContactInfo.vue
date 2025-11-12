<script setup>
import Card from '@/components/elements/Card.vue';
import Block from '@/components/elements/Block.vue';
import Image from '@/components/elements/Image.vue';
import Button from '@/components/elements/Button.vue';
import ContactInfoContent from '@/components/text_content/ContactInfoContent.vue';

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
    <div v-if="isCourseContact" class="flex flex-col gap-8 mx-auto w-full **:mx-0">
        <h1 id="kontakt">
            Ta Kontakt
        </h1>

        <div class="grid gap-8 lg:grid-cols-2 lg:grid-rows-2 lg:flex-row">
            <Card v-for="contact in course_contacts" class="lg:col-start-1">
                <Image :src="contact.image" :alt="contact.name" fetchpriority="high" class="size-32 object-cover rounded-full border-4 border-white shadow-xl"/>
                <div class="flex flex-col gap-1">
                    <h2>
                        {{contact.name}}
                    </h2>
                    <em class="font-title">
                        {{contact.role}}
                    </em>
                    <div class="flex items-center gap-2">
                        <Image :is-icon="true" :icon_name="envelope_icon.name" :icon_type="envelope_icon.type"/>
                        <Button :is-button="false" :text="contact.email" :href="useEmailAddress(contact.email)" class="hover:text-alf-blue" />
                        <Button :icon_name="link_icon.name" :icon_type="link_icon.type" />
                    </div>
                    <div class="flex items-center gap-2">
                        <Image :is-icon="true" :icon_name="phone_icon.name" :icon_type="phone_icon.type"/>
                        <Button :is-button="false" :text="showPhoneNumber(contact.number)" :href="usePhoneNumber(contact.number)" class="tabular-nums hover:text-alf-blue"/>
                        <Button :icon_name="link_icon.name" :icon_type="link_icon.type" />
                    </div>
                </div>
            </Card>

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



    <div v-else class="mx-auto max-w-lg **:mx-0">
        <h2 class="mb-8 text-center">
            Denne siden ble utviklet av:
        </h2>
        <Card v-for="contact in website_contacts">
            <Image :src="contact.image" :alt="contact.name" fetchpriority="high" class="size-32 object-cover rounded-full border-4 border-white shadow-xl"/>
            <div class="flex flex-col gap-1">
                <h2>
                    {{contact.name}}
                </h2>
                <em>
                    {{contact.role}}
                </em>
                <div class="flex items-center gap-2">
                    <Image :is-icon="true" :icon_name="envelope_icon.name" :icon_type="envelope_icon.type" />
                    <Button :is-button="false" :text="contact.email" :href="useEmailAddress(contact.email)" class="hover:text-alf-blue" />
                    <Button :icon_name="link_icon.name" :icon_type="link_icon.type" />
                </div>
                <div class="flex items-center gap-2">
                    <Image :is-icon="true" :icon_name="arrow_up_right_icon.name" :icon_type="arrow_up_right_icon.type" />
                    <Button :is-button="false" text="Alle prosjektene mine" :href="contact.projects" class="hover:text-alf-blue" />
                    <Button :icon_name="link_icon.name" :icon_type="link_icon.type" />
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