<script setup>
import { useRoute } from "vue-router";
import { CITIES } from "../const.js";

const route = useRoute();

defineEmits(["deactiveCityModal", "getCityName"]);
</script>
<template>
  <div class="header__city">
    <div class="header__city-content">
      <ul class="header__city-list" style="columns: 5">
        <li class="header__city-item" v-for="(cityName, citySlug) in CITIES">
          <router-link
            :to="{ name: route.name, params: { city: citySlug } }"
            >{{ cityName }}</router-link
          >
        </li>
      </ul>
      <div class="header__city-close" @click="$emit('close')"></div>
    </div>
  </div>
</template>
