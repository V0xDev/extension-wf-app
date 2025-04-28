<script setup lang="ts">
import { injectTheme } from '@/lib/provide/provide.theme'
import { useRouter } from 'vue-router'

const router = useRouter()

// const { hasTheme, theme } = injectTheme()

// if (hasTheme()) {
//   router.push('/')
// }
</script>

<template>
  <div class="bg-bg layout">
    <slot />
  </div>
</template>
