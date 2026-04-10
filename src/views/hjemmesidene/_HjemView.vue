<script setup>
import MainApp from "@/components/apps/MainApp.vue";

import Banner from "@/components/blocking/Banner.vue";
import Page from "@/components/blocking/Page.vue"

import HomeContent from "@/text_content/HomeContent.vue";

import Navigation from "@/components/Navigation.vue";
import ContactInfo from "@/components/ContactInfo.vue";

import { usePages } from "@/compostables/_pages";

const { home } = usePages()
</script>


<template>
    <MainApp>
        <main :class="home.background_color">
            <Banner :source="home" />

            <Page>            
                <HomeContent />

                <Navigation />
            </Page>

            <ContactInfo />
        </main>
    </MainApp>
</template>