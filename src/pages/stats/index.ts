import View from './view.vue'
import type { RouteRecordRaw } from 'vue-router'

export const StatsView: RouteRecordRaw = {
  path: '/stats/:name',
  name: 'stats',
  component: View,
}
