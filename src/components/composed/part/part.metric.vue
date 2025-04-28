<script setup lang="ts">
import { CommonPartStatWrapper } from '@/components/common'
import { prettyNumber } from '@/lib/utils/utils.number'

type Props = {
  title: string
  value: string | number | boolean
}

defineProps<Props>()
</script>

<template>
  <CommonPartStatWrapper>
    <h2 class="font-medium text-14 leading-14 text-secondary">{{ title }}</h2>
    <p class="font-bold text-16 leading-16 text-primary">{{ prettyNumber(value) }}</p>
  </CommonPartStatWrapper>
</template>
