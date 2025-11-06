<script setup>
import Header from "@/components/_MainHeader.vue"
import Footer from "@/components/_Footer.vue"
import Page from "@/components/elements/Page.vue"
import Banner from "@/components/elements/Banner.vue"

import StudentContent from "@/components/text_content/StudentContent.vue"

import Quote from "@/components/elements/Quote.vue"
import { useQuotes } from "@/compostables/quotes.js";

const { student_quote } = useQuotes()

const message = student_quote
</script>


<template>
    <Header />

    <main class="from-sky-500">
        <Banner>
            <Quote :message state="Page" />
        </Banner>

        <Page>
            <StudentContent />
            
            <!-- Knapper -->
            
            <!-- Kontakt -->
        </Page>
    </main>

    <Footer />
</template>