<script setup>
import Quote from "@/components/Quote.vue";
import Page from "@/components/Page.vue"
import CompanyContent from "@/html/CompanyContent.vue";
import Navigation from "@/components/Navigation.vue";
import ContactInfo from "@/components/ContactInfo.vue";

import { usePages } from "@/compostables/_pages";

const { company } = usePages()
const message = company.quote
</script>


<template>
    <main :class="`${company.background_color}`">
        <div class="banner">
            <Quote :message state="Page"/>
        </div>

        <Page>
            <CompanyContent/>

            <Navigation :is-shortened="true" />

            <ContactInfo />
        </Page>

        <ContactInfo :is-course-contact="false" />
    </main>
</template>