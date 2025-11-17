<script setup>
import Quote from "@/components/elements/Quote.vue";
import Page from "@/components/elements/Page.vue";
import Banner from "@/components/elements/Banner.vue";
import CompanyContent from "@/components/text_content/CompanyContent.vue";
import Navigation from "@/components/Navigation.vue";
import ContactInfo from "@/components/ContactInfo.vue";

import { usePages } from "@/compostables/_pages";

const { company } = usePages()
const message = company.quote
</script>


<template>
    <main :class="company.background_color">
        <Banner>
            <Quote :message state="Page"/>
        </Banner>

        <Page>
            <CompanyContent />

            <Navigation :is-shortened="true" />

            <ContactInfo />
        </Page>

        <ContactInfo :is-course-contact="false" />
    </main>
</template>