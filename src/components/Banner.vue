<script setup>
// import Quote from '@/components/Quote.vue';
import Work from '@/assets/images/photos/AlfKontor.webp'
</script>


<template>
    <div class="banner">
        <div v-if="true" class="h-160">
            <KeepAlive>
                <img fetchpriority="high" :src="Work" aria-label="utenfor alf hovedkontor" class="object-cover not-md:object-right size-full shrink-0" />
            </KeepAlive>
            

            <div class="absolute inset-y-0 flex flex-col items-center justify-center w-full gap-8 p-8 text-center text-neutral-50">
                <div class="flex flex-col gap-2 bg-neutral-900/75 p-4">
                    <h1 class="text-3xl sm:text-4xl xl:text-6xl text-shadow-lg">
                        ALF Utviklerkurs
                    </h1>

                    <h2 class="text-alf-blue font-bold text-xl sm:text-2xl text-shadow-lg emphasis">
                        Tjenester av høy kvalitet, levert med profesjonalitet og flid.
                    </h2>
                    
                    <p class="text-shadow-lg max-w-4xl">
                        Et intensivkurs i nettside- og programutvikling med mål om å gi deltakerne en god innføring i prinsippene for utvikling av strukturerte, kreative og velfungerende løsninger.
                    </p>
                </div>
                

                <div class="flex flex-col gap-2 items-center bg-neutral-900/75 p-4">
                    <p>
                        KURS DETALJER
                    </p>
                    

                    <a href="#kontakt" class="basic-button button-alf-blue select-none">
                        Ta Kontakt
                    </a>
                </div>
            </div>
        </div>

        <div v-else>

        </div>
    </div>
</template>