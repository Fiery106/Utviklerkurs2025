<script setup>
import Directory from "@/components/Directory.vue"
</script>


<template>
    <div class="page align-center">
        <Directory v-if="$route.path != '/'">
            <Button :state="2" :look="3" to="/" text="hjemmeside" /> / 
            <Button :state="2" :look="3" :text="$route.name" />
        </Directory>
        <slot></slot>
    </div>
</template>