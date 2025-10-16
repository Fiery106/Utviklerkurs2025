<script setup>
import Header from "@/components/_Header.vue"
import Footer from "@/components/_Footer.vue"
import Quote from "@/components/Quote.vue";

import { useQuotes } from "@/compostables/quotes";

const { course_quote } = useQuotes()
const message = course_quote
</script>


<template>
    <Header>
        <!-- Legg til knapper her hvis du vil endre navigasjon lenkene -->
    </Header>

    <main>
        <section class="text-left mx-auto w-100 
            sm:w-120 sm:text-center
            md:w-150 
            xl:min-w-1/2 xl:max-w-200">
            <Quote :message :named_page="false" />

            <!-- forhåndsvisning -->
        </section>

        <section>
            <!-- Kursdetaljer -->

            <!-- x -->

            <div>
                <!-- Kontakt -->

                <!-- Kart -->
            </div>
        </section>
    </main>

    <Footer />
</template>