<script setup>
import { usePhoneNumber, showPhoneNumber, useEmailAddress } from '@/compostables/card_info';
import Card from '@/components/blocking/Card.vue';
import Profile from '@/components/blocking/Profile.vue';

defineProps({
    contact: {
        type: Object,
        default: {
            name: 'Navn',
            id: '',
        }
    },

    isUser: {
        type: Boolean,
        default: false,
    }
})


/* <Button :state="2" :look="5" :text="value == 1 ? ` ${contact.infos[0]}` : showPhoneNumber(contact.infos[1])" :href="value == 1 ? useEmailAddress(contact.infos[0]) : usePhoneNumber(contact.infos[1])" :aria-label="`${value == 1 ? `Skriv til eposten ${contact.infos[0]}` : `Ring nummeret ${contact.infos[1]}`}`" class="line-clamp-1" /> */


/* 
The workings of an absolute madman
    |
    |
    V
*/
</script>


<template>  
    <Card :org="contact.org">
        <div class="flex gap-2 @min-sm:gap-4 items-center justify-center h-full @min-sm:p-2">
            <KeepAlive v-if="contact.image">
                <img :src="contact.image" :aria-label="`profilbilde av ${contact.name}`" class="hidden @min-2xs:block size-24 @min-sm:size-32 object-center object-cover rounded-full shrink-0"/>
            </KeepAlive>

            <Profile v-else />


            <div class="@max-sm:text-center flex flex-col h-full justify-center gap-2 @min-sm:gap-1 w-full">
                <div class="flex flex-col gap-1">
                    <p class="text-lg @min-sm:text-xl border-b-2 font-bold font-title border-neutral-500">
                        {{ contact.name }}
                    </p>

                    <p class="emphasis">
                        {{ contact.role }}
                    </p>
                </div>
                
                
                <div v-if="!isUser" class="flex @sm:flex-col justify-around gap-4 @sm:gap-1">
                    <div v-for="value in contact.infos.length" class="flex items-center gap-2 w-full">
                        <template v-if="contact.infos[value - 1]">
                            <Icon :id="7 - value" />

                            <a :href="value == 1 ? useEmailAddress(contact.infos[0]) : usePhoneNumber(contact.infos[1])" 
                            :aria-label="`${value == 1 ? `Skriv til eposten ${contact.infos[0]}` : `Ring nummeret ${contact.infos[1]}`}`" class="contact-link">
                                <p class="block @min-sm:hidden">
                                    {{ value == 1 ? 'Email' : 'Ring' }} 
                                </p>

                                <p class="hidden wrap-anywhere @min-sm:block">
                                    {{ value == 1 ? contact.infos[0] : showPhoneNumber(contact.infos[1]) }}
                                </p>
                            </a>
                        </template>

                        <template v-else>
                            <Icon :id="7" />

                            <a :href="contact.link" :aria-label="`Besøk siden ${contact.link}`" target="_blank" class="contact-link">
                                <p class="block @min-sm:hidden">
                                    Mer
                                </p>

                                <p class="hidden wrap-anywhere @min-sm:block">
                                    {{ contact.message }}
                                </p>
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