import { computed, shallowRef } from 'vue'

export function useLocalStorage(key: string, initialValue: string) {
  const valueRef = shallowRef()

  const stored = localStorage.getItem(key)
  if (stored !== null) {
    valueRef.value = stored
  } else {
    valueRef.value = stored
    localStorage.setItem(key, initialValue)
  }

  const setValue = (value: string) => {
    valueRef.value = value
    localStorage.setItem(key, value)
  }

  const getValue = computed(() => valueRef.value)

  const removeValue = () => {
    valueRef.value = initialValue
    localStorage.removeItem(key)
  }

  return {
    setValue,
    getValue,
    removeValue,
  }
}
