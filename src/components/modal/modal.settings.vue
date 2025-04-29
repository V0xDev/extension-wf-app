<script setup lang="ts">
import { CommonIconWrapper, CommonModalContainer } from '@/components/common'
import { ElementModalSystem, ElementModalViewStat } from '@/components/composed/element'
import { IconClose } from '@/components/icon'
import { injectModal } from '@/lib/provide/provide.modal'

const { close } = injectModal()
</script>

<template>
  <CommonModalContainer>
    <div
      @click.stop
      class="w-[300px] h-[400px] flex flex-col bg-bg rounded-8 border-2 border-secondary"
    >
      <div class="flex sticky top-0 justify-between items-center p-18 shadow-b">
        <p class="text-primary font-bold text-22 leading-22">Настройки</p>
        <button @click="close">
          <CommonIconWrapper class="text-icon">
            <IconClose />
          </CommonIconWrapper>
        </button>
      </div>
      <div class="px-18 py-14 flex-1 flex flex-col gap-20 overflow-y-auto">
        <ElementModalSystem />
        <ElementModalViewStat />
      </div>
    </div>
  </CommonModalContainer>
</template>
