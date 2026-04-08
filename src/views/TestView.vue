<script setup>
import Post from '@/components/kursportal/Post.vue';
import axios from 'axios'
import ContactInfo from '@/components/ContactInfo.vue';
const image = "./src/assets/images/ref/Bnuuy_1.png"

import Leaflet from '@/components/Leaflet.vue';

import { ref, onMounted, reactive } from 'vue';
const state = reactive({
    posts: [],
    loading: true
})

let toggle = ref(false)

// onMounted(async () => {
//     try {
//         const response = await axios.get('/api/Post')
//         state.posts = response.data
//     } catch (error) {
//         console.error(error)
//     } finally {
//         state.loading = false
//     }
// })
</script>


<template>
    <!-- <Leaflet />

    <button onclick="history.back()" class="post-button rounded-md left-0 bg-alf-blue text-neutral-50">Gå tilbake</button> -->
    <div class="bg-neutral-50/50 grid grid-cols-4 w-7xl gap-x-16 gap-y-4 mx-auto items-center justify-center p-8 m-32">
        <label class="col-span-full">
            Router-link
        </label>
        <Button :state="0" :look="0" text="header links" />
        <Button :state="0" :look="1" text="navigation" class="bg-red-500 motion-safe:active:bg-red-500 hover:bg-red-500/75 dark:bg-red-700 dark:motion-safe:active:bg-red-700 dark:text-neutral-50" :icon_id="1" />

        <label class="col-span-full">
            Button
        </label>
        <Button :state="1" :look="0" text="header toggle" />
        <Button :state="1" :method="1" text="header toggle" />
        <Button :state="1" :look="1" text="selected" />
        <Button :state="1" :look="2" text="remove tag" />

        <label class="col-span-full">
            Anchor
        </label>
        <Button :state="2" :look="0" text="header link"  />
        <Button :state="2" :look="1" text="link elsewhere"  />
        <Button :state="2" :look="2" text="highlight" />
        <Button :state="2" :look="3" text="sort" />
        <Button :state="2" :look="4" text="download.png" :to="image" download="download.png" />

        <label class="col-span-full">
            Icons
        </label>
        <Icon v-for="value in 32" :id="value - 1" />
    </div>

    <div class="columns-sm gap-4">
        <p class="bg-neutral-50">
            hgi
        </p>
        <p class="bg-neutral-50">
            hgi
        </p>
        <p class="bg-neutral-50">
            hgi
        </p>
    </div>

    <div>
        <span class="box-decoration-slice bg-linear-to-r from-indigo-600 to-pink-500 px-2 text-white ...">
        Hello<br />World
        </span> <br>
        <span class="box-decoration-clone bg-linear-to-r from-indigo-600 to-pink-500 px-2 text-white ...">
        Hello<br />World
        </span>
    </div>
    

    <div class="box-border size-32 border-4 p-4 ...">
hlsh
</div>

<div class="box-content size-32 border-4 p-4 ...">
h1
</div>


<div class="relative bg-neutral-50 size-32">
    <div class="absolute bg-neutral-900 w-full h-4 bottom-0">

    </div>
</div>

<div class="relative bg-blue-500 h-64">
    <button @click="toggle = !toggle">
        klikk
    </button>
    <div v-if="toggle" class="absolute my-16 top-0 size-32 h-64 shrink-0 bg-neutral-50 text-neutral-900">
        
    </div>
</div>
</template>