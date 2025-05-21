import {
  ElementLoveClass,
  ElementMetric,
  ElementStatisticGames,
  ElementStatisticPvE,
  ElementStatisticPvP,
} from '@/components/composed/element'
import { ComponentStatistic } from '@/lib/provide/provide.elements'
import { markRaw } from 'vue'

export const ELEMENTS_STATISTIC: ComponentStatistic[] = [
  {
    name: 'Ключевые метрики PvP',
    component: markRaw(ElementMetric),
    visible: true,
  },
  {
    name: 'Любимые классы',
    component: markRaw(ElementLoveClass),
    visible: true,
  },
  {
    name: 'Сыграно игр',
    component: markRaw(ElementStatisticGames),
    visible: true,
  },
  {
    name: 'Статистика PvE',
    component: markRaw(ElementStatisticPvE),
    visible: true,
  },
  {
    name: 'Статистика PvP',
    component: markRaw(ElementStatisticPvP),
    visible: true,
  },
]
