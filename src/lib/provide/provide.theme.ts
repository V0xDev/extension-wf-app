import { OPTIONS, THEME } from '@/lib/constants/constant.theme'
import { useLocalStorage } from '@/lib/hooks/hook.local-storage'
import { Theme } from '@/lib/types/types.theme'
import { computed, inject, provide, shallowRef } from 'vue'

const THEME_STORE_KEY = '$theme-store-key'
const THEME_LOCAL_STORAGE_KEY = '$theme'

type ThemeProvided = ReturnType<typeof provideTheme>

export function provideTheme() {
  const { setValue, getValue } = useLocalStorage(THEME_LOCAL_STORAGE_KEY, THEME.SYSTEM)

  const theme = computed(() => OPTIONS.get(getValue.value))
  const optionsTheme = computed(() => [...OPTIONS.values()])

  const setTheme = (value: Theme) => {
    const theme = OPTIONS.get(value)
    setValue(theme.raw)

    document.documentElement.setAttribute('data-theme', theme.raw)
  }

  const initialTheme = () => setTheme(getValue.value)

  const toProvide = { theme, setTheme, initialTheme, optionsTheme }

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
