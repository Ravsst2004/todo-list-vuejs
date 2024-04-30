import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'todo',
      component: HomeView
    },
    {
      path: '/done-task',
      name: 'done-task',
      component: () => import('../views/DoneView.vue')
    },
    {
      path: '/available-task',
      name: 'available-task',
      component: () => import('../views/AvailableView.vue')
    }
  ]
})

export default router
