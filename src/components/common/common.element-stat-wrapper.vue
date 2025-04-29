<script setup lang="ts">
import { CommonIconWrapper } from '@/components/common'
import { IconClose } from '@/components/icon'
import { ComponentStatistic } from '@/lib/provide/provide.elements'

type Props = {
  block: ComponentStatistic
  title?: string
}

defineProps<Props>()
</script>

<template>
  <div
    v-if="block.visible"
    class="relative flex flex-col gap-12 bg-tertiary/50 rounded-14 px-10 py-18"
  >
    <h2 class="text-primary text-center font-bold text-18 leading-18">{{ title }}</h2>
    <button class="absolute right-14 top-16" @click="block.visible = false">
      <CommonIconWrapper width="14" height="14" class="text-icon/50">
        <IconClose />
      </CommonIconWrapper>
    </button>
    <slot />
  </div>
</template>
