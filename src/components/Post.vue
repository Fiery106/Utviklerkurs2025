<script setup>
import axios from "axios";
import Directory from "@/components/Directory.vue"

import Comments from "@/components/Comments.vue"
import Snippet from "@/components/Snippet.vue";

import Bnuuy from "@/assets/images/ref/Bnuuy_1.png"
import { onMounted } from "vue";

let bruker = []

defineProps({
    post: {
        type: Object
    },

    isShort: {
        type: Boolean,
        default: true
    }
})

onMounted(async () => {
    try {
        const response = await axios.get('/api/testbrukere')
        bruker = response.data        
    } catch (error) {
        console.error(error)
    }
})
</script>


<template>
    <div v-if="isShort" class="flex flex-col p-8 gap-4 bg-neutral-100 dark:bg-zinc-800 rounded-t-2xl border-b-2 border-neutral-500">
        <div class="flex flex-col gap-1">
            <div class="flex justify-between items-center">
                <h1 class="wrap-anywhere">
                    {{ post.tittel }}
                </h1>

                <div class="flex items-center gap-2">
                    <p class="text-nowrap text-neutral-500 dark:text-neutral-400">
                        {{ post.dato }}
                    </p>

                    <Icon :id="16" />
                </div>
            </div>

            <p>
                {{ post.kategorie }}
            </p>
        </div>


        <p class="line-clamp-2">
            {{ post.innhold }}
        </p>
    

        <ul v-if="post.hashtags">
            <li> 
                <!-- TODO -->
                #{{ post.hashtags }} 
            </li>
        </ul>
        
        <Button :look="1" :to="`/kursportal/post/v/${post.tittel}/${post.id}`" text="les mer" class="button-black" />
    </div>


    <div v-else class="align-center not-xl:flex-col-reverse">
        <div class="page">
            <div class="flex flex-col gap-4">
                <div class="flex gap-2 justify-between">
                    <Directory>
                        <Button :state="2" :look="3" to="/kursportal" text="kursportal" /> /
                        <Button :state="2" :look="3" text="oppgaver" /> /
                        <Button :state="2" :look="3" text="Høst 2026" /> /
                        <p class="text-neutral-500 dark:text-neutral-400 emphasis">
                            TITLDLDE
                        </p>
                    </Directory>

                    <div class="flex items-center gap-2">
                        <p class="text-nowrap text-neutral-500 dark:text-neutral-400">
                            06.02.2026
                        </p>

                        <Icon :id="16" />
                    </div>
                </div>

                
                <div class="grid grid-cols-12 lg:grid-cols-8 gap-4">
                    <div class="flex md:flex-col items-center text-center gap-2 md:col-span-2 lg:col-span-1 md:row-span-2 row-start-2 col-span-full">
                        <div class="bg-alf-blue text-neutral-900 size-8 md:size-16 flex justify-center items-center rounded-full shrink-0">
                            <Icon class="text-xl md:text-4xl" />
                        </div>
                        
                        <h3>
                            NAVN NAVNESEN
                        </h3>
                    </div>


                    <h1 class="col-span-full wrap-anywhere md:col-span-10 lg:col-span-7">
                        TITLDLDE
                    </h1>
                    

                    <div class="flex flex-col col-span-full md:col-span-10 lg:col-span-7 gap-8">
                        <div class="flex flex-col gap-2">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem labore voluptatibus commodi sit reiciendis ducimus dolores molestiae minus optio iure, perferendis eligendi atque saepe quas omnis, dolorem ullam. Rem, expedita.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores voluptatibus ipsam repellat voluptatum nisi ab nostrum doloremque recusandae quidem similique omnis, quod enim dolorem ad corporis temporibus ullam amet totam.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum ipsam veniam repellendus harum totam obcaecati tempora suscipit, cupiditate, rem nulla, adipisci fugit deleniti consectetur impedit maxime deserunt. Quae, qui quos!
                            </p>
                        </div>

                        
                        <div>
                            <h3>
                                Last ned filene (10mb)
                            </h3>
                            <Button :state="2" :look="4" :to="Bnuuy" download="Bnuuy" text="download.png, download2.png, ...og 5 til" />
                        </div>
                    </div>
                </div>


                <template>
                    <ul class="col-span-full flex flex-wrap wrap-anywhere gap-2 text-neutral-500 dark:text-neutral-400">
                        <li>
                            #HASHTAG
                        </li>
                        <li>
                            #HASHTAG
                        </li>
                        <li>
                            #HASHTAG
                        </li>
                    </ul>
                </template>
            </div>

            <Comments v-if="true" />
        </div>

        <Snippet v-if="false" />
    </div>
</template>