<script setup>
import { ref } from 'vue';
import LoginForm from '@/components/forms/LoginForm.vue';

const warning = ref(false)
const tekst = "mangler passord & navn"
</script>


<template>
    <div class="flex flex-col items-center justify-center h-screen gap-4">
        <h1 class="wall-text text-center">
            Kursportalen
        </h1>

        <h2 v-if="warning" name="varsel" class="w-full text-center animate-pulse bg-gradient-to-r via-rose-500 text-neutral-50">
            {{ tekst.toUpperCase() }}
        </h2>

        <LoginForm />
    </div> 
</template>