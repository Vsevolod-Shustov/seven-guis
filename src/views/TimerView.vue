<script setup lang="ts">
import { ref, onUnmounted, computed, watch, watchEffect } from 'vue'
const duration = ref(15 * 1000)
const elapsed = ref(0)
const done = ref(false)
const doneElapsedTime = ref(0)
const doneTime = ref(0)
const thisTick = ref(0)
const lastTick = ref(0)

let now = 0
let handle: number

const update = () => {
  elapsed.value = elapsed.value + performance.now() - lastTick.value
  if (!done.value && elapsed.value >= duration.value) {
    cancelAnimationFrame(handle)
    done.value = true
    doneElapsedTime.value = elapsed.value
  } else {
    handle = requestAnimationFrame(update)
    lastTick.value = performance.now()
  }
}

const reset = () => {
  done.value = false
  elapsed.value = 0
  doneElapsedTime.value = 0
  lastTick.value = thisTick.value = performance.now()
  update()
}

const cont = () => {
  done.value = false
  lastTick.value = thisTick.value = performance.now()
  update()
}

const progressRate = computed(() => Math.min(elapsed.value / duration.value, 1))

reset()

watch(duration, () => {
  if (done.value && duration.value >= elapsed.value) {
    cont()
  }
})

onUnmounted(() => {
  cancelAnimationFrame(handle)
})
</script>

<template>
  <div class="page">
    <label>Elapsed Time: <progress :value="progressRate"></progress></label>

    <div>Elapsed Time: {{ (elapsed / 1000).toFixed(1) }}s</div>

    <div>Done Elapsed Time: {{ (doneElapsedTime / 1000).toFixed(1) }}s</div>

    <div>Done: {{ done.toString() }}</div>

    <div>
      Duration: <input type="range" v-model="duration" min="1" max="30000" />
      {{ (duration / 1000).toFixed(1) }}s
    </div>

    <button @click="reset">Reset</button>
  </div>
</template>

<style scoped>
.elapsed-container {
  width: 300px;
}

.elapsed-bar {
  background-color: red;
  height: 10px;
}
</style>
