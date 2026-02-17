<script setup>
import Post from '@/components/Post.vue';
import axios from 'axios'
const image = "./src/assets/images/ref/Bnuuy_1.png"

import { onMounted, reactive } from 'vue';
const state = reactive({
    posts: [],
    loading: true
})

onMounted(async () => {
    try {
        const response = await axios.get('/api/Post')
        state.posts = response.data
    } catch (error) {
        console.error(error)
    } finally {
        state.loading = false
    }
})
</script>


<template>
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

        <Icon :id="100" />
        <div v-for="post in state.posts" class="col-span-full">
            {{ post.tittel }}
            <div v-html="post.innhold"/>
        </div>
    </div>


    <Post />
</template>