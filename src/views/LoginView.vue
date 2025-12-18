<script setup>
import { ref } from 'vue';
import Block from '@/components/elements/Block.vue';
import BusinessCard from '@/components/elements/BusinessCard.vue';

const warning = ref(false)
const tekst = "mangler passord & navn"
</script>


<template>
    <div class="flex flex-col items-center justify-center h-screen gap-8">
        <h1>
            Kursportalen
        </h1>

        <BusinessCard :is-user="true"></BusinessCard>

        <Block class="bg-neutral-50 w-fit max-w-lg p-8 mx-auto">
            <form class="flex flex-col gap-2 even:bg-alf-blue">
                <h2 v-if="warning" name="varsel" class="animate-pulse bg-gradient-to-r from-0% via-rose-500 to-100% ">
                    {{ tekst.toUpperCase() }}
                </h2>

                <label for="navn">
                    Navn
                </label>
                <input name="navn" type="text" placeholder="name" class="border mb-4"></input>

                <label for="passord">
                    Passord
                </label>
                <input name="passord" type="password" placeholder="pass" class="border mb-4"></input>

                <div class="flex flex-col mx-auto">
                    <button type="submit" class="bg-zinc-900 px-3 p-1 mx-auto w-fit mb-4">
                        Logg på
                    </button>

                    <router-link to="/register" class="highlight">
                        Ny bruker? Skaff deg en konto ->
                    </router-link>
                </div>
                
            </form>
        </Block>
    </div>
</template>