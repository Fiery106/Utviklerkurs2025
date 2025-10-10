<script setup>
import StudentContent from "@/components/text_content/StudentContent.vue"
import Quote from "@/components/Quote.vue"
import { useQuotes } from "@/compostables/quotes";

const { student_quote } = useQuotes()

const message = student_quote
</script>


<template>
    <Quote :message />
    <StudentContent />
    <div class="flex">
        <!-- Knapper -->
    </div>
    <!-- Kontakt -->
</template>