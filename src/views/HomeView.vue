<script setup>
import Header from "@/components/_Header.vue"
import Footer from "@/components/_Footer.vue"
import Quote from "@/components/elements/Quote.vue";
import CourseInfo from "@/components/CourseInfo.vue";
import Page from "@/components/elements/Page.vue";
import HomeContent from "@/components/text_content/HomeContent.vue";
import Navigation from "@/components/Navigation.vue";
import ContactInfo from "@/components/elements/ContactInfo.vue";

import { useQuotes } from "@/compostables/quotes";

const { course_quote } = useQuotes()
const message = course_quote
</script>


<template>
    <Header />

    <main>
        <div class="bg-neutral-700 bg-[url()] w-full">
            <Quote :message :is-home-page="true" class="shadow-none mb-8"/>
            <CourseInfo />
        </div>

        <Page>
            <HomeContent />

            <Navigation />

            <div>
                <h2>
                    test
                </h2>
            </div>

            <div class="">
                <ContactInfo />

                <!-- Kart -->
            </div>
        </Page>
    </main>

    <Footer />
</template>