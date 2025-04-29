<script setup lang="ts">
import { CommonElementModalWrapper, CommonSwitch } from '@/components/common'
import { injectElements } from '@/lib/provide/provide.elements'
import { ModalSwitchComponent } from '@/components/composed/element'

const { components } = injectElements()
</script>

<template>
  <CommonElementModalWrapper title="Отображение блоков">
    <ModalSwitchComponent v-for="com in components" :component="com" />
  </CommonElementModalWrapper>
</template>
