<script setup lang="ts" generic="T">
import { computed, useTemplateRef } from 'vue'
import { onClickOutside } from '@vueuse/core'
import { CommonIconWrapper } from '@/components/common'
import { IconArrowDown } from '@/components/icon'

export type SelectOption<T> = {
  key: number | string
  display: string
  raw: T
}

type Props<T> = {
  options: SelectOption<T>[]
  placeholder?: 'Выберите значение'
  label?: string
  isRounded?: boolean
  isStretch?: boolean
}

const props = withDefaults(defineProps<Props<T>>(), {
  placeholder: 'Выберите значение',
  isRounded: true,
  isStretch: true,
})

const target = useTemplateRef<HTMLElement>('selectRef')

const modelValue = defineModel<SelectOption<T>>({ required: true })
const isOpen = defineModel('is-open', { default: false })

const selectOption = (value: SelectOption<T>) => {
  modelValue.value = value
  isOpen.value = false
}

const clearSelection = () => {
  modelValue.value = null
  isOpen.value = false
}

const onDisplayClick = () => {
  isOpen.value = !isOpen.value
}

const isValidOptions = computed(() => !props.options || props.options.length === 0)

onClickOutside(target, () => (isOpen.value = false))
</script>

<template>
  <div
    ref="selectRef"
    @click="onDisplayClick"
    @keydown.esc="isOpen = false"
    class="relative box-border select-none bg-black border-2 border-border-opacity"
    :class="[{ 'w-full': isStretch }, { 'rounded-5': isRounded }]"
  >
    <label v-if="label" class="block text-16 font-medium text-gray-700">
      {{ label }}
    </label>

    <div class="flex items-center">
      <div class="flex-1">
        <span v-if="modelValue" class="block py-1 px-8 text-14 truncate text-white">
          {{ modelValue.display }}
        </span>
        <span v-else class="block py-1 px-8 text-14 truncate text-white">
          {{ placeholder }}
        </span>
      </div>

      <div class="absolute right-2 flex items-center space-x-1">
        <CommonIconWrapper
          class="transform transition-transform duration-200"
          :class="{ 'rotate-180': isOpen }"
        >
          <IconArrowDown />
        </CommonIconWrapper>
      </div>
    </div>

    <transition name="slide-fade">
      <ul
        v-show="isOpen"
        class="absolute z-10 mt-1 w-full max-h-[100px] overflow-auto bg-black border border-border-opacity rounded-b-5 shadow-sm"
      >
        <li v-if="isValidOptions" class="text-14 py-5 px-8 text-gray-500 select-none">
          <slot name="no-content">Данных пока нет...</slot>
        </li>
        <li
          v-else
          v-for="{ key, display, raw } in options"
          :key="key"
          @click.stop="selectOption({ key, display, raw })"
          :class="[
            'cursor-pointer text-14  py-5 px-8 truncate',
            modelValue?.key === key ? 'bg-white/50 text-black' : 'hover:opacity-80',
          ]"
        >
          <slot :key="key" :display="display" :raw="raw">
            {{ display }}
          </slot>
        </li>
      </ul>
    </transition>
  </div>
</template>
