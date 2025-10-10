<script setup>
import { defineProps } from "vue";

defineProps({
    message: {
        type: String,
        default: ""
    },
    title: {
        type: Boolean,
        default: true
    }
})

function capitalizeFirstLetter(val) {
    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}
</script>

<!--
    bg-[url(@/assets/images/Bnuuy_1.png)] bg-no-repeat bg-center bg-cover
-->
<template>
    <section class="self-center justify-center">
        <h1 v-if="title">
            For {{ capitalizeFirstLetter($route.name) }}
        </h1>
        <p v-if="!title" class="px-4 text-center">
            {{ message }}
        </p>
        <p v-else class="px-4 border-black border-l-4">
            {{ message }}
        </p>
    </section>
</template>