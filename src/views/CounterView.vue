<script setup lang="ts">
import { RouterView } from 'vue-router'
import Nav from '@/components/Nav.vue'
</script>

<template>
  <div class="page">
    <h1>Counters</h1>
    <Nav>
      <RouterLink to="/counter/basic">Basic</RouterLink>
      <RouterLink to="/counter/component">Component</RouterLink>
      <RouterLink to="/counter/pinia">Pinia</RouterLink>
    </Nav>
    <RouterView></RouterView>
  </div>
</template>

<style scoped>
.page {
}
Nav {
  margin-bottom: 1rem;
}
</style>
