import { computed, shallowRef } from 'vue'

export function useLocalStorage<T>(key: string, initialValue?: T) {
  const valueRef = shallowRef()

  const stored = localStorage.getItem(key)
  if (stored) {
    valueRef.value = stored
  } else if (initialValue) {
    valueRef.value = initialValue
    localStorage.setItem(key, JSON.stringify(initialValue))
  }

  const setValue = (value: T) => {
    valueRef.value = value
    localStorage.setItem(key, JSON.stringify(value))
  }

  const getValue = computed(() => {
    if (valueRef.value) {
      return JSON.parse(valueRef.value)
    }

    return undefined
  })

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
