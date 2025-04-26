import { OPTIONS } from '@/constants/theme'
import { inject, provide, shallowRef } from 'vue'

const THEME_STORE_KEY = '$theme-store-key'

type ThemeProvided = ReturnType<typeof provideTheme>

export function provideTheme() {
  // const theme = shallowRef(OPTIONS[0])
  // const show = () => (state.value = true)
  // const close = () => (state.value = false)
  const toProvide = {}

  provide(THEME_STORE_KEY, toProvide)
  return toProvide
}

export function injectTheme() {
  const store = inject<ThemeProvided | undefined>(THEME_STORE_KEY)

  if (!store) {
    console.log('[provide/inject] theme not provided!!')
    return
  }

  return store
}
