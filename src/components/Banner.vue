<script setup>
// import Quote from '@/components/Quote.vue';
import Bnuuy from '@/assets/images/ref/Bnuuy_1.png'
</script>


<template>
    <div class="relative h-120 banner select-none">
        <img :src="Bnuuy" class="object-cover size-full shrink-0" />

        <div class="absolute inset-y-0 flex flex-col items-center justify-center w-full gap-8 p-8 text-center text-neutral-50">
            <div class="flex flex-col gap-2">
                <h1 class="text-3xl sm:text-4xl xl:text-6xl text-shadow-lg">
                    ALF Utviklerkurs
                </h1>

                <h2 class="text-alf-blue font-bold text-xl sm:text-2xl text-shadow-lg emphasis">
                    Tjenester av høy kvalitet, levert med profesjonalitet og flid.
                </h2>
                
                <p class="text-shadow-lg">
                    Et intensivkurs i nettside- og programutvikling med mål om å gi deltakerne en god innføring i prinsippene for utvikling av strukturerte, kreative og velfungerende løsninger.
                </p>
            </div>
            

            <div>
                KURS DETALJER
            </div>

            <a href="#kontakt">
                Ta Kontakt
            </a>
        </div>
    </div>
</template>