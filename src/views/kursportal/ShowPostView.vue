<script setup>
import { onMounted, reactive } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';
import Post from '@/components/Post.vue';

const route = useRoute()
console.log(route.params.id)

let loading = reactive({
    load: true
})
let post = {}

onMounted(async function test() {
    try {
        const response = await axios.get(`/api/Post/${route.params.id}`)
        console.log(response)
        post = response.data           
    } catch (error) {
        console.error(error)
    } finally {
        setTimeout(loading.load = false, 500)
        console.log(post)
    }
})
</script>


<template>
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

    <Post :is-short="false" v-else />
</template>