<script setup lang="ts">
// import { hasPairs, isAccessExpired } from '@/lib/api/jwt'

// const router = useRouter()

// if (hasPairs() && !isAccessExpired()) {
//   router.push('/')
// }
</script>

<template>
  <div class="layout bg-bg items-center gap-20 px-14 py-18">
    <slot />
  </div>
</template>
