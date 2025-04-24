import { createRouter, createWebHistory } from 'vue-router'
import { StatsView } from '@/pages/stats'
import { MainView } from '@/pages/main'

const router = createRouter({
  history: createWebHistory(),
  routes: [MainView, StatsView],
})

export { router }
