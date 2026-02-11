<script setup>
import StudentContent from "@/html/StudentContent.vue"
import Quote from "@/components/Quote.vue"
import Page from "@/components/Page.vue"
import Navigation from "@/components/Navigation.vue"
import ContactInfo from "@/components/ContactInfo.vue"

import { usePages } from "@/compostables/_pages";

const { student } = usePages()
const message = student.quote
</script>


<template>
    <main :class="`${student.background_color}`">
        <div class="banner">
            <Quote state="Page" :message />
        </div>

        <Page>
            <StudentContent />
            
            <Navigation :is-shortened="true" />
            
            <ContactInfo />
        </Page>

        <ContactInfo :is-course-contact="false" />
    </main>
</template>