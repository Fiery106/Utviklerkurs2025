<script setup>
import Navbar from "@/components/Navbar.vue"
import Logo from "@/components/Logo.vue"
</script>


<template>
    <header class="flex bg-brand h-16 p-2 px-6 fixed top-0 w-full items-center justify-between">
        <Logo />
        <div>
            <Navbar />
        </div>
    </header>
</template>