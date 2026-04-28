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
    },
    {
      path: '/counter',
      name: 'counter',
      component: () => import('../views/CounterView.vue'),
      children: [
        {
          path: 'basic',
          component: CounterBasicView,
        },
        {
          path: 'component',
          component: CounterComponentView,
        },
        {
          path: 'pinia',
          component: CounterPiniaView,
        },
      ],
    },
  ],
})

export default router
