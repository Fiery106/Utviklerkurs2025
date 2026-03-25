<script setup>
import Page from "@/components/Page.vue"
import Banner from "@/components/Banner.vue";
import CompanyContent from "@/html/CompanyContent.vue";
import Navigation from "@/components/Navigation.vue";
import ContactInfo from "@/components/ContactInfo.vue";

import { usePages } from "@/compostables/_pages";

const { company } = usePages()
</script>


<template>
    <main :class="`${company.background_color}`">
        <Banner :source="company" />

        <Page>
            <CompanyContent/>

            <Navigation :is-shortened="true" />
        </Page>

        <ContactInfo />
    </main>
</template>