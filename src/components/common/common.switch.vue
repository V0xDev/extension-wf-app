<script setup lang="ts">
import { defineProps, defineEmits, defineModel, withDefaults } from 'vue'

type Props = {
  title?: string
}

type Emits = {
  (e: 'onChange', v: boolean): void
}

defineProps<Props>()

const model = defineModel<boolean>({ required: false, default: false })
const emits = defineEmits<Emits>()
</script>

<template>
  <label class="flex items-center w-fit gap-8 cursor-pointer select-none">
    <div class="relative">
      <input type="checkbox" class="sr-only" v-model="model" @change="emits('onChange', model)" />
      <div
        class="w-38 h-21 bg-tertiary rounded-full border-2 border-primary/30 transition-colors duration-300"
        :class="{ 'bg-tertiary/50': model }"
      ></div>
      <div
        class="absolute top-[4px] left-4 w-14 h-13 translate-x-0 bg-primary/70 rounded-full transform transition-transform duration-300"
        :class="{ 'translate-x-16': model }"
      ></div>
    </div>
    <span class="text-16 leading-16 text-primary">{{ title }}</span>
  </label>
</template>
