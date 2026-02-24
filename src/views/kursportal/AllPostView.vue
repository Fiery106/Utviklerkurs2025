<script setup>
import { onMounted, reactive, ref } from 'vue';
import axios from 'axios';

import Directory from '@/components/Directory.vue';
import Loading from '@/components/Loading.vue';
import Sort from '@/components/Sort.vue';
import Post from '@/components/Post.vue';
import Snippet from '@/components/Snippet.vue';


let posts = ref([])
let loading = reactive({
    load: true
})



onMounted(async function test() {
    try {
        const response = await axios.get('/api/post')
        posts = response.data           
    } catch (error) {
        console.error(error)
    } finally {
        setTimeout(() => {
            loading.load = false
        }, 500);
    }
})
</script>


<template>
    <main>
        <Loading v-if="loading.load" />
        
        <div v-else class="place-away animate-fadeIN">
            <div class="page">
                <div class="flex flex-col gap-2">
                    <Directory>
                        <Button :state="2" :look="3" to="/kursportal" text="kursportal" /> /
                        <p class="text-neutral-500 dark:text-neutral-400 emphasis">
                            {{ $route.name }}
                        </p>
                    </Directory>


                    <h1>
                        Alle post
                    </h1>

                    <Sort />
                </div>


                <Post v-if="posts" v-for="post in posts.length" :key="post.id" :post="posts[post - 1]" />

                <div v-else>
                    Det ble dessverre ingen treffer T_T <!-- TODO -->
                </div>
            </div>

            <Snippet />
        </div>
    </main>
</template>