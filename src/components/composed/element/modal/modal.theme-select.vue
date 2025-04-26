<script setup lang="ts">
import { CommonSelect } from '@/components/common'
import { OPTIONS } from '@/constants/theme'
import { injectTheme, provideTheme } from '@/provide/provide.theme'
import { Theme } from '@/types/types.theme'
import { computed } from 'vue'

const { theme, setTheme } = injectTheme()
const options = computed(() => [...OPTIONS.values()])
</script>

<template>
  <CommonSelect v-model="theme" :options="options" @on-select="setTheme" />
</template>
