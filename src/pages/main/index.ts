import View from './view.vue'
import type { RouteRecordRaw } from 'vue-router'

export const MainView: RouteRecordRaw = {
  path: '/',
  name: 'main',
  component: View,
  meta: {
    layout: 'started',
  },
}
