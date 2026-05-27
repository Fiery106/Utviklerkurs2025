<script setup>
import MainApp from "@/components/apps/MainApp.vue";

import Banner from "@/components/blocking/Banner.vue";
import Wrapper from "@/components/blocking/Wrapper.vue";
import Page from "@/components/blocking/Page.vue"
import HomeContent from "@/text_content/HomeContent.vue";
import Navigation from "@/components/Navigation.vue";
import ContactInfo from "@/components/ContactInfo.vue";

import { usePages } from "@/compostables/_pages";

const { home } = usePages()
</script>


<template>
    <MainApp>
        <Banner :source="home" />

        <Wrapper :class="home.background_color">
            <Page>
                <HomeContent/>

                <Navigation />
            </Page>
        </Wrapper>

        <ContactInfo />
    </MainApp>
</template>