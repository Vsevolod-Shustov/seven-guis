<script setup lang="ts">
interface Props {
  count?: number
}
const props = withDefaults(defineProps<Props>(), { count: -1 })
defineEmits(['handleClick'])
</script>

<template>
  <p>{{ count }}</p>
  <button @click="$emit('handleClick')">Click Me</button>
</template>
