<script setup lang="ts">
const model = defineModel<string>({ required: true, default: '' })
</script>

<template>
  <!-- prettier-ignore-attribute -->
  <input
    class="placeholder-input-secondary text-input-text
      border-tertiary focus:ring-secondary
      text-16 rounded-8 px-14 py-12 bg-transparent
      border-2 focus:outline-none focus:ring-2 focus:border-transparent
      transition-all duration-200"
    v-model="model"
    type="text"
  />
</template>
