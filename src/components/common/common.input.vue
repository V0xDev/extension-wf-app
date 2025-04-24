<script setup lang="ts">
const model = defineModel<string>({ required: true, default: '' })
</script>

<template>
  <!-- prettier-ignore-attribute -->
  <input
    class="text-16 font-medium rounded-8 px-14 py-12 bg-transparent
    placeholder-gray-400 ring-border-opacity border-2 border-border-opacity
      focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-transparent
      transition-all duration-200"
    v-model="model"
    type="text"
  />
</template>
