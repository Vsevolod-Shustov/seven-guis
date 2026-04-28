<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="page">
    <h1>Counters</h1>
    <nav>
      <RouterLink to="/basic">Basic</RouterLink>
      <RouterLink to="/component">Component</RouterLink>
      <RouterLink to="/pinia">Pinia</RouterLink>
    </nav>
    <RouterView></RouterView>
  </div>
</template>

<style scoped>
.page {
  background-color: rgba(0, 0, 255, 0.1);
}
</style>
