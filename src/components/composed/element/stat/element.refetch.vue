<script setup lang="ts">
import { CommonIconWrapper } from '@/components/common'
import { IconReload } from '@/components/icon'
import { injectPlayerStats } from '@/lib/provide/provide.player'
import { useThrottleFn } from '@vueuse/core'
import { computed, shallowRef } from 'vue'

const { refetch } = injectPlayerStats()

const lastDate = shallowRef<Date | null>(null)
const animate = shallowRef(false)

const throttledRefetch = useThrottleFn(
  () => {
    animate.value = true
    lastDate.value = new Date()
    refetch()

    setTimeout(() => (animate.value = false), 1500)
  },
  1500,
  false,
  true,
)

const lastDateUpdate = computed(() => {
  if (!lastDate.value) return 'Обновлено только что'
  return `Обновлено в ${lastDate.value.toLocaleTimeString('ru-RU', {
    hour: '2-digit',
    minute: '2-digit',
  })}`
})
</script>

<template>
  <div class="relative rounded-14 px-10 py-10">
    <p class="text-secondary text-center text-16 leading-16">{{ lastDateUpdate }}</p>
    <button class="absolute right-11 top-5" @click="throttledRefetch">
      <CommonIconWrapper
        width="20"
        class="text-icon/50 hover:text-icon transition-colors"
        :class="{ 'animate-spin cursor-default hover:text-icon/50': animate }"
      >
        <IconReload />
      </CommonIconWrapper>
    </button>
  </div>
</template>
