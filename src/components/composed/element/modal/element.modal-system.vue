<script setup lang="ts">
import { CommonElementModalWrapper } from '@/components/common'
import { ModalSaveCheckbox, ModalThemeSelect } from '@/components/composed/element'
import { PartModal } from '@/components/composed/part'
</script>

<template>
  <CommonElementModalWrapper title="Системные">
    <PartModal>
      <ModalSaveCheckbox />
    </PartModal>
    <PartModal title="Тема" align="column">
      <ModalThemeSelect />
    </PartModal>
  </CommonElementModalWrapper>
</template>
