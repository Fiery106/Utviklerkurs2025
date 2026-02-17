<script setup>
import Header from '@/components/_Header.vue';
import Footer from '@/components/_Footer.vue';
</script>


<template>
    <Header v-if="$route.name !== 'ny_post'"  :limit="3">
        <!-- <div v-if="$route.path == `/kursportal`">
            
        </div> -->
    </Header>
    <router-view />
    <Footer v-if="$route.name !== 'ny_post'" />

    <Button v-if="$route.name != 'ny_post'" :look="2" text="ny post" to="/kursportal/post/ny" />
</template>