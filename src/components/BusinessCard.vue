<script setup>
import { usePhoneNumber, showPhoneNumber, makePhoneNumber, useEmailAddress } from '@/compostables/card_info';
import Card from '@/components/blocking/Card.vue';
import Profile from '@/components/blocking/Profile.vue';
import CopyToClipboard from './buttons/CopyToClipboard.vue';

defineProps({
    contact: {
        type: Object
    },

    isUser: {
        type: Boolean,
        default: false,
    }
})

/* 
The workings of an absolute madman
    |
    |
    V
*/
</script>


<template>  
    <Card :org="contact.org" :aria-label="`Business kort av ${contact.name}`">
        <div class="business-card">
            <KeepAlive v-if="contact.image">
                <img :src="contact.image" :srcset="contact.image" alt="" class="business-img"/>
            </KeepAlive>

            <Profile v-else />


            <div class="business-info">
                <div class="flex flex-col gap-1">
                    <span class="text-lg @min-sm:text-xl font-bold font-title">
                        {{ contact.name }}
                    </span>

                    <span class="divider-y"></span>

                    <span class="emphasis">
                        {{ contact.role }}
                    </span>
                </div>
                
                
                <div v-if="!isUser" class="business-links">
                    <div v-for="value in contact.infos.length" class="flex items-center gap-2 w-full">
                        <template v-if="contact.infos[value - 1]">
                            <Icon :id="7 - value" />

                            <a :href="value == 1 ? useEmailAddress(contact.infos[0]) : usePhoneNumber(contact.infos[1])" 
                            :aria-label="`${value == 1 ? `Skriv til eposten ${contact.infos[0]}` : `Ring nummeret ${contact.infos[1]}`}`" class="contact-link">
                                <span class="block @min-sm:hidden">
                                    {{ value == 1 ? 'Epost' : 'Ring' }} 
                                </span>

                                <span class="hidden wrap-anywhere @min-sm:block">
                                    {{ value == 1 ? contact.infos[0] : showPhoneNumber(contact.infos[1]) }}
                                </span>
                            </a>

                            <CopyToClipboard :text="value == 1 ? contact.infos[0] : makePhoneNumber(contact.infos[1])" />
                        </template>


                        <template v-else>
                            <Icon :id="7" />

                            <a :href="contact.link" :aria-label="`Besøk siden ${contact.link}`" target="_blank" class="contact-link">
                                <span class="block @min-sm:hidden">
                                    Mer
                                </span>

                                <span class="hidden wrap-anywhere @min-sm:block">
                                    {{ contact.message }}
                                </span>
                            </a>
                        </template>
                    </div>
                </div>


                <div v-else>
                    <!-- Lamp oil, rope, bombs. You want it? It's yours my friend, as long as you have enough rubies. Sorry Link, I can't give credit. Come back when you're a little, mmmmmm- richer! -->
                </div>
            </div>
        </div>
    </Card>
</template>