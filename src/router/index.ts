import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CounterBasicView from '@/views/counter/CounterBasicView.vue'
import CounterComponentView from '@/views/counter/CounterComponentView.vue'
import CounterPiniaView from '@/views/counter/CounterPiniaView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { transition: 'slide' },
    },
    {
      path: '/counter',
      name: 'counter',
      component: () => import('../views/CounterView.vue'),
      meta: { transition: 'slide' },
      children: [
        {
          path: 'basic',
          name: 'counter-basic',
          component: () => import('../views/counter/CounterBasicView.vue'),
        },
        {
          path: 'component',
          name: 'counter-component',
          component: () => import('../views/counter/CounterComponentView.vue'),
        },
        {
          path: 'pinia',
          name: 'counter-pinia',
          component: () => import('../views/counter/CounterPiniaView.vue'),
        },
      ],
    },
    {
      path: '/temperature-converter',
      name: 'temperature-converter',
      component: () => import('../views/TemperatureConverterView.vue'),
      meta: { transition: 'slide' },
    },
    {
      path: '/flight-booker',
      name: 'flight-booker',
      component: () => import('../views/FlightBookerView.vue'),
      meta: { transition: 'slide' },
    },
    {
      path: '/timer',
      name: 'timer',
      component: () => import('../views/TimerView.vue'),
      meta: { transition: 'slide' },
    },
    {
      path: '/crud',
      name: 'crud',
      component: () => import('../views/CrudView.vue'),
      meta: { transition: 'slide' },
    },
  ],
})

import { ref } from 'vue'

router.beforeEach((to, from) => {
  lastRoutePath.value = from.path
  return true
})

export default router
export const lastRoutePath = ref<string>('')
