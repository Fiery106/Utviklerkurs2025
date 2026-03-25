<script setup>
import Banner from "@/components/Banner.vue";
import Page from "@/components/Page.vue"

import HomeContent from "@/html/HomeContent.vue";

import Navigation from "@/components/Navigation.vue";
import ContactInfo from "@/components/ContactInfo.vue";

import { usePages } from "@/compostables/_pages";

const { home } = usePages()
</script>


<template>
    <main :class="home.background_color">
        <Banner :source="home" />

        <Page>            
            <HomeContent />

            <Navigation />
        </Page>

        <ContactInfo />
    </main>
</template>