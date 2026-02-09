import { createRouter, createWebHistory } from 'vue-router'
import UserCreate from '@/views/UserCreate.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/create',
      name: 'world',
      component: UserCreate,
    },
  ],
})

export default router
