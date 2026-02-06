<script setup>
import Banner from "@/components/elements/Banner.vue";
import Quote from "@/components/elements/Quote.vue";
import CourseInfo from "@/components/CourseInfo.vue";
import Page from "@/components/elements/Page.vue";
import HomeContent from "@/text_content/HomeContent.vue";
import Navigation from "@/components/Navigation.vue";
import ContactInfo from "@/components/ContactInfo.vue";

import { usePages } from "@/compostables/_pages";

const { home } = usePages()
const message = home.quote
</script>


<template>
    <main>
        <Banner>
            <Quote state="Home" :message />
            <CourseInfo />
        </Banner>

        <Page>            
            <HomeContent />

            <Navigation />

            <ContactInfo />
        </Page>

        <ContactInfo :is-course-contact="false" />
    </main>
</template>