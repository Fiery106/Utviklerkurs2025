<script setup>
import MainApp from "@/components/apps/MainApp.vue";

import Banner from "@/components/blocking/Banner.vue";
import Wrapper from "@/components/blocking/Wrapper.vue";
import Page from "@/components/blocking/Page.vue"
import NavContent from "@/text_content/NavContent.vue";
import Navigation from "@/components/Navigation.vue";
import ContactInfo from "@/components/ContactInfo.vue";

import { usePages } from "@/compostables/_pages";

const { nav } = usePages()
</script>


<template>
    <MainApp>
        <Banner :source="nav" />

        <Wrapper :class="nav.background_color">
            <Page>
                <NavContent/>

                <Navigation :is-short="true" />
            </Page>
        </Wrapper>

        <ContactInfo />
    </MainApp>
</template>


