<script setup lang="ts">
type Props = {
  width?: string | number
  height?: string | number
  color?: string
}

withDefaults(defineProps<Props>(), {
  width: '24',
  height: '24',
  color: 'currentColor',
})

// Функция для получения числового значения без 'px'
const getNumericValue = (value: string | number) => {
  if (typeof value === 'number') return value
  return parseInt(value.replace('px', ''))
}
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    :style="`min-width: ${width}px; min-height: ${height}px`"
    :viewBox="`0 0 ${getNumericValue(width)} ${getNumericValue(height)}`"
    role="presentation"
  >
    <g :fill="color">
      <slot />
    </g>
  </svg>
</template>

<style>
svg {
  display: inline-block;
}
</style>
