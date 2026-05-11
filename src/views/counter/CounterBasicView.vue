<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)

const handleClick = function () {
  count.value++
}
</script>

<template>
  <p>{{ count }}</p>
  <button @click="handleClick">increase</button>
</template>

<style></style>
