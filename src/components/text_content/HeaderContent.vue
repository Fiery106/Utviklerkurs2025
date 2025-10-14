<script setup>
import { useQuotes } from '@/compostables/quotes';

const { heading } = useQuotes()
</script>


<template>
    <div class="">
        <h1>
            {{ heading.name }}
        </h1>
        <h2 class="text-alf-blue italic">
            {{ heading.intro }}
        </h2>
        <p class="py-6">
            {{ heading.about }}
        </p>
    </div>
</template>