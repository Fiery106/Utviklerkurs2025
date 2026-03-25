<script setup>
import Banner from "@/components/Banner.vue";
import Page from "@/components/Page.vue"
import NavContent from "@/html/NavContent.vue";
import Navigation from "@/components/Navigation.vue";
import ContactInfo from "@/components/ContactInfo.vue";

import { usePages } from "@/compostables/_pages";

const { nav } = usePages()
</script>


<template>
    <main :class="`${nav.background_color}`">
        <Banner :source="nav" />

        <Page>
            <NavContent />

            <Navigation :is-shortened="true" />
        </Page>

        <ContactInfo />
    </main>
</template>


