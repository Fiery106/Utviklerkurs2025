<script setup>
import Logo from '@/components/blocking/Logo.vue';

defineProps({
    org: {
        type: Boolean,
        default: true
    }
})
</script>


<template>
    <div class="card">
        <span class="hidden @min-3xs:flex max-3xs:hidden items-center gap-2">
            <template v-if="org">
                <Logo class="not-dark:invert h-4" />

                <p class="max-xs:text-lg font-bold font-title text-lg w-full select-none">
                    Utviklerkurs
                </p>
            </template>


            <template v-else>
                UNDEFINED
            </template>
        </span>
        
        <slot></slot>
    </div>
</template>