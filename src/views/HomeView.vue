<script setup>
import Header from "@/components/_Header.vue"
import Footer from "@/components/_Footer.vue"
import Quote from "@/components/Quote.vue";
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
        <Quote :message :named_page="false" class="bg-[url()] bg-neutral-700 text-white"/>

        <div class="w-md">
            <CourseDetails />

            <!-- x -->

            <div>
                <!-- Kontakt -->

                <!-- Kart -->
            </div>
        </div>
    </main>

    <Footer />
</template>