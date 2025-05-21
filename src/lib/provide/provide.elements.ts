import { ELEMENTS_STATISTIC } from '@/lib/constants/constant.elements'
import { Component, computed, inject, provide, reactive } from 'vue'

const ELEMENTS_STORE_KEY = '$elements-store-key'

type ElementsProvided = ReturnType<typeof provideElements>

export type ComponentStatistic = {
  name: string
  component: Component
  visible: boolean
}

export function provideElements() {
  const components = reactive<ComponentStatistic[]>(ELEMENTS_STATISTIC)

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
