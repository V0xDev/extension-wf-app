<script setup lang="ts">
import { computed, shallowRef } from 'vue'
import { RouterView, useRoute } from 'vue-router'
import LayoutDefault from '@/layout/layout.default.vue'
import LayoutStated from '@/layout/layout.stated.vue'
import { provideModal } from '@/store/store.provide-modal'
import { ElementModalSettings } from '@/components/composed/element'

const layouts = {
  default: LayoutDefault,
  started: LayoutStated,
}

const route = useRoute()

const meta = computed(() => route.meta)

const layoutComponent = computed(
  () => layouts[(meta.value.layout || 'default') as keyof typeof layouts],
)
provideModal()
</script>

<template>
  <component :is="layoutComponent">
    <RouterView />
    <ElementModalSettings />
  </component>
</template>
