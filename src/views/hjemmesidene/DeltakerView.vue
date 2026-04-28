<script setup>
import MainApp from "@/components/apps/MainApp.vue";

import Banner from "@/components/blocking/Banner.vue"
import Wrapper from "@/components/blocking/Wrapper.vue";
import Page from "@/components/blocking/Page.vue"
import StudentContent from "@/text_content/StudentContent.vue"
import Navigation from "@/components/Navigation.vue"
import ContactInfo from "@/components/ContactInfo.vue"

import { usePages } from "@/compostables/_pages";

const { student } = usePages()
</script>


<template>
    <MainApp>
        <Banner :source="student" />

        <Wrapper :class="student.background_color">
            <Page>
                <StudentContent/>

                <Navigation :is-short="true" />
            </Page>
        </Wrapper>

        <ContactInfo />
    </MainApp>
</template>