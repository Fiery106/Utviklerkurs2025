<script setup>
import { onMounted, reactive } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';

import Loading from '@/components/toasts/Loading.vue';
import Post from '@/components/kursportal/Post.vue';
import Snippet from "@/components/kursportal/Snippet.vue";


const route = useRoute()

let loading = reactive({
    load: true
})
let post = reactive({})

onMounted(async function test() {
    try {
        const response = await axios.get(`/api/post/${route.params.id}`);
        console.log(response)
        post = response.data;           
    } catch (error) {
        console.error(error)
    } finally {
        setTimeout(() => {
            loading.load = false
        }, 1);
    }
})
</script>


<template>
    <Loading v-if="loading.load" />

    <div v-else  class="place-away animate-fadeIN">
        <Post :post :is-short="false" />

        <Snippet v-if="true" />
    </div>
</template>