<script setup>
import Header from "@/components/_Header.vue"
import Footer from "@/components/_Footer.vue"
import Quote from "@/components/Quote.vue";
import Page from "@/components/Page.vue";
import Navigation from "@/components/Navigation.vue";
import CourseDetails from "@/components/CourseDetails.vue";

import { useQuotes } from "@/compostables/quotes";

const { course_quote } = useQuotes()
const message = course_quote
</script>


<template>
    <Header>
        <!-- Legg til knapper her hvis du vil endre navigasjon lenkene -->
    </Header>

    <main>
        <Quote :message :is-home-page="true" class="bg-[url()] bg-neutral-700 text-white"/>

        <Page>
            <CourseDetails class="px-8" />

            <Navigation />

            <div class="px-8">
                <h2>
                    test
                </h2>
            </div>

            <div>
                <!-- Kontakt -->

                <!-- Kart -->
            </div>
        </Page>
    </main>

    <Footer />
</template>