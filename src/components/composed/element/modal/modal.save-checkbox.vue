<script setup lang="ts">
import { CommonSelectCheckbox } from '@/components/common'

import { shallowRef } from 'vue'

const checkbox = shallowRef(false)
</script>

<template>
  <CommonSelectCheckbox title="Запомнить имя персонажа" v-model="checkbox" />
</template>
