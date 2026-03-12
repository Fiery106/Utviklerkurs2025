<script setup>
import Logo from '@/components/Logo.vue';
</script>


<template>
    <div class="card">
        <div class="hidden @min-3xs:flex max-3xs:hidden items-center gap-2">
            <Logo class="not-dark:invert h-4" />

            <h3 class="max-xs:text-lg w-full select-none">
                Utviklerkurs
            </h3>
        </div>
        
        <slot></slot>
    </div>
</template>