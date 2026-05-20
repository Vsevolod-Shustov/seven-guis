<script setup lang="ts">
import { ref, computed } from 'vue'

type FlightType = 'one-way flight' | 'return flight'

const flightType = ref<FlightType>('one-way flight')
const departureDate = ref(dateToString(new Date()))
const returnDate = ref(departureDate.value)

const isReturn = computed(() => flightType.value === 'return flight')

const canBook = computed(
  () => !isReturn.value || stringToDate(returnDate.value) > stringToDate(departureDate.value),
)

function book() {
  alert(
    isReturn.value
      ? `You have booked a return flight leaving on ${departureDate.value} and returning on ${returnDate.value}.`
      : `You have booked a one-way flight leaving on ${departureDate.value}.`,
  )
}

function stringToDate(str: string): Date {
  const parts = str.split('-')
  if (parts.length !== 3) {
    throw new Error('Invalid date format. Expected YYYY-MM-DD.')
  }

  const year = Number(parts[0])
  const month = Number(parts[1])
  const day = Number(parts[2])

  if (Number.isNaN(year) || Number.isNaN(month) || Number.isNaN(day)) {
    throw new Error('Invalid date components.')
  }

  return new Date(year, month - 1, day)
}

function dateToString(date: Date) {
  return date.getFullYear() + '-' + pad(date.getMonth() + 1) + '-' + pad(date.getDate())
}

function pad(n: number, s = String(n)) {
  return s.length < 2 ? `0${s}` : s
}
</script>

<template>
  <div class="page">
    <select v-model="flightType">
      <option value="one-way flight">One-way Flight</option>
      <option value="return flight">Return Flight</option>
    </select>
    <input type="date" v-model="departureDate" />
    <input type="date" v-model="returnDate" :disabled="!isReturn" />
    <button :disabled="!canBook" @click="book">Book</button>
    <p>{{ canBook ? '' : 'Return date must be after departure date.' }}</p>
  </div>
</template>

<style scoped>
select,
input,
button {
  display: block;
  margin: 0.5em 0;
  font-size: 15px;
}

input[disabled] {
  color: #999;
}

p {
  color: red;
}
</style>
