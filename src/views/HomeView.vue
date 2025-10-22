<script setup>
import Header from "@/components/_Header.vue"
import Footer from "@/components/_Footer.vue"
import Quote from "@/components/Quote.vue";
import CourseDetails from "@/components/CourseDetails.vue";

import { useQuotes } from "@/compostables/quotes";

const { course_quote } = useQuotes()
const message = course_quote
//@/assets/images/Bnuuy_1.png
</script>


<template>
    <Header>
        <!-- Legg til knapper her hvis du vil endre navigasjon lenkene -->
    </Header>

    <main class="">
        <Quote :message :named_page="false" class="bg-[url()]"/>

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