<script setup>
import Navbar from "@/components/Navbar.vue"
import Logo from "@/components/Logo.vue"
</script>


<template>
    <header class="flex bg-brand h-16 px-6 fixed left-0 w-full items-center justify-between">
        <Logo />
        
        <nav>
            <slot>
                <Navbar :limit="3" />
            </slot>
        </nav>
    </header>
</template>