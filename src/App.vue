<script setup>
  import Header from "@/components/_Header.vue"
  import Footer from "@/components/_Footer.vue"
</script>


<!-- App.vue -->
<!-- Kanskje dette er litt cursed men jeg liker å holde meg til en typisk layout. Ikke døm meg :P -->
<template>
  <Header />
  <main>
    <router-view />
  </main>
  <Footer />
</template>