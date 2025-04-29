<script setup lang="ts">
import { injectPlayerStats } from '@/lib/provide/provide.player'
import { SkeletonStatistic } from '@/components/composed/skeleton'
import { CommonElementStatWrapper, CommonSkeletonWrapper } from '@/components/common'
import { injectElements } from '@/lib/provide/provide.elements'

const { data, isLoading, isError } = injectPlayerStats()

const { components, isVisibleComponents } = injectElements()
</script>

<template>
  <div class="flex-1 overflow-y-auto px-14 py-18">
    <CommonSkeletonWrapper v-if="isLoading">
      <SkeletonStatistic />
    </CommonSkeletonWrapper>
    <p class="text-secondary mt-24 text-center text-14 leading-18" v-else-if="isError">
      Ошибка загрузки данных: пользователь не найден
    </p>
    <p class="text-secondary mt-24 text-center text-14 leading-18" v-else-if="isVisibleComponents">
      Все блоки статистики отключены в настройках.
    </p>
    <div class="flex flex-col gap-10" v-else>
      <CommonElementStatWrapper v-for="comp in components" :title="comp.name" :block="comp">
        <component :is="comp.component" v-bind="data"></component>
      </CommonElementStatWrapper>
    </div>
  </div>
</template>
