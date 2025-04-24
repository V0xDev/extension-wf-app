<script setup lang="ts">
import { injectModal } from '@/store/store.provide-modal'

const { state, close } = injectModal()
</script>

<template>
  <Transition name="fade">
    <div
      v-if="state"
      class="modal"
      :class="[{ 'pointer-events-auto bg-black/90': state }]"
      @click="close"
    >
      <div class="slide bg-dark-accent">
        <slot />
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
</style>
