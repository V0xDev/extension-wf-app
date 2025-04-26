<script setup lang="ts">
import { injectPlayerStats } from '@/provide/store.provide-player'
import { SkeletonStatistic } from '@/components/composed/skeleton'
import { CommonSkeletonWrapper } from '@/components/common'
import {
  ElementMetric,
  ElementStatisticPvP,
  ElementStatisticPvE,
  ElementStatisticGames,
  ElementLoveClass,
} from '@/components/composed/element'

const { data, isLoading, isError } = injectPlayerStats()
</script>

<template>
  <div class="flex-1 overflow-y-auto px-14 py-18">
    <CommonSkeletonWrapper v-if="isLoading">
      <SkeletonStatistic />
    </CommonSkeletonWrapper>
    <p class="text-secondary mt-24 text-center text-14 leading-18" v-else-if="isError">
      Ошибка загрузки данных: пользователь не найден
    </p>
    <div class="flex flex-col gap-10" v-else>
      <ElementMetric v-bind="data" />
      <ElementLoveClass v-bind="data" />
      <ElementStatisticGames v-bind="data" />
      <ElementStatisticPvP v-bind="data" />
      <ElementStatisticPvE v-bind="data" />
    </div>
  </div>
</template>
