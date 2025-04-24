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
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    :style="`min-width: ${width}px; min-height: ${height}px`"
    :viewBox="`0 0 ${width} ${height}`"
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
