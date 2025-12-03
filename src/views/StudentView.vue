<script setup>
import Page from "@/components/elements/Page.vue"
import Banner from "@/components/elements/Banner.vue"
import StudentContent from "@/html/StudentContent.vue"
import Quote from "@/components/elements/Quote.vue"
import Navigation from "@/components/Navigation.vue"
import ContactInfo from "@/components/ContactInfo.vue"

import { usePages } from "@/compostables/_pages";

const { student } = usePages()
const message = student.quote
</script>


<template>
    <main :class="`${student.background_color}`">
        <Banner>
            <Quote state="Page" :message />
        </Banner>

        <Page>
            <StudentContent />
            
            <Navigation :is-shortened="true" />
            <!-- Knapper -->
            
            <ContactInfo />
        </Page>

        <ContactInfo :is-course-contact="false" />
    </main>
</template>