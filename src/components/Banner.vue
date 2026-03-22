<script setup>
// import Quote from '@/components/Quote.vue';
import CourseInfo from '@/components/CourseInfo.vue';
import Work from '@/assets/images/photos/AlfKontor.webp'
</script>


<template>
    <div class="banner">
        <div v-if="true" class="h-160">
            <KeepAlive>
                <img fetchpriority="high" :src="Work" aria-label="utenfor alf hovedkontor" class="object-cover not-md:object-right size-full shrink-0" />
            </KeepAlive>
            

            <div class="absolute inset-y-0 flex flex-col items-center justify-center w-full gap-8 p-8">
                <div class="flex flex-col gap-2 img-text text-center">
                    <h1 class="text-3xl sm:text-4xl xl:text-5xl font-code">
                        ALF Utviklerkurs
                    </h1>

                    <h2 class="text-alf-blue font-code text-xl sm:text-xl emphasis">
                        Tjenester av høy kvalitet, levert med profesjonalitet og flid.
                    </h2>
                    
                    <p>
                        Et intensivkurs i nettside- og programutvikling med mål om å gi deltakerne en god innføring i prinsippene for utvikling av strukturerte, kreative og velfungerende løsninger.
                    </p>
                </div>
                
                <CourseInfo />
            </div>
        </div>

        <div v-else>

        </div>
    </div>
</template>