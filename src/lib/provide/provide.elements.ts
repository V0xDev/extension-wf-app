import {
  ElementLoveClass,
  ElementMetric,
  ElementStatisticGames,
} from '@/components/composed/element'
import ElementStatisticPve from '@/components/composed/element/stat/element.statistic-pve.vue'
import ElementStatisticPvp from '@/components/composed/element/stat/element.statistic-pvp.vue'
import { Component, computed, inject, provide, reactive } from 'vue'

const ELEMENTS_STORE_KEY = '$elements-store-key'

type ElementsProvided = ReturnType<typeof provideElements>

export type ComponentStatistic = {
  name: string
  component: Component
  visible: boolean
}

export function provideElements() {
  const components = reactive<ComponentStatistic[]>([
    {
      name: 'Ключевые метрики PvP',
      component: ElementMetric,
      visible: true,
    },
    {
      name: 'Любимые классы',
      component: ElementLoveClass,
      visible: true,
    },
    {
      name: 'Сыграно игр',
      component: ElementStatisticGames,
      visible: true,
    },
    {
      name: 'Статистика PvE',
      component: ElementStatisticPve,
      visible: true,
    },
    {
      name: 'Статистика PvP',
      component: ElementStatisticPvp,
      visible: true,
    },
  ])

  const isVisibleComponents = computed(() => components.every((item) => item.visible === false))

  const toProvide = {
    components,
    isVisibleComponents,
  }

  provide(ELEMENTS_STORE_KEY, toProvide)
  return toProvide
}

export function injectElements() {
  const store = inject<ElementsProvided | undefined>(ELEMENTS_STORE_KEY)

  if (!store) {
    console.log('[provide/inject] elements not provided!!')
    return
  }

  return store
}
