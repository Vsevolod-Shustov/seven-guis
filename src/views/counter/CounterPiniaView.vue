<script setup lang="ts">
import { ref } from 'vue'
import { useCounterStore } from '@/stores/counter'
import { storeToRefs } from 'pinia'

const store = useCounterStore()

const { count } = storeToRefs(store)

const handleClick = function () {
  store.increment()
}
</script>

<template>
  <p>{{ count }}</p>
  <button @click="handleClick">increment</button>
</template>

<style></style>
