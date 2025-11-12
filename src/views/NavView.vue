<script setup>
import Header from "@/components/_MainHeader.vue"
import Footer from "@/components/_Footer.vue"
import Quote from "@/components/elements/Quote.vue";
import Page from "@/components/elements/Page.vue";
import Banner from "@/components/elements/Banner.vue";
import NavContent from "@/components/text_content/NavContent.vue";
import Navigation from "@/components/Navigation.vue";
import ContactInfo from "@/components/ContactInfo.vue";

import { usePages } from "@/compostables/_pages";

const { nav } = usePages()
const message = nav.quote
</script>


<template>
    <Header>
        <!-- Legg til knapper her hvis du vil endre navigasjon lenkene -->
    </Header>

    <main :class="nav.background_color">
        <Banner>
            <Quote :message state="Page"/>
        </Banner>

        <Page>
            <NavContent />

            <Navigation :is-shortened="true" />

            <ContactInfo />
        </Page>

        <ContactInfo :is-course-contact="false" />
    </main>
    
    <Footer />
</template>


