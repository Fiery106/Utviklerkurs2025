<script setup>
  import Header from "@/components/_Header.vue"
  import Main from "@/components/_Main.vue"
  import Footer from "@/components/_Footer.vue"

  import { RouterView } from "vue-router"
</script>


<template>
  <Header />
  <RouterView />
</template>


<style scoped>

</style>
