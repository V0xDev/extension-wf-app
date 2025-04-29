<script lang="ts" setup>
import { provideModal } from '@/lib/provide/provide.modal'

const { state } = provideModal()
</script>

<template>
  <div class="bg-bg layout" :class="{ 'overflow-hidden': state }">
    <slot />
  </div>
</template>
