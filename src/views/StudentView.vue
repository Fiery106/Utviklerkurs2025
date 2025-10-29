<script setup>
import Header from "@/components/_Header.vue"
import Footer from "@/components/_Footer.vue"
import Page from "@/components/Page.vue"

import StudentContent from "@/components/text_content/StudentContent.vue"

import Quote from "@/components/Quote.vue"
import { useQuotes } from "@/compostables/quotes.js";

const { student_quote } = useQuotes()

const message = student_quote
</script>


<template>
    <Header>
        <!-- Legg til knapper her hvis du vil endre navigasjon lenkene -->
    </Header>

    <main class="from-sky-500 via-sky-500 to-alf-blue">
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