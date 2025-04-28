<script setup lang="ts">
import { CommonSelect } from '@/components/common'
import { injectTheme } from '@/lib/provide/provide.theme'
import { Theme } from '@/lib/types/types.theme'

const { theme, setTheme, optionsTheme } = injectTheme()
</script>

<template>
  <CommonSelect v-model="theme" :options="optionsTheme" @on-select="setTheme" />
</template>
