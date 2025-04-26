<script setup lang="ts">
type Props = {
  title: string
}

defineProps<Props>()
</script>

<template>
  <div class="settings flex flex-col gap-15">
    <h2 class="font-bold text-18 leading-18 text-primary">{{ title }}</h2>
    <slot />
  </div>
</template>
