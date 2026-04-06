<script setup>
import Header from "@/components/_Header.vue";

import { onMounted, reactive, ref } from 'vue';
import axios from 'axios';

import Directory from '@/components/Directory.vue';
import Loading from '@/components/toasts/Loading.vue';
import Sort from '@/components/kursportal/Sort.vue';
import Post from '@/components/kursportal/Post.vue';
import Snippet from '@/components/kursportal/Snippet.vue';


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
        posts = false
    } finally {
        loading.load = false
    }
})
</script>


<template>
    <Header :course="true" />

    <Loading v-if="loading.load" />
    
    <div v-else class="place-away animate-fadeIN">
        <div class="page gap-4">
            <div class="flex flex-col gap-2">
                <Directory>
                    <Button :state="2" :look="3" to="/kursportal" text="Min side" /> /
                    <p class="text-neutral-500 dark:text-neutral-400 emphasis">
                        {{ $route.name }}
                    </p>
                </Directory>


                <h1 class="border-b-2 border-neutral-500">
                    Alle post
                </h1>

                <!-- <Sort /> -->
            </div>


            <template v-if="posts">
                <Post  v-for="post in posts.length" :key="post.id" :post="posts[post - 1]" />
            </template>
            
            <template v-else>
                <div class="flex justify-center items-center h-80">
                    Det ble dessverre ingen treffer :/ <!-- TODO -->
                </div>
            </template>
        </div>

        <Snippet />
    </div>
</template>