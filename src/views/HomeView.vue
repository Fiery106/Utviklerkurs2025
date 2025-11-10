<script setup>
import Header from "@/components/_MainHeader.vue"
import Footer from "@/components/_Footer.vue"
import Banner from "@/components/elements/Banner.vue";
import Quote from "@/components/elements/Quote.vue";
import CourseInfo from "@/components/CourseInfo.vue";
import Page from "@/components/elements/Page.vue";
import HomeContent from "@/components/text_content/HomeContent.vue";
import Navigation from "@/components/Navigation.vue";
import ContactInfo from "@/components/ContactInfo.vue";

import { usePages } from "@/compostables/pages";

const { home } = usePages()
const message = home.quote
</script>


<template>
    <Header />

    <main>
        <Banner>
            <Quote :message state="Home" />
            <CourseInfo />
        </Banner>

        <Page>
            <HomeContent />

            <Navigation />

            <ContactInfo />
        </Page>
    </main>

    <Footer />
</template>