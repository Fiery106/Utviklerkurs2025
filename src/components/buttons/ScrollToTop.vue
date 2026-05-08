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
    <div v-if="show" :class="`${$route.name != 'post' ? 'bottom-0' : ''} animate-fadeIN scroll-button-wrapper`">
        <button @click="scrollToTop()" aria-label="gå til toppen av siden" class="scroll-button">
            <Icon :id="3" class="-rotate-90" />
        </button>
    </div>
</template>