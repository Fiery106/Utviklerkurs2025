<script setup>
function capitalizeFirstLetter(val) {
    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}
</script>

<!--
    bg-[url(@/assets/images/Bnuuy_1.png)] bg-no-repeat bg-center bg-cover
-->
<template>
    <section class="self-center justify-center">
        <h1>
            {{ capitalizeFirstLetter($route.name) }}
        </h1>
        <p class="px-4 border-black border-l-4">
            <slot></slot>
        </p>
    </section>
</template>