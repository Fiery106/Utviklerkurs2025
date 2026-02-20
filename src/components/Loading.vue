<script setup>
import { onMounted, reactive } from 'vue';

let loading = reactive({
    load: true
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
</template>