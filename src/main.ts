import { createApp } from 'vue'
import { router } from '@/router'
import App from '@/App.vue'
import { VueQueryPlugin } from '@tanstack/vue-query'
import '@/api/api.instance'

createApp(App).use(VueQueryPlugin).use(router).mount('#app')
