import { SelectOption } from '@/components/common/common.select.vue'
import { OPTIONS, THEME } from '@/constants/theme'
import { Theme } from '@/types/types.theme'
import { inject, provide, shallowRef } from 'vue'

const THEME_STORE_KEY = '$theme-store-key'

const THEME_LOCAL_STORAGE_KEY = '$theme'

type ThemeProvided = ReturnType<typeof provideTheme>

export function provideTheme() {
  const theme = shallowRef<SelectOption<Theme>>(OPTIONS.get('system'))

  const getTheme = () => {
    const theme = localStorage.getItem(THEME_LOCAL_STORAGE_KEY)

    if (theme) {
      return theme
    }
    return undefined
  }

  const setTheme = (value: Theme) => {
    theme.value = OPTIONS.get(value)
    localStorage.setItem(THEME_LOCAL_STORAGE_KEY, value)

    document.documentElement.setAttribute('data-theme', theme.value.raw)
  }

  const initialStorage = () => {
    const hasTheme = getTheme() as Theme

    if (hasTheme) {
      setTheme(hasTheme)
      return
    }

    setTheme('system')
  }

  const toProvide = { theme, setTheme, getTheme, initialStorage }

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
