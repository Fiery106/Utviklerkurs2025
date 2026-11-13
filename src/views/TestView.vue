<script setup>
import Header from '@/components/HeaderV2.vue';
import Side from '@/components/blocking/Page.vue';
import Footer from '@/components/_Footer.vue';
import Banner from '@/components/blocking/Banner.vue';
import ContactInfo from '@/components/ContactInfo.vue';

import HoppTilInnhold from '@/components/buttons/SkipToContent.vue';
import ScrolleTilToppen from '@/components/buttons/ScrollToTop.vue';

import { usePages } from "@/compostables/_pages";
const { home } = usePages()
</script>


<template>
    <HoppTilInnhold />
    <Header />

    <Banner :source="home" />

    <main id="main" class="xl:p-8 flex flex-col gap-8">
        <div class="text-center">
            hello
        </div>

        <Side v-for="value in 3">
            {{ value }}
        </Side> 
    </main> 

    <ContactInfo />

    <Footer />
    <ScrolleTilToppen />
</template>