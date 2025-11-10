<script setup>
import Header from "@/components/_MainHeader.vue"
import Footer from "@/components/_Footer.vue"
import Quote from "@/components/elements/Quote.vue";
import Page from "@/components/elements/Page.vue";
import Banner from "@/components/elements/Banner.vue";
import Navigation from "@/components/Navigation.vue";

import { usePages } from "@/compostables/pages";

const { company } = usePages()
const message = company.quote
</script>


<template>
    <Header>
        <!-- Legg til knapper her hvis du vil endre navigasjon lenkene -->
    </Header>

    <main :class="company.background_color">
        <Banner>
            <Quote :message state="Page"/>
        </Banner>

        <Page>
            <h2>
                test
            </h2>

            <Navigation :is-shortened="true" />
        </Page>
    </main>
    
    <Footer />
</template>