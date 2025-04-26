<script setup lang="ts">
import { CommonSelect } from '@/components/common'
import { SelectOption } from '@/components/common/common.select.vue'

import { OPTIONS } from '@/constants/theme'
import { shallowRef } from 'vue'

const select = shallowRef<SelectOption<string>>(OPTIONS[0])
</script>

<template>
  <CommonSelect v-model="select" :options="OPTIONS" />
</template>
