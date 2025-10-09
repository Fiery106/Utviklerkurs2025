<script setup>
import Navbar from "@/components/Navbar.vue"
import Logo from "@/components/Logo.vue"
import Button from "@/components/Button.vue"

import { usePages } from "@/compostables/pages.js"

const { pages } = usePages()
</script>


<template>
    <header class="flex bg-brand h-16 px-6 fixed left-0 w-full items-center justify-between">
        <Logo />
        <nav>
            <Navbar :limit="3">
                <!-- Legg til knapper her hvis du vil endre navigasjon lenkene -->
            </Navbar>
        </nav>
    </header>
</template>