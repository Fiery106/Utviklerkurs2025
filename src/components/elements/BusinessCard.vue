<script setup>
import Block from '@/components/elements/Block.vue';

import { useIcons } from '@/compostables/icons';
import { usePhoneNumber, showPhoneNumber, useEmailAddress } from '@/compostables/functions';

const {envelope_icon, phone_icon, link_icon, arrow_up_right_icon} = useIcons()

defineProps({
    contact: Object
})
</script>

<template>
    <Block class="flex items-center gap-8 w-full p-8 border-4 border-white bg-gradient-to-br from-white via-neutral-50 to-zinc-300">
        <img :src="contact.image" :alt="contact.name" class="size-32 object-cover shrink-0 rounded-full border-4 border-white shadow-xl"/>
        
        <div class="flex flex-col gap-1">
            <h2 name="navn">
                {{ contact.name }}
            </h2>

            <p name="rolle" class="font-title -skew-x-12">
                {{ contact.role }}
            </p>

            <template class="flex items-center gap-2">
                <FontAwesomeIcon :icon="[envelope_icon.type, envelope_icon.name]" :aria-labelledby="envelope_icon.alt" class="text-alf-blue" />

                <Button name="epost" :is-button="false" :text="contact.email" :href="useEmailAddress(contact.email)" :aria-label="`Skrev til eposten ${contact.email}`" class="transition hover:text-alf-blue hover:selection:text-neutral-50"  />

                <Button :icon_name="link_icon.name" :icon_type="link_icon.type" aria-label="Kopier epost adressen" class="hidden md:block hover:text-alf-blue/33 text-alf-blue" />
            </template>


            <div class="flex items-center gap-2">
                <template v-if="contact.number">
                    <FontAwesomeIcon :icon="[phone_icon.type, phone_icon.name]" :aria-labelledby="phone_icon.alt" class="text-alf-blue" />

                    <Button name="telefon nummer" :is-button="false" :text="showPhoneNumber(contact.number)" :href="usePhoneNumber(contact.number)" :aria-label="`Ring nummeret ${contact.number}`" class="tabular-nums transition hover:text-alf-blue hover:selection:text-neutral-50"/>

                    <Button :icon_name="link_icon.name" :icon_type="link_icon.type" aria-label="Kopier telefon nummeret" class="hidden md:block hover:text-alf-blue/33 text-alf-blue" />
                </template>

                <template v-else>
                    <FontAwesomeIcon :icon="[arrow_up_right_icon.type, arrow_up_right_icon.name]" :aria-labelledby="arrow_up_right_icon.alt" class="text-alf-blue" />

                    <Button name="andre lenker" :is-button="false" text="Alle prosjekter" :href="contact.link" :aria-label="`Besøk siden ${contact.link}`" class="hover:text-alf-blue hover:selection:text-neutral-50 line-clamp-1"/>
                    
                    <Button :icon_name="link_icon.name" :icon_type="link_icon.type" aria-label="Kopier lenken" class="hidden md:block hover:text-alf-blue/33 text-alf-blue" />
                </template>
            </div>
        </div>
    </Block>
</template>