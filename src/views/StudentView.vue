<script setup>
import Header from "@/components/_Header.vue"
import Footer from "@/components/_Footer.vue"
import Page from "@/components/elements/Page.vue"

import StudentContent from "@/components/text_content/StudentContent.vue"

import Quote from "@/components/elements/Quote.vue"
import { useQuotes } from "@/compostables/quotes.js";

const { student_quote } = useQuotes()

const message = student_quote
</script>


<template>
    <Header />

    <main class="from-sky-500">
        <Quote :message :is-route-named="true" class="bg-neutral-700 text-white" />

        <Page>
            <StudentContent />
            
            <div class="flex">
                <!-- Knapper -->
            </div>
            
            <!-- Kontakt -->
        </Page>
    </main>

    <Footer />
</template>