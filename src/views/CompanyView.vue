<script setup>
import Header from "@/components/_MainHeader.vue"
import Footer from "@/components/_Footer.vue"
import Quote from "@/components/elements/Quote.vue";
import Page from "@/components/elements/Page.vue";
import Banner from "@/components/elements/Banner.vue";

import { useQuotes } from "@/compostables/quotes";
const { company_quote } = useQuotes()
const message = company_quote
</script>


<template>
    <Header>
        <!-- Legg til knapper her hvis du vil endre navigasjon lenkene -->
    </Header>

    <main>
        <Banner>
            <Quote :message state="Page"/>
        </Banner>

        <Page>
            <h2>
                test
            </h2>
        </Page>
    </main>
    
    <Footer />
</template>