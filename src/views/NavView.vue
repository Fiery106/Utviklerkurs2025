<script setup>
import Quote from "@/components/elements/Quote.vue";
import Page from "@/components/elements/Page.vue";
import Banner from "@/components/elements/Banner.vue";
import NavContent from "@/text_content/NavContent.vue";
import Navigation from "@/components/Navigation.vue";
import ContactInfo from "@/components/ContactInfo.vue";

import { usePages } from "@/compostables/_pages";

const { nav } = usePages()
const message = nav.quote
</script>


<template>
    <main :class="`${nav.background_color}`">
        <Banner>
            <Quote state="Page" :message/>
        </Banner>

        <Page>
            <NavContent />

            <Navigation :is-shortened="true" />

            <ContactInfo />
        </Page>

        <ContactInfo :is-course-contact="false" />
    </main>
</template>


