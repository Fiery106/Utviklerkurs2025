<script setup>
import MainApp from "@/components/apps/MainApp.vue";

import StudentContent from "@/text_content/StudentContent.vue"
import Banner from "@/components/blocking/Banner.vue"
import Page from "@/components/blocking/Page.vue"
import Navigation from "@/components/Navigation.vue"
import ContactInfo from "@/components/ContactInfo.vue"

import { usePages } from "@/compostables/_pages";

const { student } = usePages()
</script>


<template>
    <MainApp>
        <main :class="`${student.background_color}`">
            <Banner :source="student" />

            <Page>
                <StudentContent />
                
                <Navigation :is-shortened="true" />
            </Page>

            <ContactInfo />
        </main>
    </MainApp>
</template>