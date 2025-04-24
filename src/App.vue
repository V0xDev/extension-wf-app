<script setup lang="ts">
import { computed } from 'vue'
import { RouterView, useRoute } from 'vue-router'
import LayoutDefault from '@/layout/layout.default.vue'
import LayoutStated from '@/layout/layout.stated.vue'

const layouts = {
  default: LayoutDefault,
  started: LayoutStated,
}

const route = useRoute()

const meta = computed(() => route.meta)

const layoutComponent = computed(
  () => layouts[(meta.value.layout || 'default') as keyof typeof layouts],
)
</script>

<template>
  <component :is="layoutComponent">
    <RouterView />
  </component>
</template>
