<script setup lang="ts">
import { injectPlayerStats } from '@/store/store.provide'
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
  <div class="flex-1 overflow-y-auto">
    <CommonSkeletonWrapper v-if="isLoading">
      <SkeletonStatistic />
    </CommonSkeletonWrapper>
    <p class="mt-24 text-center text-14 leading-18 opacity-40" v-else-if="isError">
      Ошибка загрузки данных: пользователь не найден
    </p>
    <div class="flex flex-col gap-10" v-else>
      <ElementMetric v-bind="data" />
      <ElementStatisticGames v-bind="data" />
      <ElementStatisticPvP v-bind="data" />
      <ElementStatisticPvE v-bind="data" />
      <ElementLoveClass v-bind="data" />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
