import { SelectOption } from '@/components/common/common.select.vue'
import { Theme } from '@/lib/types/types.theme'

export enum THEME {
  LIGHT = 'light',
  DARK = 'dark',
  SYSTEM = 'system',
}

export const OPTIONS = new Map<Theme, SelectOption<Theme>>([
  [
    'system',
    {
      key: 1,
      raw: 'system',
      display: 'Системная',
    },
  ],
  [
    'dark',
    {
      key: 2,
      raw: 'dark',
      display: 'Темная',
    },
  ],
  [
    'white',
    {
      key: 3,
      raw: 'white',
      display: 'Светлая',
    },
  ],
])
