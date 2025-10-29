<script setup>
import Header from "@/components/_Header.vue"
import Footer from "@/components/_Footer.vue"

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

    <main>
        <Quote :message :is-route-named="true" class="" />

        <div>
            <StudentContent />
            
            <div class="flex">
                <!-- Knapper -->
            </div>
            
            <!-- Kontakt -->
        </div>
    </main>

    <Footer />
</template>