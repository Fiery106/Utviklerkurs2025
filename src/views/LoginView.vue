<script setup>
import { ref } from 'vue';
import Block from '@/components/elements/Block.vue';

const warning = ref(true)
const tekst = "mangler passord & navn"
</script>


<template>
    <div class="flex flex-col justify-center h-screen">
        <Block class="bg-neutral-50 w-fit min-w-sm p-8 mx-auto">
            <form class="flex flex-col gap-2 even:bg-alf-blue">
                <div class="grid gap-2 text-center mb-4">
                    <h1>
                        Kursportalen
                    </h1>

                    <h2 v-if="warning" name="varsel" class="animate-pulse bg-gradient-to-r from-0% via-rose-500 to-100% ">
                        {{ tekst.toUpperCase() }}
                    </h2>
                </div>

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

                    <a class="text-alf-blue hover:underline selection:text-white">
                        Ny bruker? Skaff deg en konto ->
                    </a>
                </div>
                
            </form>
        </Block>
    </div>
</template>