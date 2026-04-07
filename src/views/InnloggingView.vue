<script setup>
import { ref } from 'vue';
import Card from '@/components/blocking/Card.vue';

const warning = ref(false)
const tekst = "mangler passord & navn"
</script>


<template>
    <div class="flex flex-col items-center justify-center h-screen gap-8">
        <div class="flex flex-col gap-4">
            <h1 class="wall-text text-center">
                Kursportalen
            </h1>

            <h2 v-if="warning" name="varsel" class="w-full text-center animate-pulse bg-gradient-to-r via-rose-500 text-neutral-50">
                {{ tekst.toUpperCase() }}
            </h2>

            

            <Card class="gap-8">
                <div class="flex justify-center md:justify-between items-center gap-8">
                    <div class="size-32 shrink-0 rounded-full hidden md:block bg-alf-blue">
                        
                    </div>
                    
                    <form id="login" class="flex flex-col gap-2 w-full">
                        <input type="text" name="epost" placeholder="E-post" />

                        <div class="h-0.5 bg-neutral-500"></div>

                        <input type="text" name="passord" placeholder="Passord" />
                    </form>
                </div>
            </Card>

            <div class="flex justify-between">
                <router-link to="/" class="basic-button button-black"> <!-- Skal flyttes senere -->
                    Gå tilbake
                </router-link>

                <router-link to="/kursportal" class="basic-button button-black"> <!-- Skal flyttes senere -->
                    Logg inn ->
                </router-link>
            </div>
            
        </div>
    </div> 
</template>