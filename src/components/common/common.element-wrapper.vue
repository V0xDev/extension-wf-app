<script setup lang="ts">
type Props = {
  title?: string
}

defineProps<Props>()
</script>

<template>
  <div class="flex flex-col gap-8 border-2 border-white/20 rounded-8 px-10 py-10">
    <h2 class="font-medium text-16 leading-16">{{ title }}</h2>
    <slot />
  </div>
</template>
