<script setup>
import { ref } from 'vue';
import { scrollToTop } from '@/compostables/functions';

const show = ref(false)
const height = 300

window.onscroll = function () {
    if (window.scrollY > height) {
        show.value = true
    } else {
        show.value = false
    }
}

if (window.scrollY > height) {
    show.value = true
}
</script>


<template>
    <div v-if="show" class="animate-fadeIN post-button-wrapper m-8">
        <button @click="scrollToTop()" class="button-white p-4 min-w-16.5 size-full font-bold rounded-md border text-2xl">
            <Icon :id="3" class="-rotate-90" />
        </button>
    </div>
</template>