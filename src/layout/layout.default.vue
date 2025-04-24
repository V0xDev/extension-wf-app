<script setup lang="ts">
// import { hasPairs, isAccessExpired } from '@/lib/api/jwt'

// const router = useRouter()

// if (hasPairs() && !isAccessExpired()) {
//   router.push('/')
// }
</script>

<template>
  <div class="w-[380px] h-[550px] border-2 border-border-opacity flex flex-col">
    <slot />
  </div>
</template>
