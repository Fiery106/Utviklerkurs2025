<script setup>
import MainApp from "@/components/apps/MainApp.vue";

import Banner from "@/components/blocking/Banner.vue";
import Wrapper from "@/components/blocking/Wrapper.vue";
import Page from "@/components/blocking/Page.vue"
import CompanyContent from "@/text_content/CompanyContent.vue";
import Navigation from "@/components/Navigation.vue";
import ContactInfo from "@/components/ContactInfo.vue";

import { usePages } from "@/compostables/_pages";

const { company } = usePages()
</script>


<template>
    <MainApp>
        <Banner :source="company" />

        <Wrapper :class="company.background_color">
            <Page>
                <CompanyContent/>

                <Navigation :is-short="true" />
            </Page>
        </Wrapper>

        <ContactInfo />
    </MainApp>
</template>