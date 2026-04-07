<script setup>
import Header from "@/components/_Header.vue";

import Banner from "@/components/blocking/Banner.vue";
import Page from "@/components/blocking/Page.vue"

import HomeContent from "@/text_content/HomeContent.vue";

import Navigation from "@/components/Navigation.vue";
import ContactInfo from "@/components/ContactInfo.vue";

import { usePages } from "@/compostables/_pages";

const { home } = usePages()
</script>


<template>
    <Header />

    <main :class="home.background_color">
        <Banner :source="home" />

        <Page>            
            <HomeContent />

            <Navigation />
        </Page>

        <ContactInfo />
    </main>
</template>