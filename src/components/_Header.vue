<script setup>
import Navbar from "@/components/Navbar.vue"
import Logo from "@/components/Logo.vue"
import Button from "@/components/Button.vue"
import { usePages, useStates } from "@/compostables/pages.js"

const { pages, links } = usePages()
const { states } = useStates()
</script>


<template>
    <header class="flex bg-brand h-16 p-2 px-6 fixed top-0 left-0 w-full items-center justify-between">
        <Logo />
        <div>
            <Navbar>
                <Button :state="states[1]" />
                <Button v-for="page in pages.slice(0, pages.length)" :text="page.title" :to="page.url" />
                <!-- <Button :state="states[2]" /> -->
                <Button :state="states[0]" :links class="ml-6" />
            </Navbar>
        </div>
    </header>
</template>