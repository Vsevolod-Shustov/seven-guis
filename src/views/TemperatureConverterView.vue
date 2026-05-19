<script setup lang="ts">
import { ref } from 'vue'

const celsius = ref(0)
const farenheit = ref(32)

type lastUpdatedValues = 'c' | 'f' | null

const lastUpdated = ref<lastUpdatedValues>(null)
let debounceTimer: number | null = null
const delay = 250

function triggerDebouncedUpdate(a: lastUpdatedValues = null) {
  if (a) {
    lastUpdated.value = a
  }
  if (debounceTimer) window.clearTimeout(debounceTimer)
  debounceTimer = window.setTimeout(() => {
    if (lastUpdated.value === 'c') {
      farenheit.value = celsius.value * (9 / 5) + 32
    } else if (lastUpdated.value === 'f') {
      celsius.value = (farenheit.value - 32) * (5 / 9)
    }
    lastUpdated.value = null
  }, delay)
}
</script>

<template>
  <div class="page">
    <h1>Temperature Converter</h1>
    <input type="number" v-model.number="celsius" @input="triggerDebouncedUpdate('c')" /> Celsius =
    <input type="number" v-model.number="farenheit" @input="triggerDebouncedUpdate('f')" />
    Fahrenheit
  </div>
</template>

<style scoped></style>
