<script setup>
import Header from "@/components/_MainHeader.vue"
import Footer from "@/components/_Footer.vue"
import Banner from "@/components/elements/Banner.vue";
import Quote from "@/components/elements/Quote.vue";
import CourseInfo from "@/components/CourseInfo.vue";
import Page from "@/components/elements/Page.vue";
import HomeContent from "@/components/text_content/HomeContent.vue";
import Navigation from "@/components/Navigation.vue";
import ContactInfo from "@/components/ContactInfo.vue";

import { usePages } from "@/compostables/_pages";

const { home } = usePages()
const message = home.quote
</script>


<template>
    <Header />

    <main>
        <Banner>
            <Quote :message state="Home" />
            <CourseInfo />
        </Banner>

        <Page>
            <div class="bg-alf-blue">
                <a class="underline bg-purple-500 hover:cursor-pointer">
                    <div class="flex items-center group bg-purple-500">
                        <p class="">
                            Hello world
                        </p>

                        <font-awesome-icon :icon="['fas', 'building']" class="text-2xl group-has-[p]:text-xl"/>
                    </div>
                </a>
            </div>

            <HomeContent />

            <Navigation />

            <ContactInfo />
        </Page>

        <ContactInfo :is-course-contact="false" />
    </main>

    <Footer />
</template>