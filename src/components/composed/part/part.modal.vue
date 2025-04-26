<script setup lang="ts">
import CommonPartModalWrapper from '@/components/common/common.part-modal-wrapper.vue'

type Align = 'row' | 'column'

type Props = {
  align?: Align
  title?: string
}

withDefaults(defineProps<Props>(), {
  align: 'row',
})
</script>

<template>
  <CommonPartModalWrapper
    :class="[{ 'flex-row': align === 'row' }, { 'flex-col': align === 'column' }]"
  >
    <p v-if="title" class="font-medium text-16 leading-16 text-primary">{{ title }}:</p>
    <slot />
  </CommonPartModalWrapper>
</template>
