<script setup>
  import Header from "@/components/_Header.vue"
  import Footer from "@/components/_Footer.vue"
</script>


<!-- App.vue -->
<template>
  <Header />
  <main>
    <router-view />
  </main>
  <Footer />
</template>