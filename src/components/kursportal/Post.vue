<script setup>
import { onMounted } from "vue";
import axios from "axios";

import Directory from "@/components/Directory.vue"
import Profile from "@/components/kursportal/Profile.vue";
import Comments from "@/components/kursportal/Comments.vue"

import Bnuuy from "@/assets/images/ref/Bnuuy_1.png"

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
/*
onMounted(async () => {
    try {
        const response = await axios.get('/api/testbrukere')
        bruker = response.data        
    } catch (error) {
        console.error(error)
    }
}) */
</script>


<template>
    <div v-if="isShort" class="post">
        <div class="flex items-start justify-between gap-4">
            <div class="flex gap-1">
                <p class="lower-text">
                    {{ post.kategorie }}
                </p>

                /

                <p class="lower-text">
                    {{ post.årsgruppe }}
                </p>
            </div>
            
            <div class="flex items-center gap-2 relative"> <!-- Dropdown.vue -->
                <p class="lower-text">
                    {{ post.dato }}
                </p>

                <Button :state="1" :icon_id="16" class="basic-button more-button" />

                <div class="absolute right-0 py-2 hidden flex flex-col gap-1 items-center">
                    <Button :state="1" text="Rediger" class="basic-button button-black" />
                    <Button :state="1" text="Slett" class=" basic-button button-black" />
                </div>
            </div>
        </div>

        <div class="flex flex-col gap-1">  
            <h1 class="line-clamp-3">
                {{ post.tittel }}
            </h1>

            <Profile name="Navn Navnesen" />
        </div>

        <p class="line-clamp-2">
            {{ post.innhold }}
        </p>

        <Button :look="1" :to="`/kursportal/post/v/${post.tittel}/${post.id}`" text="les mer" class="button-black" />
    </div>


    <div v-else class="place-center not-xl:flex-col-reverse">
        <div class="page">
            <div class="flex flex-col gap-4">
                <div class="flex gap-2 justify-between">
                    <Directory>
                        <Button :state="2" :look="3" to="/kursportal" text="kursportal" /> /
                        <Button :state="2" :look="3" to="/kursportal/post/alle" :text="post.kategorie" /> /
                        <Button :state="2" :look="3" to="/kursportal/post/alle" :text="post.årsgruppe" /> /
                        <p class="lower-text emphasis">
                            {{ post.tittel }}
                        </p>
                    </Directory>

                    <div class="flex items-center gap-2">
                        <p class="lower-text">
                            {{ post.dato }}
                        </p>

                        <div class="relative">
                            <Button @click="" :state="1" :icon_id="16" class="basic-button more-button" />

                            <div class="absolute right-0 py-2 hidden flex flex-col gap-1 items-center">
                                <Button :state="1" text="Rediger" class="basic-button button-black" />
                                <Button :state="1" text="Slett" class=" basic-button button-black" />
                            </div>
                        </div>                        
                    </div>
                </div>

                
                <div class="grid grid-cols-12 lg:grid-cols-8 gap-4">
                    <Profile :is_mini="false" name="Navn Navnesen" />


                    <h1 class="col-span-full wrap-anywhere md:col-span-10 lg:col-span-7">
                        {{ post.tittel }}
                    </h1>
                    

                    <div class="flex flex-col col-span-full row-span-2 md:col-span-10 lg:col-span-7 gap-8">
                        {{ post.innhold }}
                        
                        <div v-if="false">
                            <h3>
                                Last ned filene (10mb)
                            </h3>
                            <Button :state="2" :look="4" :to="Bnuuy" download="Bnuuy" text="download.png, download2.png, ...og 5 til" />
                        </div>
                    </div>
                </div>
            </div>

            <Comments v-if="true" />
        </div>
    </div>
</template>