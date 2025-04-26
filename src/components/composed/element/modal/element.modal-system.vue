<script setup lang="ts">
import { CommonElementModalWrapper } from '@/components/common'
import { ElementModalSaveCheckbox, ElementModalThemeSelect } from '@/components/composed/element'
import { PartModal } from '@/components/composed/part'
</script>

<template>
  <CommonElementModalWrapper title="Системные">
    <PartModal>
      <ElementModalSaveCheckbox />
    </PartModal>
    <PartModal title="Тема" align="column">
      <ElementModalThemeSelect />
    </PartModal>
  </CommonElementModalWrapper>
</template>
