<script setup>
import Footer from "./components/Footer.vue";
import Header from "./components/Header.vue";

import { useRoute } from "vue-router";

const route = useRoute();
</script>

<template>
  <div class="wrapper">
    <Header :key="route.fullPath"/>
    <router-view :key="route.fullPath"></router-view>
    <Footer />
  </div>
</template>

<style></style>
