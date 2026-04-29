<script setup lang="ts">
import { RouterView } from 'vue-router'
import Nav from '@/components/Nav.vue'
</script>

<template>
  <div class="page">
    <h1>Counters</h1>
    <Nav>
      <RouterLink to="/basic">Basic</RouterLink>
      <RouterLink to="/component">Component</RouterLink>
      <RouterLink to="/pinia">Pinia</RouterLink>
    </Nav>
    <RouterView></RouterView>
  </div>
</template>

<style scoped>
.page {
  background-color: rgba(0, 0, 255, 0.1);
}
</style>
