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
        <span class="card-heading">
            <template v-if="org">
                <Logo class="not-dark:invert h-4" />

                <p>
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