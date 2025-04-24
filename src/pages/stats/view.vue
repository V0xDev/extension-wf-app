<script setup lang="ts">
import { AppPageHeader } from '@/components/app'
import { BlockStatistic } from '@/components/composed/block'
import { providePlayerStats } from '@/store/store.provide'

providePlayerStats()
</script>

<template>
  <AppPageHeader />
  <BlockStatistic />
</template>
