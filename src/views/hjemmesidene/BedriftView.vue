<script setup>
import Header from "@/components/_Header.vue";

import Page from "@/components/blocking/Page.vue"
import Banner from "@/components/blocking/Banner.vue";
import CompanyContent from "@/text_content/CompanyContent.vue";
import Navigation from "@/components/Navigation.vue";
import ContactInfo from "@/components/ContactInfo.vue";

import { usePages } from "@/compostables/_pages";

const { company } = usePages()
</script>


<template>
    <Header />

    <main :class="`${company.background_color}`">
        <Banner :source="company" />

        <Page>
            <CompanyContent/>

            <Navigation :is-shortened="true" />
        </Page>

        <ContactInfo />
    </main>
</template>