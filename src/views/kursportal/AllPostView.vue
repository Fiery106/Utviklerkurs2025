<script setup>
import axios from 'axios';
import { onMounted, reactive } from 'vue';
import Directory from '@/components/Directory.vue';
import Post from '@/components/Post.vue';

import Snippet from '@/components/Snippet.vue';

let posts = []
let loading = reactive({
    load: true
})

var tests = ["Alle dager", "Tirsdag", "Torsdag", "Fredag"]

onMounted(async function test() {
    try {
        const response = await axios.get('/api/Post')
        posts = response.data           
    } catch (error) {
        console.error(error)
    } finally {
        setTimeout(() => {
            loading.load = false
        }, 500);
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
        

        <div v-else class="align-center not-xl:flex-col-reverse animate-fadeIN">
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


                    <div class="flex flex-col gap-x-8 gap-y-2 grid-cols-2 w-fit" name="sorterings knapper">
                        <div class="flex items-center gap-2">
                            <label class="font-bold emphasis">
                                Sorter etter
                            </label>

                            <Button :state="2" :look="3" text="Nyeste" />
                            <Button :state="2" :look="3" text="Eldste" />
                            
                            
                            <div class="flex items-center gap-2">
                                <label class="font-bold emphasis">
                                    Tidspunkt
                                </label>

                                <select class="text-shadow-2xs text-shadow-neutral-50/10 px-1 text-neutral-700">
                                    <option v-for="test in tests" class="w-fit">
                                        {{ test }}
                                    </option>
                                </select>
                            </div>
                        </div>

                        <div v-show="true" class="flex gap-2">
                            <Button :state="1" :look="2" text="Tirsdager" />
                            <Button :state="1" :look="2" text="Torsdager" />
                        </div>
                    </div>
                </div>

                <Post v-for="post in posts.length" key="post.id" :post="posts[post - 1]" />
            </div>

            <Snippet />
        </div>
    </main>
</template>