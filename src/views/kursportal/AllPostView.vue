<script setup>
import axios from 'axios';
import { onMounted, reactive } from 'vue';
import Directory from '@/components/Directory.vue';
import Post from '@/components/Post.vue';

import Snippet from '@/components/Snippet.vue';

let post = []
let loading = reactive({
    load: true
})

onMounted(async function test() {
    try {
        const posts = await axios.get('/api/Post')
        post = posts.data           
    } catch (error) {
        console.error(error)
    } finally {
        loading.load = false
        console.log(post)
    }
})
</script>


<template>
    <!-- <Post :is-short="false" /> -->

    <main>
        <div v-if="loading.load" class="h-screen -my-16 flex justify-center items-center">
            <ul class="text-4xl flex gap-1 animate-loading h-fit">
                <p>
                    laster inn
                </p>
                <li v-for="value in 3" >
                    .
                </li>
            </ul>
        </div>
        

        <div v-else class="align-center not-xl:flex-col-reverse">
            <div class="page">
                <Directory />

                <Post v-for="value in post.length" :post="post[value - 1]" />
            </div>

            <Snippet />
        </div>
    </main>
</template>