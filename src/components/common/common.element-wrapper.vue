<script setup lang="ts">
import { CommonIconWrapper } from '@/components/common'
import { IconClose } from '@/components/icon'
import { shallowRef } from 'vue'

type Props = {
  title?: string
}

defineProps<Props>()

type Emits = {
  (e: 'onHide'): void
}

const emits = defineEmits<Emits>()
</script>

<template>
  <div class="flex flex-col gap-8 border-2 border-tertiary rounded-8 px-10 py-10">
    <div class="flex items-center justify-between">
      <h2 class="text-primary font-medium text-16 leading-16">{{ title }}</h2>
      <button @click="emits('onHide')">
        <CommonIconWrapper class="text-icon">
          <IconClose />
        </CommonIconWrapper>
      </button>
    </div>
    <slot />
  </div>
</template>
