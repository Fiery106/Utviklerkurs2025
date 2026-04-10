<script setup>
import MainApp from "@/components/apps/MainApp.vue";

import Banner from "@/components/blocking/Banner.vue";
import Page from "@/components/blocking/Page.vue"
import NavContent from "@/text_content/NavContent.vue";
import Navigation from "@/components/Navigation.vue";
import ContactInfo from "@/components/ContactInfo.vue";

import { usePages } from "@/compostables/_pages";

const { nav } = usePages()
</script>


<template>
    <MainApp>
        <main :class="`${nav.background_color}`">
            <Banner :source="nav" />

            <Page>
                <NavContent />

                <Navigation :is-shortened="true" />
            </Page>

            <ContactInfo />
        </main>
    </MainApp>
</template>


