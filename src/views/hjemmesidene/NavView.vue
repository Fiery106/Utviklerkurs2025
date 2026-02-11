<script setup>
import Quote from "@/components/Quote.vue";
import Page from "@/components/Page.vue"
import NavContent from "@/html/NavContent.vue";
import Navigation from "@/components/Navigation.vue";
import ContactInfo from "@/components/ContactInfo.vue";

import { usePages } from "@/compostables/_pages";

const { nav } = usePages()
const message = nav.quote
</script>


<template>
    <main :class="`${nav.background_color}`">
        <div class="banner">
            <Quote state="Page" :message/>
        </div>

        <Page>
            <NavContent />

            <Navigation :is-shortened="true" />

            <ContactInfo />
        </Page>

        <ContactInfo :is-course-contact="false" />
    </main>
</template>


