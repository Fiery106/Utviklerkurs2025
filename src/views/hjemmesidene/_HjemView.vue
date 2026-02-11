<script setup>
import Quote from "@/components/Quote.vue";
import Page from "@/components/Page.vue"
import CourseInfo from "@/components/CourseInfo.vue";
import HomeContent from "@/html/HomeContent.vue";
import Navigation from "@/components/Navigation.vue";
import ContactInfo from "@/components/ContactInfo.vue";

import { usePages } from "@/compostables/_pages";

const { home } = usePages()
const message = home.quote
</script>


<template>
    <main>
        <div class="banner">
            <Quote state="Home" :message />
            <CourseInfo />
        </div>

        <Page>            
            <HomeContent />

            <Navigation />

            <ContactInfo />
        </Page>

        <ContactInfo :is-course-contact="false" />
    </main>
</template>