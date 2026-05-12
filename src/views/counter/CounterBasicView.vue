<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)

const sessionStorageValue = sessionStorage.getItem('basicCounterValue')
if (sessionStorageValue !== null) {
  count.value = Number(sessionStorageValue)
}

const handleClick = function () {
  count.value++
  sessionStorage.setItem('basicCounterValue', count.value.toString())
}
</script>

<template>
  <p>{{ count }}</p>
  <button @click="handleClick">increase</button>
</template>

<style></style>
