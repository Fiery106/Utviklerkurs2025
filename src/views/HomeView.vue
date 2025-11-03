<script setup>
import Header from "@/components/_Header.vue"
import Footer from "@/components/_Footer.vue"
import Quote from "@/components/elements/Quote.vue";
import CourseInfo from "@/components/CourseInfo.vue";
import Page from "@/components/elements/Page.vue";
import HomeContent from "@/components/text_content/HomeContent.vue";
import Navigation from "@/components/Navigation.vue";
import ContactInfo from "@/components/ContactInfo.vue";

import { useQuotes } from "@/compostables/quotes";

const { course_quote } = useQuotes()
const message = course_quote
</script>


<template>
    <Header />

    <main>
        <div class="bg-neutral-700 bg-[url()] w-full shadow-2xl">
            <Quote :message :is-home-page="true" class="shadow-none"/>
            <CourseInfo />
        </div>

        <Page>
            <HomeContent />

            <Navigation />

            <ContactInfo />
        </Page>
    </main>

    <Footer />

</template>