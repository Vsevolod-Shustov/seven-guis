<script setup lang="ts">
import { reactive } from 'vue'
import InlineEditor from '@/components/InlineEditor.vue'

class Employee {
  static #idCounter = 0
  id: number
  name: string
  surname: string
  salary: number
  probation: boolean = false
  constructor(name: string, surname: string, salary: number, probation: boolean = false) {
    this.id = ++Employee.#idCounter
    this.name = name
    this.surname = surname
    this.salary = salary
    this.probation = probation
  }
}

const employees = reactive<Employee[]>([
  new Employee('John', 'Smith', 1000),
  new Employee('Jane', 'Doe', 800, true),
])

const newEmployee = reactive({
  name: '',
  surname: '',
  salary: 0,
  probation: false,
})

function addEmployee() {
  if (!newEmployee.name || !newEmployee.surname || !newEmployee.salary) return

  employees.push(
    new Employee(
      newEmployee.name,
      newEmployee.surname,
      Number(newEmployee.salary),
      newEmployee.probation,
    ),
  )

  newEmployee.name = ''
  newEmployee.surname = ''
  newEmployee.salary = 0
  newEmployee.probation = false
}
</script>

<template>
  <div class="page">
    <h1>CRUD</h1>
    <form @submit.prevent="addEmployee" class="employee-form">
      <table>
        <tbody>
          <tr>
            <td><label for="name">Name</label></td>
            <td>
              <input id="name" v-model="newEmployee.name" type="text" placeholder="First name" />
            </td>
          </tr>
          <tr>
            <td><label for="surname">Surname</label></td>
            <td>
              <input
                id="surname"
                v-model="newEmployee.surname"
                type="text"
                placeholder="Last name"
              />
            </td>
          </tr>
          <tr>
            <td><label for="salary">Salary</label></td>
            <td>
              <input
                id="salary"
                v-model="newEmployee.salary"
                type="number"
                min="0"
                placeholder="Salary"
              />
            </td>
          </tr>
          <tr>
            <td><label for="probation">Probation</label></td>
            <td><input id="probation" v-model="newEmployee.probation" type="checkbox" /></td>
          </tr>
          <tr>
            <td colspan="2" class="actions">
              <button type="submit">Add Employee</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>

    <table class="employees-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Surname</th>
          <th>Salary</th>
          <th>Probation</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="e in employees" :key="e.id">
          <td>{{ e.id }}</td>
          <td>
            <InlineEditor v-model="e.name" style="display: inline" />
          </td>
          <td>
            <InlineEditor v-model="e.surname" />
          </td>
          <td>
            <InlineEditor v-model="e.salary" />
          </td>
          <td>
            <InlineEditor v-model="e.probation" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
table.employees-table {
  border-collapse: collapse;

  tr {
    padding: 4px;
  }
  thead,
  tr:not(:last-of-type) {
    border-bottom: 1px solid black;
  }
  td {
    padding-inline: 4px;
  }
}
</style>
