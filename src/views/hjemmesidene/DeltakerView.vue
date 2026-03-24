<script setup>
import StudentContent from "@/html/StudentContent.vue"
import Banner from "@/components/Banner.vue"
import Page from "@/components/Page.vue"
import Navigation from "@/components/Navigation.vue"
import ContactInfo from "@/components/ContactInfo.vue"

import { usePages } from "@/compostables/_pages";

const { student } = usePages()
const message = student.quote
const title = student.title
</script>


<template>
    <main :class="`${student.background_color}`">
        <Banner :title :message :src="student.src" />

        <Page>
            <StudentContent />
            
            <Navigation :is-shortened="true" />
        </Page>

        <ContactInfo />
    </main>
</template>