<script setup>
import Footer from '@/components/_Footer.vue'
</script>


<template>
    <router-view />

    <template v-if="$route.name != 'kart'">
        <template v-if="$route.name != 'innlogging'">
            <Footer v-if="$route.name != 'registering'"/>
        </template>
    </template>
</template>