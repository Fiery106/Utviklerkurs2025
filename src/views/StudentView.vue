<script setup>
import Header from "@/components/_MainHeader.vue"
import Footer from "@/components/_Footer.vue"
import Page from "@/components/elements/Page.vue"
import Banner from "@/components/elements/Banner.vue"
import StudentContent from "@/components/text_content/StudentContent.vue"
import Quote from "@/components/elements/Quote.vue"
import Navigation from "@/components/Navigation.vue"
import ContactInfo from "@/components/ContactInfo.vue"

import { usePages } from "@/compostables/_pages";

const { student } = usePages()
const message = student.quote
</script>


<template>
    <Header />

    <main :class="student.background_color">
        <Banner>
            <Quote :message state="Page" />
        </Banner>

        <Page>
            <StudentContent />
            
            <Navigation :is-shortened="true" />
            <!-- Knapper -->
            
            <ContactInfo />
        </Page>

        <ContactInfo :is-course-contact="false" />
    </main>

    <Footer />
</template>