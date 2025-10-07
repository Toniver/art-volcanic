<template>
  <Navbar />
  <router-view />
  <footer>
    © {{ new Date().getFullYear() }} Art Volcànic · Arte en Madera y Color
  </footer>
</template>

<script setup>
import Navbar from "./components/Navbar.vue";
</script>
