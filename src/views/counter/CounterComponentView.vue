<script setup lang="ts">
import { ref } from 'vue'
import CounterComponentChild from './CounterComponentChild.vue'

const count = ref<number>(0)

const sessionStorageValue = sessionStorage.getItem('componentCounterValue')
if (sessionStorageValue !== null) {
  count.value = Number(sessionStorageValue)
}

const handleClick = function () {
  count.value++
  sessionStorage.setItem('componentCounterValue', count.value.toString())
}
</script>

<template>
  <CounterComponentChild :count @handle-click="handleClick"></CounterComponentChild>
</template>

<style></style>
