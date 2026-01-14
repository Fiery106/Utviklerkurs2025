<script setup>
import src from "/alf_logo.svg"

const alt = "Alf Logo"
</script>


<template>
    <div class="h-8 mx-auto select-none">
        <img :src :alt class="h-full" fetchpriority="high" />
    </div>
</template>