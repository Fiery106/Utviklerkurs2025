<script setup>
import { ref } from 'vue';
import BusinessCard from '@/components/BusinessCard.vue';

const warning = ref(false)
const tekst = "mangler passord & navn"
</script>


<template>
    <div class="flex flex-col items-center justify-center h-screen gap-8">
        <div class="grid gap-4 select-none md:w-xl">
            <h1 class="text-center">
                Kursportalen
            </h1>

            <h2 v-if="warning" name="varsel" class="w-fit px-16 animate-pulse bg-gradient-to-r from-0% via-rose-500 to-100% text-neutral-50 rounded-full">
                {{ tekst.toUpperCase() }}
            </h2>

            <a href="javascript:history.back()"> <!-- Skal flyttes senere -->
                Gå tilbake
            </a>

            <BusinessCard :is-user="true" class="mx-auto"></BusinessCard>
        </div>
    </div> 
</template>