<script setup lang="ts">
import { ref, computed, watch } from 'vue'

const props = defineProps<{ modelValue: any; type?: string }>()
const emit = defineEmits<{ (e: 'update:modelValue', value: any): void }>()

const editing = ref(false)
const local = ref(props.modelValue)

watch(
  () => props.modelValue,
  (v) => {
    if (!editing.value) local.value = v
  },
)

const displayValue = computed(() => {
  return props.modelValue
})

function startEdit() {
  editing.value = true
  local.value = props.modelValue
}

function commit() {
  editing.value = false
  emit('update:modelValue', local.value)
}
</script>

<template>
  <span v-if="!editing" @click="startEdit" class="inline-display">
    {{ displayValue }}
  </span>
  <input v-else v-model="local" @blur="commit" @keydown.enter="commit" class="inline-input" />
</template>

<style>
.inline-display {
  display: inline-block;
  padding: 2px 6px;
  cursor: pointer;
}
.inline-input {
  width: 100%;
  box-sizing: border-box;
}
</style>
