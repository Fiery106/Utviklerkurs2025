<script setup>
import Header from '@/components/_Header.vue';
import Footer from '@/components/_Footer.vue'
import ContactInfo from '@/components/ContactInfo.vue';
</script>


<template>
    <Header :course="true" />

    <main>
        <slot></slot>
    </main>

    <template v-if="$route.name != 'kursportal'">
        <router-link v-if="$route.name != 'vis_post'" to="/kursportal/post/ny" class="post-button rounded-lg">
            Ny post <Icon :id="15" />
        </router-link>
    </template>

    <ContactInfo />
    <Footer />
</template>