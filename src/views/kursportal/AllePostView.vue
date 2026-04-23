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

const day = getDate()

function getDate() {
    var today = new Date()
    var day = String(today.getDate()).padStart(2, '0')
    var month = String(today.getMonth() + 1).padStart(2, '0')
    var year = String(today.getFullYear()).slice(2, today.getFullYear().length)

    return today = day + '.' + month + '.' + year
}

// const body = document.body
// body.classList.add('overflow-clip')

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
        setTimeout(() => {
            loading.load = false
            // body.classList.remove('overflow-clip')
        }, 1000);
        
    }
})
</script>


<template>
    <KursApp>
        <Loading v-if="loading.load" />

        <template v-else>
            <Banner :source />
            
            <div class="place-away animate-fadeIN">
                <div class="page gap-8">
                    <div class="flex flex-col gap-2">
                        <Directory home_text="min side" home_to="/kursportal">
                            <p class="text-neutral-500 dark:text-neutral-400 emphasis">
                                {{ $route.name }}
                            </p>
                        </Directory>

                        <div class="flex items-end justify-between border-b-2 border-neutral-500">
                            <h1>
                                Alle post
                            </h1>

                            <p class="text-neutral-500">
                                {{ day }}
                            </p>
                        </div>
                        

                        <Sort class="hidden md:flex"/>
                    </div>
                    

                    <template v-if="posts">
                        <Post v-for="(post, index) in posts.length" :key="post.id" :post="posts[index]">
                            <template v-if="index == 0 ? true : false">
                                <Snippet class="shadow-none w-full max-h-64 hidden md:flex" />
                            </template>
                        </Post>
                    </template>
                    
                    <template v-else>
                        <div class="flex justify-center items-center h-80">
                            Det ble dessverre ingen treffer :/ <!-- TODO -->
                        </div>
                    </template>
                </div>
            </div>
        </template>
    </KursApp>
</template>