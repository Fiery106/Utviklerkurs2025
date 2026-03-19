<script setup>
import Logo from '@/components/Logo.vue';
</script>


<template>
    <div class="card">
        <div class="hidden @min-3xs:flex max-3xs:hidden items-center gap-2">
            <Logo class="not-dark:invert h-4" />

            <p class="max-xs:text-lg font-bold font-title text-lg w-full select-none">
                Utviklerkurs
            </p>
        </div>
        
        <slot></slot>
    </div>
</template>