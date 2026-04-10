<script setup>
import KursApp from "@/components/apps/KursApp.vue";
import Banner from "@/components/blocking/Banner.vue";
import AlfKontor from "@/assets/images/photos/AlfKontor.webp"

import { onMounted, reactive, ref } from 'vue';
import axios from 'axios';

import Directory from '@/components/blocking/Directory.vue';
import Loading from '@/components/toasts/Loading.vue';
import Sort from '@/components/kursportal/Sort.vue';
import Post from '@/components/kursportal/Post.vue';
import Snippet from '@/components/kursportal/Snippet.vue';


let posts = ref([])
let loading = reactive({
    load: true
})

const source = {
    img: AlfKontor,
    message: `Jobbfokus - Torsdag, April 16. <br> 
    lorem ipsum dolor sit amet.`,
    title: 'Kommende hendelse',
    img_alt: 'Utenfor Hovedkontoret'
}

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
    <KursApp>
        <main>
            <Loading v-if="loading.load" />

            <template v-else>
                <Banner :source />
                
                <div class="place-away animate-fadeIN">
                    <div class="page gap-4">
                        <div class="flex flex-col gap-2">
                            <Directory home_text="min side" home_to="/kursportal">
                                <p class="text-neutral-500 dark:text-neutral-400 emphasis">
                                    {{ $route.name }}
                                </p>
                            </Directory>


                            <h1 class="border-b-2 border-neutral-500">
                                Alle post
                            </h1>

                            <Sort />
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
        </main>
    </KursApp>
</template>