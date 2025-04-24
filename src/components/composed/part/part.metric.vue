<script setup lang="ts">
import { CommonPartWrapper } from '@/components/common'
import { prettyNumber } from '@/utils/number'

type Props = {
  title: string
  value: number
}

defineProps<Props>()
</script>

<template>
  <CommonPartWrapper>
    <h2 class="font-medium text-16 leading-16 text-dark">{{ title }}</h2>
    <p class="font-bold text-16 leading-16 text-dark opacity-50">{{ prettyNumber(value) }}</p>
  </CommonPartWrapper>
</template>
