<script setup>

</script>

<template>
    <div class="h-screen flex justify-center items-center dark:invert">
        <div class="text-4xl flex animate-loading h-fit">
            <p>
                laster
            </p>
            <span v-for="value in 3" >
                .
            </span>
        </div>
    </div>
</template>