import { createRouter, createMemoryHistory } from 'vue-router'
import { StatsView } from '@/pages/stats'
import { MainView } from '@/pages/main'
import { setupPlayerRedirect } from '@/lib/middleware/router/setup.player-redirect'

const router = createRouter({
  history: createMemoryHistory(),
  routes: [MainView, StatsView],
})

setupPlayerRedirect(router)

export { router }
