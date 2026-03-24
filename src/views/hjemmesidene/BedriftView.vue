<script setup>
import Quote from "@/components/Quote.vue";
import Page from "@/components/Page.vue"
import Banner from "@/components/Banner.vue";
import CompanyContent from "@/html/CompanyContent.vue";
import Navigation from "@/components/Navigation.vue";
import ContactInfo from "@/components/ContactInfo.vue";

import { usePages } from "@/compostables/_pages";

const { company } = usePages()
const message = company.quote
const title = company.title
</script>


<template>
    <main :class="`${company.background_color}`">
        <Banner :title :message :src="company.src" />

        <Page>
            <CompanyContent/>

            <Navigation :is-shortened="true" />
        </Page>

        <ContactInfo />
    </main>
</template>