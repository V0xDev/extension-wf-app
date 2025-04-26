<script setup lang="ts">
import { AppPageHeader } from '@/components/app'
import { BlockStatistic } from '@/components/composed/block'
import { providePlayerStats } from '@/provide/provide.player'

providePlayerStats()
</script>

<template>
  <AppPageHeader />
  <BlockStatistic />
</template>
