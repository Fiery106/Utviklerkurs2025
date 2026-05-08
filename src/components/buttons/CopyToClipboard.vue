<script setup>
import Copied from '../toasts/Copied.vue'

function Copy(content) {
    navigator.clipboard.writeText(content)

    const popup = document.getElementById("copy")

    popup.classList.remove("animate-popup")
    popup.classList.add("animate-popup")

    setTimeout(() => {
        popup.classList.remove("animate-popup")
    }, 2000);
}

defineProps({
    text: {
        type: String,
        default: "tomt"
    }
})
</script>


<template>
    <button @click="Copy(text)" class="text-alf hidden @min-sm:block" :aria-label="`Kopier '${text}' til utklippstavlen`">
        <Icon :id="8" />
    </button>
</template>