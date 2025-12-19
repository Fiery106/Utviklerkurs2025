<script setup>
import { ref } from 'vue';
import Block from '@/components/elements/Block.vue';
import BusinessCard from '@/components/elements/BusinessCard.vue';

const warning = ref(false)
const tekst = "mangler passord & navn"
</script>


<template>
    <div class="flex flex-col items-center justify-center h-screen gap-8">
        <div class="grid gap-4 text-center">
            <h1>
                Kursportalen
            </h1>

            <h2 v-if="warning" name="varsel" class="w-fit px-16 animate-pulse bg-gradient-to-r from-0% via-rose-500 to-100% text-neutral-50 rounded-full">
                {{ tekst.toUpperCase() }}
            </h2>
        </div>

        
        <BusinessCard :is-user="true"></BusinessCard>

        <div class="flex flex-col mx-auto">
            <button type="submit" class="bg-zinc-900 px-3 p-1 mx-auto w-fit mb-4">
                Sjekk inn!
            </button>

            <router-link to="/register" >
                Ny bruker? Skaff deg en konto ->
            </router-link>
        </div>
<!--
        <Block class="bg-neutral-50 w-full max-w-md md:max-w-lg p-8 mx-auto">
            <form class="flex flex-col gap-2 even:bg-alf-blue">

                <label for="navn">
                    Navn
                </label>
                <input name="navn" type="text" placeholder="navn" class="border mb-4 rounded-lg placeholder-alf-blue text-center"></input>

                <label for="passord">
                    Passord
                </label>
                <input name="passord" type="password" placeholder="passord" class="border mb-4 rounded-lg placeholder-alf-blue text-center"></input>

                <div class="flex flex-col mx-auto">
                    <button type="submit" class="bg-zinc-900 px-3 p-1 mx-auto w-fit mb-4">
                        Sjekk inn!
                    </button>

                    <router-link to="/register" class="highlight">
                        Ny bruker? Skaff deg en konto ->
                    </router-link>
                </div>
            </form>
        </Block>
            -->
    </div> 

</template>